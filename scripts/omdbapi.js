console.log( 'ondbapi.js sourced' );
// global search array
var searchResults = [];
$( document ).ready( function(){
  // from spiderman
  console.log( 'bonesaw is ready!!!!!!!!' );

  $( '#searchButton' ).on( 'click', function(){
    console.log( 'in searchButton on click' );
    // get user input
    var movieName = $( '#movieNameIn' ).val();
    console.log( 'searching for:', movieName );
    // omdbapi search url
    // can test the url from console log in Chrome
    var searchURL = 'http://www.omdbapi.com/?s=' + movieName;
    console.log( 'searchURL:', searchURL );
    // ajax call:
    $.ajax({
      url: searchURL,
      dataType: 'JSON',
      success: function( data ){
        console.log( 'ajax success data:', data.Search );
        // store the search results in searchResults
        searchResults = data.Search;
        console.log( 'searchResults:', searchResults );

        //place displayResults before the success function terminates, otherwise it will not properly pull info from server
        displayResults();
      } // end success
    }); // end ajax
  }); // end searchButton on click



  var displayResults = function(){
    console.log('in displayResults');
    console.log('searchResults array: ', searchResults);
    $('#outputDiv').empty();

    for (var i = 0; i < searchResults.length; i++) {
      var displayMovie = document.createElement('h2');
      displayMovie.textContent = searchResults[i].Title + '........... ' + searchResults[i].Year;


      //append displayMovie to DOM
      console.log('Show displayMovie: ', displayMovie);
      $('#outputDiv').append(displayMovie).hide().fadeIn();
      $('#outputDiv').append('<img src="' + searchResults[i].Poster + '">');
    }


  }; 


}); // end doc ready
