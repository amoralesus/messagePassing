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
  var links = $.map(results, function (n) {
    return n.href;
  });
  return links;
};


safari.self.addEventListener("message", handleMessage, false);
