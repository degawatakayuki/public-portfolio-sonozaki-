// let menu_btn = document.getElementById('hamburger-btn');
// let header_nav = document.getElementById('headerNavi');
// let farstViewBg = document.getElementById('farstView');

// menu_btn.addEventListener('click' , function () {
//     header_nav.classList.toggle('menu-open');
//     farstViewBg.classList.toggle('menu-open');
// } );

let menu_btn = document.getElementById('navToggle');
let header_nav = document.getElementById('headerNavi');
let farstViewBg = document.getElementById('farstView');

let spMainNav = document.getElementById('spMainNav__list');

menu_btn.addEventListener('click' , function () {
    // header_nav.classList.toggle('menu-open');
    farstViewBg.classList.toggle('menu-open');
} );
//SPのナビメニューをクリックしたらナビが閉じる
spMainNav.addEventListener('click' , function () {
    // header_nav.classList.toggle('menu-open');
    menu_btn.checked = false;
} );