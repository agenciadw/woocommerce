add_action( 'woocommerce_order_status_completed_to_processing', 'wc_prevent_completed_to_processing' );
function wc_prevent_completed_to_processing( $order_id, $order ) {
  $order->update_status( 'completed', 'Status atualizado para Concluído novamente.' );
}
