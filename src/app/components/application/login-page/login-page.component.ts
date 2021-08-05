import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('test@test.com', [Validators.required, Validators.email]),
    password: new FormControl('password', Validators.required)
  });
  hide: boolean = true;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  onFormSubmit() {
    console.log('submit button was clicked');
    console.log(this.loginForm.value);
    if (!this.loginForm.valid) {
      return;
    }

    // MAKE LOGIN REQUEST
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).pipe(take(1)).subscribe(
      // Successful
      (user) => {
        console.log(user);
      },
      // Error callback
      (error) => {
        if (error.status === 401) {
          // Unauthorized
          alert('Email or password is not valid!');
        } else {
          alert('Something is wrong on our end, please try again later!');
        }
      }
    );
  }

  onFormCancel(){
    console.log('cancel button was clicked');
  }

}
