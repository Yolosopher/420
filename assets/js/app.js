// variables
const homeHeader = document.querySelector('.home-header');
const headerContainer = document.querySelector('.header-container');

const burgerBtn = document.querySelector('.burger-icon');
const burgerWindow = document.querySelector('.header-burgerMenu');






// event listeners
window.onscroll = () => {
    headerBotFixer();
}
burgerBtn.addEventListener('click', () => {
	burgerWindow.classList.toggle('active');
})








// functions
const headerBotFixer = () => {
	if (window.innerWidth > 1024) {
		if (window.pageYOffset > window.innerHeight - 103) {
            headerContainer.classList.add("scrolled");
            // console.log(`${window.pageYOffset}  `,'chamoisqrola');
		} else {
			headerContainer.classList.remove("scrolled");
            // console.log(`${window.pageYOffset}  `,'aisqrola');
		}
	}
}