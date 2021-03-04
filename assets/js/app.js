// variables
const homeHeader = document.querySelector('.home-header')
const headerContainer = document.querySelector('.header-container.scrolled-one')
const headerLoginBtnFirst = document.querySelector('.header-right-login')
const headerLoginBtns = document.querySelectorAll('.header-right-login')
const switchToRegisBtn = document.querySelector('.switch-to-register')
const switchToResetBtn = document.querySelector('.input-error-qstmark-real')
const minimizeAuthBtn = document.querySelector('.minimize-svg')
const respoMenuToggler = document.querySelector('.respo-menu-toggler')

const searchInputs = document.querySelectorAll('input[name=search]')
const searchInputRespo = document.getElementById('respo-search')

const burgerBtns = document.querySelectorAll('.burger-icon')
const burgerWindow = document.querySelector('.header-burgerMenu')

// Setup isScrolling variable

let workWith = document.querySelector('.home-header.work-with')

let isPassResetSent

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
burgerBtns.forEach((burgerBtn) => {
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

minimizeAuthBtn.addEventListener('click', () => {
	if (
		document
			.querySelector('.home-header-forms-combiner')
			.classList.contains('register') || document
			.querySelector('.home-header-forms-combiner')
			.classList.contains('reset')
	) {
		document
			.querySelector('.home-header-forms-combiner')
			.classList.remove('register')
		document
			.querySelector('.home-header-forms-combiner')
			.classList.remove('reset')
		document
			.querySelector('.home-header-forms-combiner')
			.classList.remove('reseted')
	} else {
		document.querySelector('.header-burgerMenu').classList.remove('right')
		document.querySelector('body').classList.remove('noscroll')
		document
			.querySelectorAll('.moveX')
			.forEach((obj) => obj.classList.remove('right'))
	}
})

let middd = document.querySelector('.home-header-realContent')
let homeHeaderBurg = document.querySelector('.header-burgerMenu')
let homeMain = document.querySelector('.home-main')

// functions
const headerBotFixer = () => {
	if (window.innerWidth > 1024) {
		let vhMinusHeader = window.innerHeight - 123

		let height = window.pageYOffset >= vhMinusHeader ? 123 : window.innerHeight - window.pageYOffset

		let transformTop = window.innerHeight - height

		let max = window.pageYOffset >= vhMinusHeader ? 0 : (window.pageYOffset / (window.innerHeight - 246) * 100)
		
		let offsett = window.pageYOffset >= window.pageYOffset ? window.innerHeight : window.pageYOffset 


		max = max.toFixed(1)
		max = 100 - max
		middd.style.opacity = `${max}%`
		scrollDownYeah.style.opacity = `${max}%`
		middd.style.transform = `translateY(-${transformTop}px)`
		scrollDownYeah.style.transform = `translateY(-${transformTop}px)`
		workWith.style.height = `${height}px`
		burgerWindow.style.height = `${height}px`
		homeMain.style.marginTop = `${offsett + 110}px`

		if (window.pageYOffset > vhMinusHeader) {
			workWith.classList.add('scrolled')
		} else {
			workWith.classList.remove('scrolled')
		}
	}
}
if (switchToRegisBtn) {
	switchToRegisBtn.addEventListener('click', () => {
		switchToRegisBtn.closest('form').parentElement.classList.add('register')
	})
}
if (switchToResetBtn) {
	switchToResetBtn.addEventListener('click', () => {
		switchToResetBtn.closest('form').parentElement.classList.add('reset')
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
	document.querySelector('body').classList.add(`${pageName}-page`)
	const navUl = document.querySelectorAll('.nav-ul')

	// switch (pageName) {
	// 	case 'contact':
	// 		navUl.forEach((each) => {
	// 			each.querySelector('li:nth-child(4)').classList.add('active')
	// 		})
	// 		break
	// 	case 'home':
	// 		navUl.forEach((each) => {
	// 			each.querySelector('li:nth-child(1)').classList.add('active')
	// 		})
	// 		break
	// 	case 'aboutus':
	// 		navUl.forEach((each) => {
	// 			each.querySelector('li:nth-child(2)').classList.add('active')
	// 		})
	// 		break
	// 	case 0:
	// 		console.log('something-went-wrong')
	// 		break
	// 	default:
	// 		console.log('something-went-wrong')
	// 		break
	// }
	if (!homeHeader) {
		document.querySelector('body').style.marginTop = '103px'
	} else {
		scrollStop(() => {
			if (window.innerWidth < 1025) {
				let innHeight = window.innerHeight - 244
				if (window.pageYOffset === 0) {
					// console.log("it's zero")
				} else if (window.pageYOffset > innHeight) {
					// console.log(`scrolled down too far`)
				} else if (window.pageYOffset > innHeight / 4) {
					// console.log(`scrolled down`)
					window.scroll({
						top: innHeight, // could be negative value
						left: 0,
						behavior: 'smooth',
					})
				} else if (window.pageYOffset < innHeight / 4) {
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
	document.querySelector('body').classList.toggle('noscroll')
	respoMenuToggler.classList.toggle('active')
})

const RespLoginCaller = () => {
	headerLoginBtnFirst.click()
}

// srchbar dekstop

$('.searchbar-container').each(function () {
	$(this).on('click', () => {
		$('.header-left').addClass('srch-on')
		$('.header-right').addClass('srch-on')
		$('.searchbar-shown').addClass('srch-on')
		$(this)
			.closest('header')
			.find('.searchbar-input-container input')
			.focus()
	})
})
$('.searchbar-svg__X').on('click', () => {
	$('.header-left').removeClass('srch-on')
	$('.header-right').removeClass('srch-on')
	$('.searchbar-shown').removeClass('srch-on')
})

// srchbar mobile
$('.respo-search-li a').on('click', () => {
	$('.respo-menu-ul li:not(.respo-search-li)').addClass('vanished')
	$('.respo-search-li').addClass('respo-srch-on')
})
$('.respo-search-li__searchform__X').on('click', () => {
	$('.respo-menu-ul li:not(.respo-search-li)').removeClass('vanished')
	$('.respo-search-li').removeClass('respo-srch-on')
})
$('.realContent-see-more, .home-header-forms-combiner button, .home-see-all-btn:not(.personal-info form .home-see-all-btn)').addClass('cannabis-btn-rotate');

[...searchInputs, searchInputRespo].forEach(each => {
    const parentForm = each.closest('form')
    parentForm.addEventListener('submit', e => {
        if (each.value.length < 3) {
            e.preventDefault()
        }
    })
})