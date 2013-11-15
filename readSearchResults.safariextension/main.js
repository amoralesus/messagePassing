var performCommand, validateCommand;

performCommand = function(event) {
  if (event.command === 'openPopup') {
    showPopover('searchResultsPopover', 'searchResultsToolbarItem' );
    safari.application.activeBrowserWindow.activeTab.page.dispatchMessage("parseResults", "_no_payload_in_this_message_");
  }
}

validateCommand = function(event) {
  if (event.command === 'openPopup') {
    event.target.disabled = !event.target.browserWindow.activeTab.url;
  }
}


function receiveMessage(theMessageEvent) {
  if(theMessageEvent.name === "resultsParsed") {
    var popover = getPopover('searchResultsPopover');
    popover.contentWindow.populateSearchResults(theMessageEvent.message);
  }
}

function getPopover(identifier) {
  return safari.extension.popovers.filter(function (po) { return po.identifier == identifier})[0];
}

function showPopover(popoverIdentifier, toolbarItemIdentifier) {
  var toolbarItem = safari.extension.toolbarItems.filter(function (tbi) {
    return tbi.identifier == toolbarItemIdentifier && tbi.browserWindow == safari.application.activeBrowserWindow;
  })[0];
  var popover = safari.extension.popovers.filter(function (po) {
    return po.identifier == popoverIdentifier;
  })[0];
  toolbarItem.popover = popover;
  toolbarItem.showPopover();
}



safari.application.addEventListener("command", performCommand, true);

safari.application.addEventListener("validate", validateCommand, true);

safari.application.addEventListener("message",receiveMessage,false);


