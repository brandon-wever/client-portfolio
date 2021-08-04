import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(){
    console.log('submit button was clicked');
  }

  onFormCancel(){
    console.log('cancel button was clicked');
  }

}
