$(document).ready(function() {
  $("button#koko").click(fuction() {
      var $inputs = $('input[type="checkbox"]')
  $inputs.on('change', function () {
    var sum = 0;
    $inputs.each (function () {
      if(this.checked)
      sum += parseInt(this.value);
    });
  });

});
});
