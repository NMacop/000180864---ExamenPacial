import { Component, OnInit } from '@angular/core';
import {ReportService} from "../report.service";
import {Observable} from "rxjs";
import {SolicitudCar} from "../../models/solicitudcar.model";

@Component({
  selector: 'app-report-solicitud-car',
  templateUrl: './report-solicitud-car.component.html',
  styleUrls: ['./report-solicitud-car.component.css']
})
export class ReportSolicitudCarComponent implements OnInit {

  cars$: Observable<SolicitudCar[] | null>;

  constructor(
    private reportService: ReportService
  ) {
    this.cars$ = this.reportService.getAll();
  }

  ngOnInit(): void {
  }



}
