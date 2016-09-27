import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokebattle',
  templateUrl: './pokebattle.component.html',
  styleUrls: ['./pokebattle.component.scss']
})
export class PokebattleComponent implements OnInit {
  @Input()
  pokemon1;
  @Input()
  pokemon2;

  constructor() { }

  ngOnInit() {
  }
}
