add_action('woocommerce_after_shop_loop_item_title', 'ehi_woocommerce_template_single_excerpt', 5);
function ehi_woocommerce_template_single_excerpt() {
    echo '</a>';

    global $product;
    $rating = $product->get_average_rating();
    if ( $rating > 0 ) {
        $title = sprintf(__( '', 'woocommerce' ), $rating);
    } else {
        $title = '';
        $rating = 0;
    }
    $rating_html  = '</a><a href="' . get_the_permalink() . '#respond"><div class="star-rating"><span style="width:' . (( $rating / 5 ) * 100) . '%"></span></div><span style="font-size: 0.857em;"><em><strong>' . $title . '</strong></em></span></a>';
    echo $rating_html;
}