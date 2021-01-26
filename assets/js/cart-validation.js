// address input
const addressInput = document.getElementById('exact-address');
if (addressInput) {
	addressInput.addEventListener('change', () => {
		checkAddressPut(addressInput);
	})
}



// validation functions

const checkRegSelect = (selecttt) => {
	let value = selecttt.value;
	let parent = input.parentElement;

	let ifSelect = /^\d+$/.test(value);

	if (value === "") {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
		return false;
	} else if (!ifSelect) {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
		return false;
	} else {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
		return true;
	}
}


const checkAddressPut = (input) => {
	let value = input.value;
	let parent = input.parentElement;
	if (value === "") {
		parent.classList.add("invalid");
		parent.classList.remove("invalid-shown");
	} else if (value.length > 6) {
		parent.classList.remove("invalid");
		parent.classList.remove("invalid-shown");
	} else {
		parent.classList.add("invalid");
		parent.classList.add("invalid-shown");
	}
};