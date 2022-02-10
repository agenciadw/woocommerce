/* Developed by: barrosofilho.ti@gmail.com */

function abreviarEstado(estado) {
	let estados = {
		Acre: "AC",
		Alagoas: "AL",
		Amapá: "AP",
		Amazonas: "AM",
		Bahia: "BA",
		Ceará: "CE",
		"Distrito Federal": "DF",
		"Espírito Santo": "ES",
		Goiás: "GO",
		Maranhão: "MA",
		"Mato Grosso": "MT",
		"Mato Grosso do Sul": "MS",
		"Minas Gerais": "MG",
		Pará: "PA",
		Paraíba: "PB",
		Paraná: "PR",
		Pernambuco: "PE",
		Piauí: "PI",
		"Rio de Janeiro": "RJ",
		"Rio Grande do Norte": "RN",
		"Rio Grande do Sul": "RS",
		Rondônia: "RO",
		Roraima: "RR",
		"Santa Catarina": "SC",
		"São Paulo": "SP",
		Sergipe: "SE",
		Tocantins: "TO",
	};
	return estados[estado];
}

function checkIfAddressNotEmpty(input) {
	if (input.value.length > 0) {
		return ", " + input.value;
	} else {
		return "";
	}
}

function syncAddress() {
	if (document.querySelectorAll(".single_preview_contents.address div")) {
		let firstNameOutputBilling = document.querySelector(
			"input#billing_first_name"
		).value;
		let lastNameOutputBilling = document.querySelector(
			"input#billing_last_name"
		).value;
		let addressOutputBilling = document.querySelector(
			"input#billing_address_1"
		).value;
		let numberOutputBilling =
			"nº " + document.querySelector("input#billing_number").value;
		let addressOutputBilling2 = checkIfAddressNotEmpty(
			document.querySelector("input#billing_address_2")
		);
		let neighborhoodOutputBilling = document.querySelector(
			"input#billing_neighborhood"
		).value;
		let cityOutputBilling =
			document.querySelector("input#billing_city").value;
		let stateOutputBilling = abreviarEstado(
			document.querySelector("span#select2-billing_state-container")
				.innerText
		);

		let firstNameOutputShipping = document.querySelector(
			"input#shipping_first_name"
		).value;
		let lastNameOutputShipping = document.querySelector(
			"input#shipping_last_name"
		).value;
		let addressOutputShipping = document.querySelector(
			"input#shipping_address_1"
		).value;
		let numberOutputShipping =
			"nº " + document.querySelector("input#shipping_number").value;
		let addressOutputShipping2 = checkIfAddressNotEmpty(
			document.querySelector("input#shipping_address_2")
		);
		let neighborhoodOutputShipping = document.querySelector(
			"input#shipping_neighborhood"
		).value;
		let cityOutputShipping = document.querySelector(
			"input#shipping_city"
		).value;
		let stateOutputShipping = abreviarEstado(
			document.querySelector("span#select2-shipping_state-container")
				.innerText
		);

		let fullBillingAddress =
			firstNameOutputBilling +
			" " +
			lastNameOutputBilling +
			", " +
			addressOutputBilling +
			", " +
			numberOutputBilling +
			" " +
			addressOutputBilling2 +
			", " +
			neighborhoodOutputBilling +
			", " +
			cityOutputBilling +
			", " +
			stateOutputBilling;

		let fullShippingAddress =
			firstNameOutputShipping +
			" " +
			lastNameOutputShipping +
			", " +
			addressOutputShipping +
			", " +
			numberOutputShipping +
			" " +
			addressOutputShipping2 +
			", " +
			neighborhoodOutputShipping +
			", " +
			cityOutputShipping +
			", " +
			stateOutputShipping;

		document.querySelectorAll(
			".single_preview_contents.address div"
		)[1].innerText = fullBillingAddress;
		document.querySelectorAll(
			".single_preview_contents.address div"
		)[3].innerText = fullBillingAddress;

		document.querySelectorAll(
			".single_preview_contents.shipping-address div"
		)[1].innerText = fullShippingAddress;
		document.querySelectorAll(
			".single_preview_contents.shipping-address div"
		)[3].innerText = fullShippingAddress;
	}
}

if (document.querySelector(".wrapper.wfacp-main-container")) {
	setInterval(syncAddress, 2000);
}

/* Developed by: barrosofilho.ti@gmail.com */