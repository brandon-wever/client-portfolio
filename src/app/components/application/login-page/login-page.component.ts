import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get email() { return this.loginForm.get('email'); }

  get password() { return this.loginForm.get('password'); }

  onFormSubmit() {
    if (!this.loginForm.valid) {
      return;
    }

    // MAKE LOGIN REQUEST
    this.authenticationService.login(this.loginForm.value.email, this.loginForm.value.password).pipe(take(1)).subscribe(
      // Successful
      (user) => {
        this.router.navigate(['']);
      },
      // Error callback
      (error) => {
        if (error.status === 401) {
          // Unauthorized
          alert('Email or password is not valid!');
        } else {
          alert('Something is wrong on our end, please try again later!');
        }
        console.log(error);
      }
    );
  }

  onFormCancel(){
    console.log('cancel button was clicked');
  }

}
