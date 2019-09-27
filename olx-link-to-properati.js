var properatiURLs = {
  1055130280: 'https://www.properati.com.co/19gbx_venta_casa_tulua_patio_balcon_primer-piso_patio-de-ropas_sala-comedor_inmobiliaria-invercol'
};
Array.from(document.querySelectorAll('.items-list .item a[data-id]'))
  .map(item => item.getAttribute('data-id'))
  .filter(olxId => Object.keys(properatiURLs).includes(olxId))
  .map(id => {
    Array.from(document.querySelectorAll(`a[href$="${id}"]`))
    .map(item => {
      item.setAttribute('href', properatiURLs[id]);
      item.setAttribute('target', '_blank');
    });
  });
