add_filter('woocommerce_admin_shipping_fields', 'woocommerce_require_admin_shipping_fields');
function woocommerce_require_admin_shipping_fields( $fields ){
	$fields['city']['custom_attributes'] = array( 'required' => 'required' );
    // $fields['last_name']['custom_attributes'] = array( 'required' => 'required' ); // for last_name
    return $fields;
}