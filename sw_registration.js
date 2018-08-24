/*
 sw_registration.js
 Registers a service worker for the Restaurant Reviews App
 Author: Steve Prager
*/

// Register service worker (default scope)
if (navigator.serviceWorker) {
	navigator.serviceWorker.register('service_worker.js', {
		// Set scope to full project
		scope: '/mws-restaurant-stage-1/'
	});
	console.log('Service worker registered!');
}

