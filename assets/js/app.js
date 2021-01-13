// variables
const homeHeader = document.querySelector('.home-header')
const headerContainer = document.querySelector('.header-container.scrolled-one')
const headerLoginBtnFirst = document.querySelector('.header-right-login')
const headerLoginBtns = document.querySelectorAll('.header-right-login')
const switchToRegisBtn = document.querySelector('.switch-to-register')
const minimizeAuthBtn = document.querySelector('.minimize-svg')
const respoMenuToggler = document.querySelector('.respo-menu-toggler')

const burgerBtns = document.querySelectorAll('.burger-icon')
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
if (document.querySelector('.home-header')) {
	window.addEventListener(
		'scroll',
		() => {
			headerBotFixer()
		},
		false
	)
}
burgerBtns.forEach(burgerBtn => {
	burgerBtn.addEventListener('click', () => {
		if (document.querySelector('.moveX.right')) {
			headerLoginBtnFirst.click()
		}
		document.querySelector('.header-burgerMenu').classList.toggle('left')
		document.querySelector('body').classList.toggle('noscroll')
		burgerWindow.classList.toggle('active')
		document
			.querySelectorAll('.moveX')
			.forEach((obj) => obj.classList.toggle('left'))
	})
})


headerLoginBtns.forEach((headerLoginBtn) => {
	headerLoginBtn.addEventListener('click', () => {
		document.querySelector('body').classList.add('noscroll')
		document.querySelector('.header-burgerMenu').classList.add('right')
		
		document
			.querySelectorAll('.moveX')
			.forEach((obj) => obj.classList.add('right'))
	})
})
if (minimizeAuthBtn) {
	minimizeAuthBtn.addEventListener('click', () => {
		document.querySelector('.header-burgerMenu').classList.remove('right')
		document.querySelector('body').classList.remove('noscroll')
		document
			.querySelectorAll('.moveX')
			.forEach((obj) => obj.classList.remove('right'))
	})
}
// functions
const headerBotFixer = () => {
	if (window.innerWidth > 1024) {
		if (window.pageYOffset > window.innerHeight - 123) {
			headerContainer.classList.add('scrolled')
			burgerWindow.classList.add('scrolled')
		} else {
			headerContainer.classList.remove('scrolled')
			burgerWindow.classList.remove('scrolled')
		}
	}
}
if (switchToRegisBtn) {
	switchToRegisBtn.addEventListener('click', () => {
		switchToRegisBtn.closest('form').parentElement.classList.add('register')
	})
}

const checkPage = () => {
	if (document.querySelector('.contact-main')) {
		return 'contact'
	} else if (document.querySelector('.real-aboutus')) {
		return 'aboutus'
	} else if (document.querySelector('.home-header')) {
		return 'home'
	} else {
		return 0
	}
}

window.addEventListener('DOMContentLoaded', () => {
	let pageName = checkPage()
	const navUl = document.querySelectorAll('.nav-ul')

	switch (pageName) {
		case 'contact':
			navUl.forEach(each => {
				each.querySelector('li:nth-child(4)').classList.add('active')
			})
			break
		case 'home':
			navUl.forEach(each => {
				each.querySelector('li:nth-child(1)').classList.add('active')
			})
			break
		case 'aboutus':
			navUl.forEach(each => {
				each.querySelector('li:nth-child(2)').classList.add('active')
			})
			break
		case 0:
			console.log('something-went-wrong')
			break
		default:
			console.log('something-went-wrong')
			break
	}
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
})

respoMenuToggler.addEventListener('click', () => {
	respoMenuToggler.classList.toggle('active')
})