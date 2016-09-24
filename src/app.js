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
        console.log(e); 
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
