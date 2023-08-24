//スクロールした時の処理
window.addEventListener('scroll', function() {
	//変数宣言
    let scrollPostion = window.scrollY;	//スクロール量
	//id指定
	let header_nav = document.getElementById('header');
	let logoSource = document.getElementById('logoSource');
	let logoImg = document.getElementById('logoImg');
	//800ピクセル以上スクロールした時の処理
	if( scrollPostion >= 800) {
		header_nav.classList.add('fiexedActive');
		logoSource.srcset = 'img/SP/logo-b-sp.svg';
		logoSource.src = 'img/SP/logo-b-sp.svg';
		logoImg.srcset = 'img/PC/logo-b.svg';
		logoImg.src = 'img/PC/logo-b.svg';
	} else {
		header_nav.classList.remove('fiexedActive');
		logoSource.srcset = 'img/SP/1x/logo-w-1-sp.svg';
		logoSource.src = 'img/SP/1x/logo-w-1-sp.svg';
		logoImg.srcset = 'img/PC/1x/logo-w.svg';
		logoImg.src = 'img/PC/img/PC/1x/logo-w.svg';
	}
});