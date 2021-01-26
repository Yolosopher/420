let productinAddProdFormBtn = document.querySelectorAll(
	'li .top-produts-li-addbtn'
)
let quantity = document.getElementById('quantity')

const addToCart = (elem) => {
	let qty = quantity ? quantity.value : 1
	qty = +qty
	let id = parseFloat($(elem).data('id'))
	$.ajax({
		url: 'https://420.loremipsum.ge/add_to_cart',
		method: 'get',
		data: { id: id, qty: qty },
		success: function (data) {
			if (data.status) {
				let cartItemsCount = data.cart_items_count
				document.querySelector(
					'.inbag-number'
				).innerText = cartItemsCount

				elem.classList.toggle('added')
				elem.classList.toggle('active-animation')

				setTimeout(function () {
					$(elem).removeClass('active-animation')
				}, 500)
			}
		},
		error: function () {
			// elem.classList.toggle('added')
			// elem.classList.toggle('active-animation')

			// setTimeout(function () {
			// 	$(elem).removeClass('active-animation')
			// }, 1000)
		},
	}).then()
	// return false
}

productinAddProdFormBtn.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		e.preventDefault()
		addToCart(productinAddProdFormBtn)
	})
})
