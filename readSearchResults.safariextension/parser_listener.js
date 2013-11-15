
function handleMessage(msgEvent) {
  var messageName = msgEvent.name;
  var messageData = msgEvent.message;
  if (messageName === "parseResults") {
    results = parseResults();
    safari.self.tab.dispatchMessage("resultsParsed", results);
  }
};

function parseResults() {
  var results = $(document).find('.r a');
  var links = []
  for(var i = 0; i < results.size(); i++) {
    links[i] = {href:results[i].href, text:results[i].text};
  }
  return links;
};


safari.self.addEventListener("message", handleMessage, false);
