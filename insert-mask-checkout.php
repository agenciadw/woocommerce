add_action('wp_footer', function () {echo "<script type=\"text/javascript\">jQuery(document).ready(function($){ $(\"input[name='billing_ie']\").mask('00000000000'); });</script>";}, 111);
