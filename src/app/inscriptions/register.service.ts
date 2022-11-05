import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {SolicitudCar} from "../models/solicitudcar.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  api = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  public save(car: any): Observable<SolicitudCar> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post<SolicitudCar>(this.api, car, {headers});
  }
}
