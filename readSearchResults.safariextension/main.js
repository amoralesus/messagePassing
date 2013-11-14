(function() {
  var performCommand, validateCommand;

  performCommand = function(event) {
    if (event.command === 'openPopup') {
      var activeTab = safari.application.activeBrowserWindow.activeTab;
      var page = activeTab.page;
      alert($(document).find('li').size());
      safari.extension.toolbarItems[0].showPopover();
    }
  };

  validateCommand = function(event) {
    if (event.command === 'openPopup') {
      event.target.disabled = !event.target.browserWindow.activeTab.url;
    }
  };

  safari.application.addEventListener("command", performCommand, true);

  safari.application.addEventListener("validate", validateCommand, true);

}).call(this);

