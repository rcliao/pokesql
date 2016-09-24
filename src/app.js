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
  })
