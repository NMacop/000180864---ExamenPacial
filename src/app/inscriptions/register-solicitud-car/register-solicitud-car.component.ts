import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "../register.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register-solicitud-car',
  templateUrl: './register-solicitud-car.component.html',
  styleUrls: ['./register-solicitud-car.component.css']
})
export class RegisterSolicitudCarComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
  }

  private initializeForm() {
    this.form = this.formBuilder.group(
      {
        'fecha': [
          null, [Validators.required]
        ],
        'placa': [
          null, [Validators.required]
        ]
      }
    )
  }

  saveSolicitud(value: any) {
    this.registerService.save(value).subscribe(res => {
      console.log(res);
      this._snackBar.open('Solicitud guardada correctamente', 'Cerrar')
      this.router.navigate(['/reports'])
    })
  }
}
