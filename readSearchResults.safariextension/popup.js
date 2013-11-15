
function populateSearchResults(results) {
  $('#searchResultLinks').html('');
  for(var i=0; i < results.length; i++) {
    var li = $("<li></li>").html('<a href="'+results[i].href + '">' + results[i].text + '</a>');
    $('#searchResultLinks').append(li);
  }

}
