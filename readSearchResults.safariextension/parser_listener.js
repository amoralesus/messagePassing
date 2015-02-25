
function handleMessage(msgEvent) {
  var messageName = msgEvent.name;
  var messageData = msgEvent.message;
  if (messageName === "parseResults") {
    results = parseResults();
    safari.self.tab.dispatchMessage("resultsParsed", results);
  }
};

var get_images = function () {

  var images = $(document).find('img').map(function () {
    return {url: $(this).attr('src'), naturalWidth: this.naturalWidth, naturalHeight: this.naturalHeight}; // return the url and the full object
  }).get();

   // sort the images by image size; naturalWidth appears to be the actual image size
  images.sort(function(a,b) {
    return ((a.naturalWidth * a.naturalHeight) < (b.naturalWidth * b.naturalHeight))
  });

  return images;
};

function parseResults() {
  var snippet = $('body').text();
  var title = document.title;
  var images = get_images();
  return { snippet: snippet, title: title, images: images };
};

safari.self.addEventListener("message", handleMessage, false);
