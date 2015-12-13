# Вырезание тегов script и аттрибутов on* из html строки

##Клонирование:
  1. git clone https://github.com/Linless-/ng_replace_xss.git
  2. cd ng_replace_xss

##Описание:
  Данная регулярная строка вырезает из html строки все теги с аттрибутом <script></script> и их содержимым, а акже все аттрибуты из html тегов начинающихся на on*
  Тут выложены оформленные примеры в виде директивы для Angular или же нативного метода в JavaScript

  ```JavaScript
  var reg = /((<script).*(\/script>))|((on)\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+)))/g;
  ```

  ![ngReplaceXss](http://i.imgur.com/kzL7Atl.png)

##Использование:
  Сделаны 2 примера в виде директивы для Angular и в виде нативного метода для JavaScript.

###Angular Директива:
  Подключите файл ngReplaceXss.js и подключите в зависимостях модуль ngReplaceXss
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
  <br/>
  ![ngReplaceXss](http://i.imgur.com/7pmfBec.png)

###Нативный метод:
  Подключить файл replaceXss.js и будет доступен метод replaceXss, который вернет "пропатченную" строку
  ```JavaScript
  replaceXss(...);
  ```
  Итог:
  <br/>
  ![ngReplaceXss](http://i.imgur.com/qJHt9nG.png)
