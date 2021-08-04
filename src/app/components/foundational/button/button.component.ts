import { Component, Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Button Label'
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary'
  @Input() disabled: boolean = false;
  @Output() buttonClickedEvent = new EventEmitter<void>();

  constructor() { }

  onClick() {
    this.buttonClickedEvent.emit();
  }

  ngOnInit(): void {
  }

}
