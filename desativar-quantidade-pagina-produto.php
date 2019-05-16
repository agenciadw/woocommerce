function quantity_wp_head() {
   
if ( is_product() ) {
    ?>
<style type="text/css">.quantity, .buttons_added { width:0; height:0; display: none; visibility: hidden; }</style>
<?php
    }
}
    add_action( 'wp_head', 'quantity_wp_head' );