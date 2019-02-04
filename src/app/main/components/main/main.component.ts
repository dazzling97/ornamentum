import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { MenuGroup, MenuItem, Theme } from '../../../core/models';

import { ScrollService } from '../../../core/services';

/**
 * Component class for showing main view.
 */
@Component({
  selector: 'app-main',
  styleUrls: ['./main.component.scss'],
  templateUrl: './main.component.html'
})
export class MainComponent {
  public themeCssClass: string = Theme.dark;
  public menuGroups: MenuGroup[] = [
    {
      expanded: true,
      name: 'Data Table',
      menuSubGroup: [
        {
          name: 'Overview',
          menuItems: [
            {
              routePath: '/feature/data-table/overview',
              title: 'Basic Usage',
              navigation: [
                {
                  title: 'Advanced Usage',
                  anchor: 'advancedUsage'
                },
                {
                  title: 'Basic Installation',
                  anchor: 'basicInstallation'
                },
                {
                  title: 'Peer Dependencies',
                  anchor: 'peerDependencies'
                },
                {
                  title: 'Functionality',
                  anchor: 'functionality'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Data Binding',
          menuItems: [
            {
              routePath: '/feature/data-table/client-side-data-binding',
              title: 'Client Side',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/client-side-real-time-data-binding',
              title: 'Client Side Stream',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/server-side-data-binding',
              title: 'Servers Side HTTP',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/server-side-real-time-data-binding',
              title: 'Server Side Websocket',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
          ]
        },
        {
          name: 'Functionality',
          menuItems: [
            {
              routePath: '/feature/data-table/pagination',
              title: 'Pagination',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Page',
                      anchor: 'page'
                    },
                    {
                      title: 'Limit',
                      anchor: 'limit'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/column/sorting',
              title: 'Column Sorting',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Sort Order',
                      anchor: 'sortOrder'
                    },
                    {
                      title: 'Sort Field',
                      anchor: 'sortField'
                    },
                    {
                      title: 'Multi Column Sortable',
                      anchor: 'multiColumnSortable'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/grouping',
              title: 'Row Grouping',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/column/filtering',
              title: 'Filtering',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Filter Text Box',
                  anchor: 'filterTextBox',
                  subNavigation: [
                    {
                      title: 'Filter Placeholder',
                      anchor: 'filterPlaceholder'
                    },
                    {
                      title: 'Show Filter Clear Button',
                      anchor: 'showFilterClearButton'
                    }
                  ]
                },
                {
                  title: 'Filter Dropdown',
                  anchor: 'filterDropdown',
                  subNavigation: [
                    {
                      title: 'Dropdown Filter Menu Position',
                      anchor: 'dropdownFilterMenuPosition'
                    },
                    {
                      title: 'Dropdown Filter Show Option Select Check Box',
                      anchor: 'dropdownFilterShowOptionSelectCheckbox'
                    },
                    {
                      title: 'Dropdown Filter Close Menu OnSelect',
                      anchor: 'dropdownFilterCloseMenuOnSelect'
                    },
                    {
                      title: 'Dropdown Filter Select Mode',
                      anchor: 'dropdownFilterSelectMode'
                    },
                    {
                      title: 'Dropdown Filter Wrap Display Select Limit',
                      anchor: 'dropdownFilterWrapDisplaySelectLimit'
                    },
                    {
                      title: 'Dropdown Filter Show Selected Option Remove Button',
                      anchor: 'dropdownFilterShowSelectedOptionRemoveButton'
                    },
                    {
                      title: 'Dropdown Filter Group By Field',
                      anchor: 'dropdownFilterGroupByField'
                    },
                    {
                      title: 'Dropdown Filter Menu Height',
                      anchor: 'dropdownFilterMenuHeight'
                    },
                    {
                      title: 'Dropdown Filter Menu Width',
                      anchor: 'dropdownFilterMenuWidth'
                    },
                    {
                      title: 'Dropdown Filter Multi Select Option Max Width',
                      anchor: 'dropdownFilterMultiSelectOptionMaxWidth'
                    },
                    {
                      title: 'Dropdown Filter Searchable',
                      anchor: 'dropdownFilterSearchable'
                    },
                    {
                      title: 'Dropdown Filter Search Debounce',
                      anchor: 'dropdownFilterSearchDebounce'
                    },
                    {
                      title: 'Dropdown Filter Search Debounce Time',
                      anchor: 'dropdownFilterSearchDebounceTime'
                    },
                    {
                      title: 'Column Value Filter',
                      anchor: 'filter'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/row-selection',
              title: 'Row Selection',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Row Selection Mode',
                      anchor: 'selectMode'
                    },
                    {
                      title: 'Show Row Select Checkbox',
                      anchor: 'showRowSelectCheckbox'
                    },
                    {
                      title: 'Show Row Select All Checkbox',
                      anchor: 'showRowSelectAllCheckbox'
                    },
                    {
                      title: 'Select On Row Click',
                      anchor: 'selectOnRowClick'
                    },
                    {
                      title: 'Select Track By',
                      anchor: 'selectTrackBy'
                    },
                    {
                      title: 'Set Selected Row',
                      anchor: 'selectedRow'
                    },
                    {
                      title: 'Set Selected Rows',
                      anchor: 'selectedRows'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Templating',
          menuItems: [
            {
              routePath: '/feature/data-table/templates/cell-template',
              title: 'Cell Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Column',
                      anchor: 'column'
                    },
                    {
                      title: 'Row',
                      anchor: 'row'
                    },
                    {
                      title: 'Span Index',
                      anchor: 'spanIndex'
                    },
                    {
                      title: 'Row Span',
                      anchor: 'rowSpan'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/templates/expand-template',
              title: 'Row Expand Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Row',
                      anchor: 'row'
                    },
                    {
                      title: 'Expand On Row Click',
                      anchor: 'expandOnRowClick'
                    },
                    {
                      title: 'Show Row Expand Loading Spinner',
                      anchor: 'showRowExpandLoadingSpinner'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/templates/loading-spinner-template',
              title: 'Loading Spinner Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/templates/no-records-template',
              title: 'No Records Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Options',
          menuItems: [
            {
              routePath: '/feature/data-table/loading-spinner',
              title: 'Data Loading Spinner',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/substitute-rows',
              title: 'Substitute Rows',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage',
                  subNavigation: [
                    {
                      title: 'Without Substitute Rows',
                      anchor: 'withoutSubstituteRows'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/header-details',
              title: 'Header Details',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Title',
                      anchor: 'title'
                    },
                    {
                      title: 'Show Refresh Button',
                      anchor: 'showRefreshButton'
                    },
                    {
                      title: 'Show Column Selector',
                      anchor: 'showColumnSelector'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Styling',
          menuItems: [
            {
              routePath: '/feature/data-table/responsive-configuration',
              title: 'Responsive Configuration',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Content Height',
                      anchor: 'contentHeight'
                    },
                    {
                      title: 'Width',
                      anchor: 'width'
                    },
                    {
                      title: 'Min Height',
                      anchor: 'minHeight'
                    },
                    {
                      title: 'Min Width',
                      anchor: 'minWidth'
                    },
                    {
                      title: 'Expander Column Width',
                      anchor: 'expanderColumnWidth'
                    },
                    {
                      title: 'Index Column Width',
                      anchor: 'indexColumnWidth'
                    },
                    {
                      title: 'Selection Column Width',
                      anchor: 'selectionColumnWidth'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/styling-and-themes',
              title: 'Themes',
              navigation: [
                {
                  title: 'Including Theme Support',
                  anchor: 'themeSupport',
                  subNavigation: [
                    {
                      title: 'Base Theme',
                      anchor: 'baseTheme'
                    },
                    {
                      title: 'Dark Theme',
                      anchor: 'darkTheme'
                    },
                    {
                      title: 'Flat Theme',
                      anchor: 'flatTheme'
                    },
                    {
                      title: 'Ornamentum Theme',
                      anchor: 'ornamentumTheme'
                    },
                    {
                      title: 'Aegean Theme',
                      anchor: 'aegeanTheme'
                    }
                  ]
                }
              ]
            },
            {
              routePath: '/feature/data-table/custom-theming',
              title: 'Custom Theming'
            }
          ]
        },
        {
          name: 'Advanced',
          menuItems: [
            {
              routePath: '/feature/data-table/events',
              title: 'Events',
              navigation: [
                {
                  title: 'Events Hierarchy',
                  anchor: 'eventsHierarchy'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Events',
                  anchor: 'usefulEvents',
                  subNavigation: [
                    {
                      title: 'Column Bind',
                      anchor: 'columnBind'
                    },
                    {
                      title: 'Init',
                      anchor: 'init'
                    },
                    {
                      title: 'Data Bound',
                      anchor: 'dataBound'
                    },
                    {
                      title: 'Row Bind',
                      anchor: 'rowBind'
                    },
                    {
                      title: 'Cell Bind',
                      anchor: 'cellBind'
                    },
                    {
                      title: 'Row Select Change',
                      anchor: 'rowSelectChange'
                    },
                    {
                      title: 'All Row Select Change',
                      anchor: 'allRowSelectChange'
                    },
                    {
                      title: 'Row Click',
                      anchor: 'rowClick'
                    },
                    {
                      title: 'Row Double Click',
                      anchor: 'rowDoubleClick'
                    },
                    {
                      title: 'Cell Click',
                      anchor: 'cellClick'
                    },
                    {
                      title: 'Header Click',
                      anchor: 'headerClick'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/state-persistence',
              title: 'State Persistence',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Storage Mode',
                      anchor: 'storageMode'
                    },
                    {
                      title: 'State Saving ID',
                      anchor: 'stateId'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/data-table/translations',
              title: 'Translations',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Translations for No Data',
                  anchor: 'translationsForNoData',
                  subNavigation: [
                    {
                      title: 'No Data Message Header',
                      anchor: 'noDataMessageHeader'
                    },
                    {
                      title: 'No Data Message Body',
                      anchor: 'noDataMessageBody'
                    }
                  ]
                },
                {
                  title: 'Translations for Pagination',
                  anchor: 'translationsForPagination',
                  subNavigation: [
                    {
                      title: 'Pagination Limit',
                      anchor: 'paginationLimit'
                    },
                    {
                      title: 'Pagination Range',
                      anchor: 'paginationRange'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Experimental',
          menuItems: [
            {
              routePath: '/feature/data-table/column/resizing',
              title: 'Column Resizing',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
          ]
        }
      ]
    },
    {
      expanded: true,
      name: 'Dropdown',
      menuSubGroup: [
        {
          name: 'Overview',
          menuItems: [
            {
              routePath: '/feature/dropdown/overview',
              title: 'Basic Usage',
              navigation: [
                {
                  title: 'Advanced Usage',
                  anchor: 'advancedUsage'
                },
                {
                  title: 'Basic Installation',
                  anchor: 'basicInstallation'
                },
                {
                  title: 'Peer Dependencies',
                  anchor: 'peerDependencies'
                },
                {
                  title: 'Functionality',
                  anchor: 'functionality'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Data Binding',
          menuItems: [
            {
              routePath: '/feature/dropdown/client-side-data-binding',
              title: 'Client Side Basic',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/client-side-real-time-data-binding',
              title: 'Client Side Stream',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/server-side-data-binding',
              title: 'Server Side',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/server-side-real-time-data-binding',
              title: 'Server Side Websocket',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Options',
          menuItems: [
            {
              routePath: '/feature/dropdown/limit',
              title: 'Data Limit',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/disable',
              title: 'Dropdown Disabling',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/item-disabling',
              title: 'Item Disabling',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
          ]
        },
        {
          name: 'Features',
          menuItems: [
            {
              routePath: '/feature/dropdown/display-items',
              title: 'Display Items',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/item-selection',
              title: 'Item Selection',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Set First Option Selected',
                      anchor: 'setFirstOptionSelected'
                    },
                    {
                      title: 'Show Option Select Checkbox',
                      anchor: 'showOptionSelectCheckbox'
                    },
                    {
                      title: 'Selected Option',
                      anchor: 'selectedOption'
                    },
                    {
                      title: 'Selected Options',
                      anchor: 'selectedOptions'
                    },
                    {
                      title: 'Select Mode',
                      anchor: 'selectMode'
                    },
                    {
                      title: 'Show Clear Selection Button',
                      anchor: 'showClearSelectionButton'
                    },
                    {
                      title: 'Show Selected Option Remove Button',
                      anchor: 'showSelectedOptionRemoveButton'
                    },
                    {
                      title: 'Multi Select Option Max Width',
                      anchor: 'multiSelectOptionMaxWidth'
                    },
                    {
                      title: 'Wrap Display Select Limit',
                      anchor: 'wrapDisplaySelectLimit'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/filtering',
              title: 'Filtering',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Filter Debounce',
                      anchor: 'filterDebounce'
                    },
                    {
                      title: 'Filter Debounce Time',
                      anchor: 'filterDebounceTime'
                    },
                    {
                      title: 'Filter Text',
                      anchor: 'filterText'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/grouping',
              title: 'Grouping',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Templating',
          menuItems: [
            {
              routePath: '/feature/dropdown/templates/dropdown-option-template',
              title: 'Option Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/templates/dropdown-option-group-header-template',
              title: 'Option Group Header Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/templates/loading-spinner-template',
              title: 'Loading Spinner Template',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            }
          ]
        },
        {
          name: 'Styling',
          menuItems: [
            {
              routePath: '/feature/dropdown/menu-position',
              title: 'Menu Position',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/menu-width-height',
              title: 'Menu Width & Height',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'Menu Height',
                      anchor: 'menuHeight'
                    },
                    {
                      title: 'Menu Width',
                      anchor: 'menuWidth'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/styling-and-themes',
              title: 'Themes',
              navigation: [
                {
                  title: 'Including Theme Support',
                  anchor: 'themeSupport',
                  subNavigation: [
                    {
                      title: 'Base Theme',
                      anchor: 'baseTheme'
                    },
                    {
                      title: 'Dark Theme',
                      anchor: 'darkTheme'
                    },
                    {
                      title: 'Flat Theme',
                      anchor: 'flatTheme'
                    },
                    {
                      title: 'Ornamentum Theme',
                      anchor: 'ornamentumTheme'
                    },
                    {
                      title: 'Aegean Theme',
                      anchor: 'aegeanTheme'
                    }
                  ]
                }
              ]
            },
            {
              routePath: '/feature/dropdown/custom-theming',
              title: 'Custom Theming'
            }
          ]
        },
        {
          name: 'Advanced',
          menuItems: [
            {
              routePath: '/feature/dropdown/load-data-on-init',
              title: 'Load Data On Init',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/events',
              title: 'Events',
              navigation: [
                {
                  title: 'Events Hierarchy',
                  anchor: 'eventsHierarchy'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Events',
                  anchor: 'usefulEvents',
                  subNavigation: [
                    {
                      title: 'Init',
                      anchor: 'init'
                    },
                    {
                      title: 'Data Bound',
                      anchor: 'dataBound'
                    },
                    {
                      title: 'Select Change',
                      anchor: 'selectChange'
                    },
                    {
                      title: 'Trigger Select Change On Init',
                      anchor: 'triggerSelectChangeOnInit'
                    },
                    {
                      title: 'Trigger Select Change on First Option Select',
                      anchor: 'triggerSelectChangeOnFirstOptionSelect'
                    },
                    {
                      title: 'Trigger Select Change On Model Update',
                      anchor: 'triggerSelectChangeOnModelUpdate'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
            {
              routePath: '/feature/dropdown/translations',
              title: 'Translations',
              navigation: [
                {
                  title: 'What You Will See',
                  anchor: 'whatYouWillSee'
                },
                {
                  title: 'Basic Usage',
                  anchor: 'basicUsage'
                },
                {
                  title: 'Useful Properties',
                  anchor: 'usefulProperties',
                  subNavigation: [
                    {
                      title: 'No Data Message',
                      anchor: 'noDataMessage'
                    },
                    {
                      title: 'Filter Placeholder',
                      anchor: 'filterPlaceholder'
                    },
                    {
                      title: 'Select Placeholder',
                      anchor: 'selectPlaceholder'
                    },
                    {
                      title: 'Selected Item Wrap Placeholder',
                      anchor: 'selectedItemWrapPlaceholder'
                    }
                  ]
                },
                {
                  title: 'Suggested Links',
                  anchor: 'suggestedLinks'
                }
              ]
            },
          ]
        }
      ]
    }
  ];

  public activeMenuItem: MenuItem;

  @ViewChild('pageWrapper')
  public pageWrapper: ElementRef;

  constructor(private router: Router, private scrollService: ScrollService, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  public onThemeChange(cssClass: string): void {
    this.themeCssClass = cssClass;
  }

  public onRouteChange(): void {
    this.setActiveMenuItem();
    this.pageWrapper.nativeElement.scrollTop = 0;
  }

  private setActiveMenuItem(): void {
    const pathSegments = this.router.url.split('#');
    for (const menuGroup of this.menuGroups) {
      for (const menuSubGroup of menuGroup.menuSubGroup) {
        const item = menuSubGroup.menuItems.find((menuItem: MenuItem) => {
          return menuItem.routePath === pathSegments[0];
        });

        if (item) {
          this.activeMenuItem = item;
          if (isPlatformBrowser(this.platformId) && this.pageWrapper && pathSegments.length > 1) {
            window.setTimeout(() => {
              this.scrollService.scrollToHash(this.pageWrapper.nativeElement, pathSegments[1]);
            });
          }
          return;
        }
      }
    }
  }
}
