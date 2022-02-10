jQuery(document).ready(function ($) {
	//check if string has only numbers and if is 11 characters
	function checkInputCPF(input) {
		if (input.length != 11) {
			return false;
		}
		if (input.match(/\D/g)) {
			return false;
		}
		return true;
	}

	//function to format CPF
	function formatCPF(cpf) {
		cpf = cpf.replace(/\D/g, "");
		cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
		cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
		cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
		return cpf;
	}

	function runAllValidations() {
		let input = document.querySelector(".col-login input#username").value;
		if (checkInputCPF(input)) {
			document.querySelector(".col-login input#username").value =
				formatCPF(input);
		}
	}

	if (document.querySelector(".col-login .form-row-username label")) {
		document.querySelector(
			".col-login .form-row-username label"
		).innerHTML = 'E-mail ou CPF <span class="required">*</span>';
	}

	document
		.querySelector(".col-login input#password")
		.addEventListener("keyup", function () {
			runAllValidations();
		});

	document
		.querySelector(
			".col-login button.button.woocommerce-button.woocommerce-form-login__submit"
		)
		.addEventListener("mouseover", function () {
			runAllValidations();
		});
});
