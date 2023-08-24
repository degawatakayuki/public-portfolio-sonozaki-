const loading = document.querySelector( '.c-loading' );
 
window.addEventListener( 'load', () => {
    setTimeout(() => {
        loading.classList.add( 'hide' );
    }, 3000);
  
}, false );