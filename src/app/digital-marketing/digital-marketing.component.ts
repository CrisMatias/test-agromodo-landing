import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.scss']
})
export class DigitalMarketingComponent implements OnInit{
  formContacto!: FormGroup;
  submitted = false;
  send = false;
  error = false;
  empty = false;

  constructor( private fb: FormBuilder,
               private http: HttpClient, ) {
  }

  ngOnInit() {
      this.formContacto = this.fb.group({
          contact: ['', [Validators.required]],
          name: ['', [Validators.required]],
          empresa: ['', [Validators.required]],
        });
  }

  sendForm(){
      if (this.formContacto.valid) {
          console.log(this.formContacto.value);
          let json = {
                  "subject" : "Agromodo",
                  "body" : "Contacto: " + this.formContacto.controls['contact'].value + "\n Nombre: " + 
                  this.formContacto.controls['name'].value + "\n Empresa: " + this.formContacto.controls['empresa'].value,
                  "mail_to" : "vendocavadevino@gmail.com",
                  "proyect" :"aisa",
                  "env" : "produccion"
          }

          this.http.post('asdasdasdsadsad', json).subscribe(
              data => {
                  this.send = true;
                  setTimeout(() => {
                      this.send = false;
                  }, 5000);
              },
              err => {
                  this.error = true;
                  setTimeout(() => {
                      this.error = false;
                  }, 5000);
              }
          )
          this.formContacto.reset();
          this.submitted = false;
      }else{
          this.submitted = true;
          this.empty = true;
                  setTimeout(() => {
                      this.empty = false;
                  }, 5000);
      }
  }
}
