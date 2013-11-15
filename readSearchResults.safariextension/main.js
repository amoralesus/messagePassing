var performCommand, validateCommand;

performCommand = function(event) {
  if (event.command === 'openPopup') {
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("parseResults", "_no_payload_in_this_message_");
    // safari.extension.toolbarItems[0].showPopover();
  }
}

validateCommand = function(event) {
  if (event.command === 'openPopup') {
    event.target.disabled = !event.target.browserWindow.activeTab.url;
  }
}


function receiveMessage(theMessageEvent) {
  if(theMessageEvent.name === "resultsParsed") {
    var results = theMessageEvent.message;
    text = "Found: " + results.length.toString() + " results.";
    text += "\nLinks shown below:\n"; 
    for(var i = 0; i < results.length; i++) {
      text += "\n" + results[i];
    }
    alert(text);
  }
}


safari.application.addEventListener("command", performCommand, true);

safari.application.addEventListener("validate", validateCommand, true);

safari.application.addEventListener("message",receiveMessage,false);


