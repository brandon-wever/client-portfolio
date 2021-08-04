import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  hide: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  onFormSubmit(){
    console.log('submit button was clicked');
    console.log(this.loginForm.value);
    if (!this.loginForm.valid) {
      return;
    }

    // MAKE LOGIN REQUEST
    console.log('VALID')
  }

  onFormCancel(){
    console.log('cancel button was clicked');
  }

}
