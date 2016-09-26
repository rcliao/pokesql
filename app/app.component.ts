import { Component, OnInit } from '@angular/core';

// import * as sqlite3 from 'sqlite3';

declare var sqlite3: any;
var db = new sqlite3.Database('pokedex.sqlite');

@Component({
    selector: 'pokesql-app',
    template: `
        <poke-battle
            [pokemon1]="pokemon1"
            [pokemon2]="pokemon2"
        ></poke-battle>
        
        <div id="editor" style="height: 10em;"></div>
        <button (click)="execute()">Execute</button>

        <div id="output">
            <ul>
                <li ng-repeat="output in $ctrl.output">{{output}}</li>
            </ul>
        </div>
    `
})
export class AppComponent implements OnInit {
    pokemon1 = {
        id: 25,
        name: 'pikachu'
    };
    pokemon2 = {
        id: 25,
        name: 'evil pikachu'
    };
    query: string;
    
    
    execute() {
        console.log(this.query);
        db.serialize(() => {
            db.each(this.query, (err, row) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log(row);
                if (row.id) {
                    this.pokemon2.id = row.id;
                }
                if (row.name) {
                    this.pokemon2.name = row.name;
                }
            });
        });
    }
    
    ngOnInit() {
        var editor = ace.edit('editor');
        editor.setTheme('ace/theme/monokai');
        editor.getSession().setMode('ace/mode/sql');
        editor.getSession().on('change', (e) => {
          this.query = editor.getValue();
        });
        editor.commands.addCommand({
          name: 'submit',
          bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
          exec: (editor) => {
            this.execute();
          },
          readOnly: true // false if this command should not apply in readOnly mode
        });
    }
}
