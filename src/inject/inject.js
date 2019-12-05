chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);
			document.querySelectorAll('header')[1].id = '___symbolSelector';

			document.querySelector('[aria-label="open drawer"]').parentNode.id = '___drawerIconWrapper';

			document.addEventListener('click',() => {
				if (window.location.href.startsWith('https://ftx.com/trade/')) {
					document.querySelectorAll('header')[1].id = '___symbolSelector';
				} else {
					document.querySelectorAll('header')[1].id = '';
				}
			});
		}
	}, 10);
});
