// variables
const homeHeader = document.querySelector('.home-header')
const headerContainer = document.querySelector('.header-container.scrolled-one')
const headerLoginBtnFirst = document.querySelector('.header-right-login')
const headerLoginBtns = document.querySelectorAll('.header-right-login')

const burgerBtn = document.querySelector('.burger-icon')
const burgerWindow = document.querySelector('.header-burgerMenu')

// event listeners
window.onscroll = () => {
	headerBotFixer()
}
burgerBtn.addEventListener('click', () => {
	if (document.querySelector('.moveX.right')) {
		headerLoginBtnFirst.click()
	}
	burgerWindow.classList.toggle('active')
	document
		.querySelectorAll('.moveX')
		.forEach((obj) => obj.classList.toggle('left'))
})

headerLoginBtns.forEach(headerLoginBtn => {
	headerLoginBtn.addEventListener('click', () => {
		document
			.querySelectorAll('.moveX')
			.forEach((obj) => obj.classList.toggle('right'))
	})
})
headerLoginBtnFirst.click()

// functions
const headerBotFixer = () => {
	if (window.innerWidth > 1024) {
		if (window.pageYOffset > window.innerHeight - 103) {
			// headerContainer.parentElement.parentElement.classList.add("scrolled");
			headerContainer.classList.add('scrolled')
			// console.log(`${window.pageYOffset}  `,'chamoisqrola');
		} else {
			// headerContainer.parentElement.parentElement.classList.remove("scrolled");
			headerContainer.classList.remove('scrolled')
			// console.log(`${window.pageYOffset}  `,'aisqrola');
		}
	}
}
