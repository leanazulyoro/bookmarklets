// Redirects to the custom_plans url in overol for the current sellerId in sellers-ui
var pathParts = window.location.pathname.split('/');
var sellerId = pathParts[2];
location.href = `https://www.properati.com.ar.local.coco:19292/panel/commercial/custom_plans/${sellerId}`;
