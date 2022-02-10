//Funciona com o format-on-login-cpf-cnpj

function validaCpf(cpf) {
	var numeros, digitos, soma, i, resultado, digitos_iguais;
	digitos_iguais = 1;
	if (cpf.length < 11) return false;
	for (i = 0; i < cpf.length - 1; i++)
		if (cpf.charAt(i) != cpf.charAt(i + 1)) {
			digitos_iguais = 0;
			break;
		}
	if (!digitos_iguais) {
		numeros = cpf.substring(0, 9);
		digitos = cpf.substring(9);
		soma = 0;
		for (i = 10; i > 1; i--) soma += numeros.charAt(10 - i) * i;
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado != digitos.charAt(0)) return false;
		numeros = cpf.substring(0, 10);
		soma = 0;
		for (i = 11; i > 1; i--) soma += numeros.charAt(11 - i) * i;
		resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
		if (resultado != digitos.charAt(1)) return false;
		return true;
	} else return false;
}

function analiseCpf() {
	function getCurrentCpfInputValue() {
		return document
			.querySelector("input#billing_cpf")
			.value.replace(".", "")
			.replace(".", "")
			.replace("-", "");
	}
	if (
		validaCpf(getCurrentCpfInputValue()) == false &&
		document.querySelector("select#billing_persontype").value == "1"
	) {
		alert(
			"CPF inválido ou digitado de forma incorreta. Revise e tente novamente!"
		);
		location.href = location.pathname + "#billing_cpf";
		document.querySelector("input#billing_cpf").style.border =
			"2px solid red";
		setTimeout(function () {
			document.querySelector("input#billing_cpf").style.border = "";
		}, 3000);
	}
}

if (document.querySelector(".wfacp-row")) {
	document.querySelector("input#billing_first_name").onclick = function () {
		analiseCpf(); //first try
	};
	document.querySelector("input#billing_last_name").onclick = function () {
		analiseCpf(); //second try
	};
	document.querySelector("input#shipping_first_name").onclick = function () {
		analiseCpf(); //third try
	};
	document.querySelector("input#shipping_postcode").onclick = function () {
		analiseCpf(); //fourth try
	};
	document.querySelector(
		"button.button.button-primary.wfacp_next_page_button"
	).onmouseover = function () {
		analiseCpf(); //last try
	};
}
