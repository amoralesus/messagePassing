
function populateSearchResults(content) {
  $('#popup_content').html('');

  $('#popup_content').append('<h1>'+ content.title + '</h1>');

  $('#popup_content').append('<i>' + content.snippet + '</i>');

  $('#popup_content').append('<h3> Images </h3>');

  var images_html = '<ul>';
  for(var i in content.images) {
    images_html += '<li>' + content.images[i].url + '</li>';
  };
  images_html += '</ul>';

  $('#popup_content').append(images_html);
};
