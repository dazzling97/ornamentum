/**
 * Data table HTTP data fetch service.
 */
@Injectable()
export class DataTableHttpDataFetchService<T> {
  constructor(private http: HttpClient, public requestParamMapperService: RequestParamMapperService) {}

  /**
   * Get data bind event handler.
   * @param options Request options or resource path.
   * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
   * @return Data table bind event handler.
   */
  public onDataBind(
    options: string|HttpRequestOptions,
    mapper?: <Q>(response: Observable<Q>) => Observable<DataTableQueryResult<T[]>>,
  ): DataTableDataBindCallback {
    return (params?: DataTableRequestParams): Observable<DataTableQueryResult<T[]>> => {
      const requestOptions = this.requestParamMapperService.mapRequestOptions(options);
      let queryParams = this.requestParamMapperService.mapQueryParams(requestOptions.options);

      if (params) {
        if (params.limit !== undefined) {
          queryParams = queryParams.set('limit', String(params.limit));
        }

        if (params.offset !== undefined) {
          queryParams = queryParams.set('offset', String(params.offset));
        }

        params.fields.forEach((column: DataTableQueryField, index: number) => {
          let query = '';

          if (column.filterable) {
            if (typeof column.filterValue === 'string') {
              if (column.filterValue !== '') {
                query += column.filterValue;
              }
            } else if (Array.isArray(column.filterValue) && column.filterValue.length) {
              query += column.filterValue.join(',');
            }
          }

          if (column.sortable && column.sortOrder !== '') {
            query += `|${column.sortOrder}|${index}`;
          }

          if (query) {
            queryParams = queryParams.set(column.field, query);
          }
        });

        const resource = this.http.get<any>(requestOptions.url, { params: queryParams, ...requestOptions }) as Observable<any>;

        if (mapper) {
          return mapper(resource);
        }

        return resource;
      }
    };
  }

  /**
   * Get filter value extract event handler.
   * @param options Request options or resource path.
   * @param mapper Response data mapper callback. map source stream format to data table expected stream or apply additional formatting.
   * @return Data table filter options event handler.
   */
  public onFilterValueExtract(
    options: string|HttpRequestOptions,
    mapper?: <Q>(response: Observable<Q>) => Observable<DataTableFilterOption[]>,
  ): DataTableFilterValueExtractCallback {
    return (column: DataTableColumnComponent): Observable<DataTableFilterOption[]> => {
      const requestOptions = this.requestParamMapperService.mapRequestOptions(options);
      let queryParams = this.requestParamMapperService.mapQueryParams(requestOptions.options);

      const filterField = column.filterField || column.field;
      queryParams = queryParams.set('field', filterField);

      const resource = this.http.get<any>(requestOptions.url, { params: queryParams, ...requestOptions }) as Observable<any>;

      if (mapper) {
        return mapper(resource);
      }

      return resource;
    };
  }
}
