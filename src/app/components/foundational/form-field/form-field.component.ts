import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fc-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() label: string = 'Input Form Label';
  @Input() placeholder: string = 'Placeholder';

  // https://material.angular.io/components/form-field/examples
  constructor() { }

  ngOnInit(): void {
  }

}
