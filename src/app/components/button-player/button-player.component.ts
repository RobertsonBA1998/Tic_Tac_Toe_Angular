import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-player',
  templateUrl: './button-player.component.html',
  styleUrls: ['./button-player.component.css'],
})
export class ButtonPlayerComponent {
  //passing value from parent to children to determine X and O
  @Input() value: string = '';

  //passing value from parent to children to determine disabled property true/false from btn
  @Input() disabled: boolean = false;

  //creating custom event to let parent ONLY KNOW that an event has occured
  @Output() btnClicked = new EventEmitter<void>();

  //disable button if clicked after event
  handleClick() {
    if (!this.disabled) {
      this.btnClicked.emit();
    }
  }
}
