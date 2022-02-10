document.querySelector("ul.order_actions.submitbox").onmouseover = function () {
	if (document.querySelector("select#_payment_method").selectedIndex === 0) {
		document.querySelector(
			"ul.order_actions.submitbox button"
		).disabled = true;
		alert("Método de pagamento não informado. Revise as informações!");
	} else if (
		document.querySelector("select#_payment_method").selectedIndex > 0
	) {
		document.querySelector(
			"ul.order_actions.submitbox button"
		).disabled = false;
	}
};
