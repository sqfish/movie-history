define(["jquery"],function($) {
  var $output = $("#movieDataPanel");

  return {
    getOutputElement: function() {
      return $output;
    }
  };
});