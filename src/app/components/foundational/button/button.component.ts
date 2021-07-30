import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Button Label'
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary'
  constructor() { }

  ngOnInit(): void {
  }

}
