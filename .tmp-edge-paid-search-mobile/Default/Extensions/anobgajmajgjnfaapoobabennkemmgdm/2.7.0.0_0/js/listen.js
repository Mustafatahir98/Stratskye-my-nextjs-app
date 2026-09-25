// © 2020 Prodege, LLC. All rights reserved

window.addEventListener('message', (event) => {
  if (event.source == window && event.data.action == 'refresh') {
	  chrome.runtime.sendMessage({action: 'refresh'})
  }
});