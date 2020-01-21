var ids = Array.from(document.querySelectorAll('li[data-aut-id=itemBox] > a')).map((a) => a.href.match(/iid\-([0-9]+)/)[1]);
var jsCode = document.createElement('script');
jsCode.setAttribute('src', `https://us-central1-properati-115d.cloudfunctions.net/olxProperatiListings?ids=${ids.join(
  ',')}` );
document.body.appendChild(jsCode);
