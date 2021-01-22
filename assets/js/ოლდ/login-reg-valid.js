// reg-log email
document.querySelectorAll('.input-div').forEach(div => {
	div.classList.add('invalid')
})
const emailInput = document.getElementById('login-email')
const emailInputReg = document.getElementById('register-email')

emailInput.addEventListener('change', () => {
	checkEmailPut(emailInput)
})
emailInputReg.addEventListener('change', () => {
	checkEmailPut(emailInputReg)
})

// reg-log password
const passInput = document.getElementById('login-password')
const passInputReg = document.getElementById('register-password')
const passInputRegRepeated = document.getElementById('register-repeated-password')


passInput.addEventListener('change', () => {
	checkPassPut(passInput)
})
passInputReg.addEventListener('change', () => {
	checkPassPut(passInputReg)
})
passInputRegRepeated.addEventListener('change', () => {
	checkPassPut(passInputRegRepeated)
})

// reg-log text
const textInput = document.getElementById('register-fullname')

textInput.addEventListener('change', () => {
	checkTextPut(textInput)
})

// reg-log tel
const telInput = document.getElementById('register-phone')

telInput.addEventListener('change', () => {
	checkTelPut(telInput)
})

// validation functions
const checkTelPut = (telPut) => {
	let value = telPut.value
	let parent = telPut.parentElement
	let ifTel = /^(5)\d{8}$/.test(value)

	if (value === '') {
		parent.classList.add('invalid')
		parent.classList.remove('invalid-shown')
	} else if (ifTel && value.length === 9) {
		parent.classList.remove('invalid')
		parent.classList.remove('invalid-shown')
	} else {
		parent.classList.add('invalid')
		parent.classList.add('invalid-shown')
	}
}
const checkEmailPut = (emailPut) => {
	let value = emailPut.value
	let parent = emailPut.parentElement
	let ifEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)

	if (value === '') {
		parent.classList.add('invalid')
		parent.classList.remove('invalid-shown')
	} else if (!ifEmail) {
		parent.classList.add('invalid')
		parent.classList.add('invalid-shown')
	} else {
		parent.classList.remove('invalid')
		parent.classList.remove('invalid-shown')
	}
}
const checkPassPut = (passPut) => {
	let id = passPut.id
	let isRepeated = id === 'register-repeated-password'
	let isLoginPass = Boolean(passPut.closest('.home-header-login'))
	console.log(isLoginPass);
	passPut.value = String(passPut.value)
	let value = passPut.value
	let parent = passPut.parentElement

	if (isLoginPass) {
		parent.classList.remove('invalid')
		parent.classList.remove('invalid-shown')
		return
	}

	if (value === '') {
		parent.classList.add('invalid')
		parent.classList.remove('invalid-shown')
	} else if (isRepeated) {
		let notRepeated = document.getElementById('register-password')
		if (notRepeated.value !== passPut.value) {
			parent.classList.add('invalid')
			parent.classList.add('invalid-shown')
		} else {
			parent.classList.remove('invalid')
			parent.classList.remove('invalid-shown')
		}
	} else if (value.length > 5 && value.length < 51) {
		parent.classList.remove('invalid')
		parent.classList.remove('invalid-shown')
	} else {
		parent.classList.add('invalid')
		parent.classList.add('invalid-shown')
	}
}
const checkTextPut = (textPut) => {
	let value = textPut.value
	let parent = textPut.parentElement
	if (value === '') {
		parent.classList.add('invalid')
		parent.classList.remove('invalid-shown')
	} else if (value.length > 4) {
		parent.classList.remove('invalid')
		parent.classList.remove('invalid-shown')
	} else {
		parent.classList.add('invalid')
		parent.classList.add('invalid-shown')
	}
}

// submit validation
const forms = document.querySelectorAll('.hard-form')


forms.forEach((form) => {
	form.addEventListener('submit', (e) => {
		let inputDivs = form.querySelectorAll('.input-div.invalid')
		if (inputDivs[0]) {
			inputDivs.forEach((each) => {
				each.classList.add('invalid-shown')
			})
			e.preventDefault()
			return false
		}
	})
})
