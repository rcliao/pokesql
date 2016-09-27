import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poke-input',
  templateUrl: './poke-input.component.html',
  styleUrls: ['./poke-input.component.scss']
})
export class PokeInputComponent implements OnInit {
  @Input()
  hint

  constructor() { }

  ngOnInit() {
  }

}
