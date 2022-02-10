/**
 * WordPress Plugin: Masks Form Fields v1.2 - https://wordpress.org/plugins/masks-form-fields/
 * PHP - Custom script to add mask in input phone the WooCommerce. /wp-content/themes/YOUR-THEME/functions.php
*/
add_action('wp_footer', function () {echo "<script type=\"text/javascript\">jQuery(document).ready(function($){ $(\"input[name='billing_phone']\").mask('(000) 000-0000'); });</script>";}, 111);

/**
 * WordPress Plugin: Masks Form Fields v1.2 - https://wordpress.org/plugins/masks-form-fields/
 * JavaScript - Custom script to add mask in input phone the WooCommerce.
*/
jQuery(document).ready(function($){
 $("input[name='billing_phone']").mask("(000) 000-0000");
});