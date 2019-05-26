import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'mail': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required) 
    })
  }

  onSubmit(){
    const mail = this.signinForm.value["mail"];
    const password = this.signinForm.value["password"];
    this.authService.signinUser(mail, password);
  }

}
