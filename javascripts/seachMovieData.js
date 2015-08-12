define(["jquery"],function() {
  return {
    queryMovies: function(t) {
      $.ajax({
        url: "http://www.omdbapi.com/?"
      }).done(function(data) {
        t.call(this, data);
      });
    }
  };
});