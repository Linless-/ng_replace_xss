(function(window) {
  var replaceXss = function(str) {
    var str = str || '';
    var reg = /((<script).*(\/script>))|((on)\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+)))/g;
    var mtch = str.match(reg);
    for (var i = 0; i < mtch.length; i++) {
      str = str.replace(mtch[i], "");
    }
    return str;
  }
  window.replaceXss = replaceXss;
})(window);
