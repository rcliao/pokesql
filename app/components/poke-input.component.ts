import { Component, Input, Output } from '@angular/core';

@Component({
	selector: 'poke-input',
	templateUrl: 'app/components/poke-input.component.html',
	styleUrls: ['app/components/poke-input.component.css']
})
export class PokeInputComponent {
	@Input()
	hint;
}