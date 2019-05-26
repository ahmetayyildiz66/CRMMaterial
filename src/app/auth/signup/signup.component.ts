import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = new FormGroup(
      {
        'mail': new FormControl(null, Validators.required),
        'password': new FormControl(null, Validators.required)
      }
    )
  }

  onSubmit(){
    const mail = this.signupForm.value["mail"];
    const password = this.signupForm.value["password"];
    this.authService.signupUser(mail, password);
  }

}
