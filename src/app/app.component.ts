import { Component } from '@angular/core';

declare var sqlite3: any;
var db = new sqlite3.Database('pokedex.sqlite');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
