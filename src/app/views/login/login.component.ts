import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

  rForm: FormGroup;
  loginData: any;                     // A property for our submitted form
  password: string = '';
  username: string = '';
  titleAlert:string = 'This field is required';


  constructor(private fb: FormBuilder) {

    this.rForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'validate': ''
    });

  }


  submitLogin(loginData) {
    this.username = loginData.username;
    this.password = loginData.password;
  }

  ngOnInit() {
    console.log("called")
  }

}
