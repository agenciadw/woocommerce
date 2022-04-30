// For Woocommerce version 3 and above only
add_filter( 'woocommerce_loop_add_to_cart_link', 'filter_loop_add_to_cart_link', 20, 3 );
function filter_loop_add_to_cart_link( $button, $product, $args = array() ) {
    if( $product->is_in_stock() ) return $button;

    // HERE set your button text (when product is not on stock)
    $button_text = __('Sem Estoque', 'woocommerce');

    // HERE set your button STYLING (when product is not on stock)
    $color = "#fff !important";      // Button text color
    $background = "#a03500 !important"; // Button background color


    // Changing and disbling the button when products are not in stock
    $style = 'color:'.$color.';background-color:'.$background.';cursor:not-allowed;';
    return sprintf( '<a class="button disabled" style="%s">%s</a>', $style, $button_text );
}