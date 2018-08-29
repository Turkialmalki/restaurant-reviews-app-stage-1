/*
 sw_registration.js
 Registers a service worker for the Restaurant Reviews App
 Author: Steve Prager
*/

// Register service worker (default scope)
if (navigator.serviceWorker) {
	navigator.serviceWorker.register('service_worker.js');
	// console.log('service worker activated!');
}

