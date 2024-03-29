// remove OOS products from related products in WooCommerce, because they are OOS! by Robin Scott of silicondales.com - see more at https://silicondales.com/tutorials/woocommerce/remove-out-of-stock-products-from-woocommerce-related-products/
add_filter( 'woocommerce_related_products', 'exclude_oos_related_products', 10, 3 );

function exclude_oos_related_products( $related_posts, $product_id, $args ){
    $out_of_stock_product_ids = (array) wc_get_products( array(
          'status'       => 'publish',
          'limit'        => -1,
          'stock_status' => 'outofstock',
          'return'       => 'ids',
      ) );

    $exclude_ids = $out_of_stock_product_ids;

    return array_diff( $related_posts, $exclude_ids );
}