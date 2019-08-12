## My bookmarklets
A set of script to use in bookmarklets.

## Create a bookmarklet

1. Add a bookmark
2. put this in the url field:
```
javascript: (function () { 
  var jsCode = document.createElement('script'); 
  jsCode.setAttribute('src', 'https://leanazulyoro.github.io/my-bookmarklets/FILENAME.js'); 
  document.body.appendChild(jsCode); 
}());
```
replacing _FILENAME_ for the name of the script.

Available scripts
1. [custom-plan](https://leanazulyoro.github.io/bookmarklets/custom-plan.js)  
_Description:_ Being in seller-ui, go to the page where custom plans are set for, the current seller.
