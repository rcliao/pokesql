import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokeBattleComponent } from './components/pokebattle.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        PokeBattleComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
