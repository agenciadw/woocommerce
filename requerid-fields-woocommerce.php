add_filter( 'woocommerce_billing_fields', function( $fields ) {
    $fields['billing_neighborhood']['required'] = true;
    $fields['billing_cellphone']['required'] = true;
    $fields['billing_cpf']['required'] = true;
	return $fields;
}, 20 );
