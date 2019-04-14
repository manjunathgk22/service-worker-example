// // Make sure sw are supported
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('../sw_cached_pages.js')
//       .then(reg => console.log('Service Worker: Registered (Pages)'))
//       .catch(err => console.log(`Service Worker: Error: ${err}`));
//   });
// }


if('serviceWorker' in navigator){
  window.addEventListener('load', ()=> {
  navigator.serviceWorker
  .register('../sw_cached_site.js')
  .then(req => console.log('Service Worker: Registered', req))   
  .catch(err => console.log(`service worker error ${err}`))
  })
}