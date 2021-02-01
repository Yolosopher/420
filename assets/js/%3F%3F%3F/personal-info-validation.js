// reg-log email
const persInfoemailInput = document.getElementById('personal-info-email')

persInfoemailInput.addEventListener('change', () => {
	checkEmailPut(persInfoemailInput)
})

// reg-log password
const persPassInputOld = document.getElementById('personal-info-currentpass')
const persPassInputNew = document.getElementById('personal-info-newpass')
const persPassInputNewRepeated = document.getElementById('personal-info-newpass-repeated')


persPassInputOld.addEventListener('change', () => {
	checkPassPut(persPassInputOld)
})
persPassInputNew.addEventListener('change', () => {
	checkPassPut(persPassInputNew)
})
persPassInputNewRepeated.addEventListener('change', () => {
	checkPassPut(persPassInputNewRepeated)
})

// reg-log text
const textInput = document.getElementById('personal-info-name')

textInput.addEventListener('change', () => {
	checkTextPut(textInput)
})

// reg-log tel
const telInput = document.getElementById('personal-info-tel')

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
	let isRepeated = id === 'personal-info-newpass-repeated'
	passPut.value = String(passPut.value)
	let value = passPut.value
	let parent = passPut.parentElement


	if (value === '') {
		parent.classList.add('invalid')
		parent.classList.remove('invalid-shown')
	} else if (isRepeated) {
		let notRepeated = document.getElementById('personal-info-newpass')
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
const forms = document.querySelectorAll('.personal-info form')


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
