import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SolicitudCar} from "../models/solicitudcar.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  api = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<SolicitudCar[]> {
    return this.http.get<SolicitudCar[]>(this.api);
  }
}
