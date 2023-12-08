chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
   if (request.action === 'switchLayout') {
     switchKeyboardLayout();
   }
});

function switchKeyboardLayout() {
   // Implement your code to change the keyboard layout on the page
   // For example, you can use JavaScript to interact with input fields
   // and changing their values in accordance with the selected layout.
   console.log('Switching keyboard layout on the current page');
}
