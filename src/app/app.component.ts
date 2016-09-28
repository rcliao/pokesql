import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { SqliteService } from './sqlite.service';
import { FIND_POKEMON, AppState } from './reducers/pokemon.ts';
import { Pokemon } from './models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SqliteService]
})
export class AppComponent implements OnInit {
  pokemon1: Pokemon;
  pokemon2: Pokemon;
  query: string;

  constructor(
    private store: Store<AppState>,
    private sqlite: SqliteService
  ) {
    this.store.select(s => s.pokemon)
      .subscribe(state => {
        this.pokemon1 = state.pokemon1;
        this.pokemon2 = state.pokemon2;
        console.log(state);
      });
  }

  execute() {
    this.sqlite.execute(this.query)
      .subscribe(row => {
        this.store.dispatch({type: FIND_POKEMON, payload: {
          id: row.id,
          name: row.name,
          hp: 42,
          maxHp: 42
        }});
      });
  }

  ngOnInit() {
      let editor = ace.edit('editor');
      editor.setTheme('ace/theme/monokai');
      editor.getSession().setMode('ace/mode/sql');
      editor.getSession().on('change', (e) => {
        this.query = editor.getValue();
      });
      editor.commands.addCommand({
        name: 'submit',
        bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
        exec: () => {
          this.execute();
        },
        readOnly: true // false if this command should not apply in readOnly mode
      });
  }
}
