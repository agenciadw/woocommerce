add_filter( 'woocommerce_get_catalog_ordering_args', 'mihanwp_sort_by_stock', 9999 );
 
function mihanwp_sort_by_stock( $args ) {
   $args['orderby'] = 'meta_value';
   $args['order'] = 'ASC';
   $args['meta_key'] = '_stock_status';
   return $args;
}
