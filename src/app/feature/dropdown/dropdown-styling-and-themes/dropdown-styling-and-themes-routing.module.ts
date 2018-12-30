import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownStylingAndThemesComponent } from './index';

/**
 * Represent dropdown styling and themes routes.
 * @type Routes
 */
const dropdownStylingAndThemesRoutes: Routes = [
  {
    component: DropdownStylingAndThemesComponent,
    path: ''
  }
];

/**
 * Dropdown styling and themes routing module.
 * @class DropdownStylingAndThemesRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownStylingAndThemesRoutes)]
})
export class DropdownStylingAndThemesRoutingModule {
}