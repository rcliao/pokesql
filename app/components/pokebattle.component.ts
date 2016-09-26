import { Component, Input } from '@angular/core';

@Component({
    selector: 'poke-battle',
    templateUrl: 'app/components/pokebattle.component.html'
})
export class PokeBattleComponent {
    @Input()
    pokemon1;
    @Input()
    pokemon2;
}
