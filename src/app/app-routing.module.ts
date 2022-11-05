import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterSolicitudCarComponent} from "./inscriptions/register-solicitud-car/register-solicitud-car.component";
import {ReportSolicitudCarComponent} from "./reports/report-solicitud-car/report-solicitud-car.component";

const routes: Routes = [
  {
  path: 'inscription',
  component: RegisterSolicitudCarComponent
  },
  {
    path: 'reports',
    component: ReportSolicitudCarComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
