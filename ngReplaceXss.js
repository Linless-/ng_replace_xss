(function() {
    'use strict';
    angular
        .module('ngReplaceXss', [])
        .directive('ngReplaceXss', directive);

    function directive() {
        var directive = {
            restrict: 'A',
            link: linkFunc
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
          var str = scope.$eval(attr.ngReplaceXss) || '';
          var reg = /((<script).*(\/script>))|((on)\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+)))/g;
          var mtch = str.match(reg);
          for (var i = 0; i < mtch.length; i++) {
            str = str.replace(mtch[i], "");
          }
          angular.element(el).html(str);
        }
    }
})();
