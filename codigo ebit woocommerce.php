<?php

add_action( 'woocommerce_thankyou', 'ebit_banner' );

function ebit_banner( $order_id ) {

  $store_id = ''; // o ID da sua loja
  $buscape_id = ''; // o ID único do Buscapé
  
  $order = wc_get_order( $order_id );
  $order_items = $order->get_items();

  foreach ( $order_items as $item ) {
    $product = wc_get_product( $item['product_id'] );
    $product_name[] = $product->get_title();
    $sku[] = $product->get_sku();
    $qty[] = $item['qty'];
    $total[] = $item['line_total'];
  }

  $email = $order->billing_email;
  $totalSpent = $order->get_total();
  $deliveryTax = $order->get_shipping_tax();
  $value = implode( '|', $total );
  $quantity = implode( '|', $qty );
  $productName = implode( '|', $product_name );
  $sku = implode("|", $sku);

  echo '<param id="ebitParam" value="email='. $email .
  '&deliveryTax='. $deliveryTax .
  '&totalSpent='. $totalSpent .
  '&value='. $value .
  '&quantity='. $quantity .
  '&productName='. $productName .
  '&transactionId='. $order_id .
  '&sku='. $sku .
  '&buscapeId=' . $buscape_id . '&storeId=' . $store_id . '&plataform=0"/>';

  echo '<a id="bannerEbit"></a>';
  echo '<script type="text/javascript" id="getSelo" src="https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?' . $store_id . '&lightbox=true"></script>';

}