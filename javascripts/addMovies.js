var addMovies = $('.movieName').val();
var releaseDate = $('.releaseDate').val();
var actors = $('.actors').val();
var rating = $('#rating').val();

 var watched;
  $('.btn').click(function(){
    watched = $(this).val();
    console.log(watched);
  });


$(document).on('click', '#submitMovie', function(){
  
})

// $(document).on('click', '#submitSong', function() {  
//   var song = $('.songName').val();
//   console.log(song);
//   var artist = $('.artistName').val();
//   var album = $('.albumName').val();
//   var year = $('.albumYear').val();
//   console.log(genre);
//   var addSong = {
//     "songName": song,
//     "artistName": artist,
//     "albumName": album,
//     "albumYear": year,
//     "genre": genre
//   };
//   console.log(addSong);
//   $(document).ready(function(){
//     $.ajax({
//       url: "https://glowing-torch-1013.firebaseio.com/songs.json",
//       method: "POST",
//       data: JSON.stringify(addSong)
//     }).done(function(addSong) {
//       console.log(addSong);
//     });
//   });
// });