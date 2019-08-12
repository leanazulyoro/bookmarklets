// Redirects to the lead url in overol for the current sellerId in sellers-ui
var pathParts = window.location.pathname.split('/');
var sellerId = pathParts[2];
window.open(`https://www.properati.com.ar.local.coco:19292/usuarios/messages?seller_id=${sellerId}`);
