import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { pokemonReducer } from './reducers/pokemon';

import { AppComponent } from './app.component';
import { PokebattleComponent } from './pokebattle/pokebattle.component';
import { PokeInputComponent } from './poke-input/poke-input.component';
import { PokeOutputComponent } from './poke-output/poke-output.component';

@NgModule({
  declarations: [
    AppComponent,
    PokebattleComponent,
    PokeInputComponent,
    PokeOutputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.provideStore({ pokemon: pokemonReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
