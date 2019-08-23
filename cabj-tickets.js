(function(){
  const getSitPairs = () => {
    const sitPairs = [];
    $("td.loc.d + td.loc.d").reverse().each(function () {
      const sit1 = parseInt($(this).attr("asiento"));
      const sit2 = parseInt($(this).attr("asiento")) - 2;
      console.log(sit1, sit2);
      sitPairs.push([sit1, sit2]);
    });

    return sitPairs;
  };


  const clickAndReserve = (sit) => {
    sit.click();
    const clickOnReservar = function() {
      const btn = $('#btnReservar');
      if(btn) {
        btn.click();
        clearInterval(reservAttemp);
      }

    };
    const reservAttemp = setInterval(clickOnReservar, 500);
  };


  const attemptReservation = (sitPairs) => {
    const sitPair = sitPairs[0];
    //sitPairs.map((sitPair) => {
      clickAndReserve($(`td.loc.d[asiento="${sitPair[0]}"]`));
      clickAndReserve($(`td.loc.d[asiento="${sitPair[1]}"]`));
    //})
  };

  attemptReservation(getSitPairs());

})();
