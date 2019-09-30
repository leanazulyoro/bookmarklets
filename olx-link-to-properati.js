
var ids = Array.from(document.querySelectorAll('.items-list .item a[data-id]'))
  .map(item => item.getAttribute('data-id'));

var jsCode = document.createElement('script');
jsCode.setAttribute('src', 'https://us-east1-properati-staging.cloudfunctions.net/olx-ads-link-to-properati?ids=1001711819,1001705153' );
document.body.appendChild(jsCode);
