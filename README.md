# Вырезание тегов script и аттрибутов on* из html строки

##Clone:
  1. git clone https://github.com/Linless-/ng_replace_xss.git
  2. cd ng_replace_xss

##Usage:
  Сделаны 2 примера в виде директивы для Angular и в виде нативного метода для JavaScript.

###Angular Directive
  ```JavaScript
  var app = function($scope) {
    $scope.testHtml = '<div onclick="alert()">testOnClick</div><div onmouseover="alert()" style="color: red;">testOnmouseOver</div>';
  }
  app.$inject = ['$scope'];
  angular
      .module('app', ['ngReplaceXss'])
      .controller('app', app);
  ```
  ```html
  <div ng-replace-xss="testHtml"></div>
  ```
  Итог:
  ![ngReplaceXss](http://i.imgur.com/7pmfBec.png)

###Native Replace
  Подключить файл replaceXss.js и будет доступен метод replaceXss, который вернет "пропатченную" строку
  ```JavaScript
  replaceXss(...);
  ```
  Итог:
  ![ngReplaceXss](http://i.imgur.com/qJHt9nG.png)
