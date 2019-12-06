var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		addIds();
		
		document.addEventListener('click',() => {
			addIds();
		});
	}
}, 10);

function addIds() {
	if (window.location.href.startsWith('https://ftx.com/trade/')) {
		document.querySelectorAll('header')[1].id = '___symbolSelector';
		document.querySelector('[aria-label="open drawer"]').parentNode.id = '___drawerIconWrapper';
	} else {
		document.querySelectorAll('header')[1].id = '';
		document.querySelector('[aria-label="open drawer"]').parentNode.id = '';
	}
}
