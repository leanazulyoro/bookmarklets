// BOF Helper functions
// ref.: https://gist.github.com/nmsdvid/8807205
function debounce(a, b, c) {
  let d;
  return function () {
    let e = this, f = arguments;
    clearTimeout(d), d = setTimeout(function () {d = null, c || a.apply(e, f);},
      b), c && !d && a.apply(e, f);
  };
}

function waitForElementToDisplay(selector, fn, time) {
  if (document.querySelector(selector) !== null) {
    console.log(selector + ' is visible!!');
    if (typeof fn === 'function') {
      fn();
    }
  }
  else {
    setTimeout(function () {
      waitForElementToDisplay(selector, fn, time);
    }, time);
  }
}

function whenUrlChanges(fn, time, inmediate) {
  let href = location.href;
  if (inmediate && typeof fn === 'function') {
    fn();
  }
  setInterval(function () {
    if (location.href !== href) {
      href = location.href;
      console.log('url changed!!');
      if (typeof fn === 'function') {
        fn();
      }
    }
  }, time);
}

// EOF Helper functions


let observer;
let index = 0;

function startProperatizing() {
  const properatize = debounce(function () {
    var ids = Array.from(document.querySelectorAll(`li[data-aut-id=itemBox]:nth-child(n+${index}) > a`))
    .map((a) => a.href.match(/iid\-([0-9]+)/)[1]);
    if (ids.length === 0) return;
    index = index === 0 ? index + ids.length + 2 : index + ids.length;
    var jsCode = document.createElement('script');
    jsCode.setAttribute('src',
      `https://us-central1-properati-115d.cloudfunctions.net/olxProperatiListings?ids=${ids.join(
        ',')}`);
    document.body.appendChild(jsCode);
  }, 1000);

  // initial call
  properatize();
  // check when new items are added or changed, and call properatize when that happens
  observer = new MutationObserver(function (mutations) {
    for (let mutation of mutations) {
      if (mutation.type === 'childList') {
        properatize();
      }
    }
  });
  observer.observe(
    document.querySelector('[data-aut-id="itemsList"]'),
    { childList: true },
  );

  console.log('started properatizing...');
}


function stopProperatizing() {
  if (observer && observer.disconnect) {
    observer.disconnect();
  }
  index = 0;
  console.log('stopped properatizing.');
}

function checkIfRealEstateAndRun() {
  if (document.querySelector('[data-aut-id=category_16]') !== null) {
    console.log('in real estate');
    startProperatizing();
  } else {
    console.log('not in real estate');
    stopProperatizing();
  }
}

whenUrlChanges(
  function () {
    index = 0;
    waitForElementToDisplay('[data-aut-id=itemBox]',
      checkIfRealEstateAndRun,
      100);
  },
  100,
  true,
);

