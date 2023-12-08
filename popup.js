document.addEventListener('DOMContentLoaded', function () {
  var switchButton = document.getElementById('switchButton');

  switchButton.addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'switchLayout' });
    });
  });
});
