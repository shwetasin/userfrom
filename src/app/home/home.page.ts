import { Component } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/local-storage.service'



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userSection: FormGroup;
  http: any;
  formSubmitted: boolean = false;
  userData: any[] = [];
  constructor(
    private localStorage: LocalStorageService
  ) {
    // --------------------------user from class--------------------------
    this.userSection = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      userName: new FormControl("", [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
      phone: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      password: new FormControl("", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      address: new FormControl("", [Validators.required, Validators.pattern('^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$')])
    });

    console.log(typeof (this.userData));
  }
  onSubmit(value: any) {

 
    // -----------------------get data localStorage----------------------------
    if (value !== null || value !== undefined) {
      let data: any[] = []
      let val = localStorage.getItem('userList');
      // if ((val != null || val !== undefined || val !== '')) {
        // this.userData = JSON.parse(val);
        if ((val != null || val !== undefined || val !== ''))
          // console.log(this.userData);
  
        if (this.userData !== null) {
          this.userData = [...this.userData, ...[value]]
          localStorage.setItem('userList', JSON.stringify(this.userData));
          this.userSection.reset();
  
        } else {
          localStorage.setItem('userList', JSON.stringify([value]));
          this.userSection.reset();
        }
      } else {
        this.userData.push(value)
        localStorage.setItem('userList', JSON.stringify(this.userData))
      }
  
    }
  
    }
  // }
