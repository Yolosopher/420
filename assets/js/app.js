// variables
const homeHeader = document.querySelector('.home-header')
const headerContainer = document.querySelector('.header-container.scrolled-one')
const headerLoginBtnFirst = document.querySelector('.header-right-login')
const headerLoginBtns = document.querySelectorAll('.header-right-login')
const switchToRegisBtn = document.querySelector('.switch-to-register')
const minimizeAuthBtn = document.querySelector('.minimize-svg')

const burgerBtn = document.querySelector('.burger-icon')
const burgerWindow = document.querySelector('.header-burgerMenu')

// Setup isScrolling variable
let isScrolling
/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The function to run after scrolling
 */
var scrollStop = function (callback) {
	// Make sure a valid callback was provided
	if (!callback || typeof callback !== 'function') return

	// Setup scrolling variable
	var isScrolling

	// Listen for scroll events
	window.addEventListener(
		'scroll',
		function (event) {
			// Clear our timeout throughout the scroll
			window.clearTimeout(isScrolling)

			// Set a timeout to run after scrolling ends
			isScrolling = setTimeout(function () {
				// Run the callback
				callback()
			}, 66)
		},
		false
	)
}


// event listeners
if (!document.querySelector('.home-header')) {
	window.addEventListener(
		'scroll',
		() => {
			headerBotFixer()
		},
		false
	)

}
if (burgerBtn) {
	burgerBtn.addEventListener('click', () => {
		if (document.querySelector('.moveX.right')) {
			headerLoginBtnFirst.click()
		}
		burgerWindow.classList.toggle('active')
		document
			.querySelectorAll('.moveX')
			.forEach((obj) => obj.classList.toggle('left'))
	})
}

headerLoginBtns.forEach((headerLoginBtn) => {
	headerLoginBtn.addEventListener('click', () => {
		document.querySelector('.header-burgerMenu').classList.add('right')
		document
			.querySelectorAll('.moveX')
			.forEach((obj) => obj.classList.add('right'))
	})
})
if (minimizeAuthBtn) {
	minimizeAuthBtn.addEventListener('click', () => {
		document.querySelector('.header-burgerMenu').classList.remove('right')
		document
			.querySelectorAll('.moveX')
			.forEach((obj) => obj.classList.remove('right'))
	})
}
// functions
const headerBotFixer = () => {
	if (homeHeader) {
		if (window.innerWidth > 1024) {
			if (window.pageYOffset > window.innerHeight - 123) {
				headerContainer.classList.add('scrolled')
			} else {
				headerContainer.classList.remove('scrolled')
			}
		}
	}
}
if (switchToRegisBtn) {
	switchToRegisBtn.addEventListener('click', () => {
		switchToRegisBtn.closest('form').parentElement.classList.add('register')
	})
}

window.addEventListener('DOMContentLoaded', () => {
	if (!homeHeader) {
		document.querySelector('body').style.marginTop = '103px'
	} else {
		scrollStop(() => {
			if (window.innerWidth < 1025) {
				if (window.pageYOffset === 0) {
					console.log("it's zero")
				} else if (window.pageYOffset > window.innerHeight) {
					console.log(`scrolled down too far`)
				} else if (window.pageYOffset > window.innerHeight / 4) {
					console.log(`scrolled down`)
					window.scroll({
						top: window.innerHeight - 133, // could be negative value
						left: 0,
						behavior: 'smooth',
					})
				} else if (window.pageYOffset < window.innerHeight / 4) {
					console.log(`scrolled up`)
			
					window.scroll({
						top: 0, // could be negative value
						left: 0,
						behavior: 'smooth',
					})
				} 
			}
		})
	}
});