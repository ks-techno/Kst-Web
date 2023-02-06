import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  public buttonText = '';

	@Input()
	set text(name: string) {
		this.buttonText = name.toUpperCase();
	}
	get name(): string {
		return this.buttonText;
	}

	@Input() btnClass: string = 'btn-success';
	@Input() type: string = 'button';
	@Output() btnClick = new EventEmitter();


	constructor() {}

	onClick() {
		this.btnClick.emit('test');
	}
}