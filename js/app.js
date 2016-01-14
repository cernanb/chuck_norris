var joke = "";
var punchSound = document.getElementById('punchSound');

$.getJSON( "http://api.icndb.com/jokes/random", function( data ) {
 
  joke = data.value.joke
  console.log(data.value.joke);
});


$('.quote-btn').click(function(){
  
  punchSound.play();  
    $.getJSON( "http://api.icndb.com/jokes/random", function( data ) {
    
    joke = data.value.joke
    console.log(data.value.joke);
  });
  $('.quote').html(joke);
});
  
$('#tweetButton').click(function(e){
  e.preventDefault();
  
  var quote = $('.quote').text();
  window.open('http://twitter.com/share?url=undefined&text=' + quote);
});

$('#mailButton').click(function(e){
  e.preventDefault();
  
  var quote = $('.quote').text();
  window.open('mailto:?subject=Email Quote&body='+quote);
});
