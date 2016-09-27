import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokeBattleComponent } from './components/pokebattle.component';
import { PokeInputComponent } from './components/poke-input.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        PokeBattleComponent,
        PokeInputComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
