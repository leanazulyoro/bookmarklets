const properatiURLs = {
  1055130280: 'https://www.properati.com.co/19gbx_venta_casa_tulua_patio_balcon_primer-piso_patio-de-ropas_sala-comedor_inmobiliaria-invercol'
};
const itemIds = Array.from(
    document.querySelectorAll('.items-list .item a[data-id]')
  )
  .map(item => item.getAttribute('data-id'));

debugger;

const filteredItems = itemIds.filter(olxId => Object.keys(properatiURLs).includes(olxId));
filteredItems.map(id => {
  debugger;
  document.querySelector(`a[href$="${id}"]`).setAttribute('href', properatiURLs[id]);
});



