const colorPk = "#E5006E";
const colorW = "#FEF9F9";
console.log("load");


window.onload = function () {
	//lax.jsを初期化
	lax.init()
console.log("las");
	// ドライバーを追加する
	lax.addDriver('scrollY', function () {
		return window.scrollY;
	});

	// 要素にアニメーションを紐づける
	lax.addElements('.js-lax', {
		scrollY: {
			translateX: [
			[0, 'pageHeight/6', 'pageHeight/3', 'pageHeight/2', 'pageHeight/1.4','pageHeight/1.28'],
			[0, 50, 50, 0, 0, '-pageWidth'],
			{easing: 'easeInOutQuart'}
			],
		 translateY: [
			[0, 'pageHeight/6', 'pageHeight/3', 'pageHeight/2'],
			[0, 20, -500, 0],
			{easing: 'easeInOutQuart'}
		 ],
		 scale: [
			[0, 'pageHeight/6', 'pageHeight/3', 'pageHeight/2'],
			[1, 1.7, 1.7, 1],
			{easing: 'easeInOutQuart'}
		 ],
		 opacity:[
			[0, 'pageHeight/1.4','pageHeight/1.28'],
			[1,1,0],
			{easing: 'easeOutQuart'}
		 ]
		 
		}
	});
	lax.addElements('.js-lax_footer', {
		scrollY: {
		 translateY: [
			['elInY','pageHeight-screenHeight'],
			[400, 0],
			{easing: 'easeInOutQuart'}
		 ],
		 scale: [
			['elInY', 'pageHeight-screenHeight/1.8'],
			[0.8, 0.95],
			{easing: 'easeInOutQuart'}
		 ]
		}
	});
}
const targetButtons = document.querySelectorAll('.linkButton');
const buttonIcons = document.querySelectorAll('.buttonIcon');

targetButtons.forEach((button, index) => {
    button.addEventListener('mouseover', () => {
        button.style.backgroundColor = colorPk;
        button.style.color = colorW;
        if (buttonIcons[index]) buttonIcons[index].style.fill = colorW;
    }, false);

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = colorW;
        button.style.color = colorPk;
        if (buttonIcons[index]) buttonIcons[index].style.fill = colorPk;
    }, false);
});

//menu
const navInput = document.getElementById('overlay-input');

//ipad対応
const flour = document.getElementById('flour');
flour.style.opacity = "1";

const hamburger = document.querySelectorAll('.menuA');
const hamburgerA = Array.from(hamburger);
const overlayText = document.getElementById('overlayText');

// ハンバーガーメニュー内のタイトルをクリックしたら
overlayText.addEventListener("click", (event) => {
    location.href = '#top'
	//ipad対応
	flour.style.opacity = "1";
    navInput.checked = false;
});
hamburgerA.forEach( function(element) {
    // ハンバーガーメニュー内のリンクタグをクリックしたら
    element.addEventListener('click',function(){
	  //ipad対応
	  flour.style.opacity = "1";
      navInput.checked = false;
    })
  })
//ipad対応
navInput.addEventListener('change', function() {
	if (this.checked) {
	  flour.style.opacity = "0";
	} else {
	  flour.style.opacity = "1";
	}
  });