var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('pokedex.sqlite');

angular.module('pokesql', []);

angular.module('pokesql')
  .component('pokeSqlApp', {
    templateUrl: 'control.html',
    controller: function($scope) {
      console.log('loaded pokesql app component');
      var editor = ace.edit('editor');
      editor.setTheme('ace/theme/monokai');
      editor.getSession().setMode('ace/mode/sql');
      var self = this;
      this.execute = execute;
      this.output = [];
      
      editor.getSession().on('change', function(e) {
        self.query = editor.getValue();
      });
      editor.commands.addCommand({
        name: 'submit',
        bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
        exec: function(editor) {
          execute();
        },
        readOnly: true // false if this command should not apply in readOnly mode
      });

      this.pokemon1 = {
        id: 1,
        name: 'Bulbasaur',
        maxHp: 26,
        hp: 26
      };
      this.pokemon2 = {
        id: 25,
        name: 'Pikachu',
        maxHp: 42,
        hp: 42
      };

      function execute() {
        db.serialize(function() {
            db.each(self.query, function(err, row) {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log(row);
                self.output.push(row);
                if (row.id) {
                    self.pokemon2.id = row.id;
                }
                if (row.name) {
                    self.pokemon2.name = row.name;
                }
                $scope.$apply();
            });
        });
      }
    }
  });

  angular.module('pokesql')
    .component('pokeBattle', {
      templateUrl: 'src/partials/battle.html',
      bindings: {
        pokemon1: '<',
        pokemon2: '<'
      },
      controller: function($scope) {
        var self = this;

      }
    })
