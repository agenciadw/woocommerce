//This is the code we used to tidy up our images showing all different sizes.
//Change your catalog images with a specific size:

// Catalog images: specific size
add_filter( 'woocommerce_get_image_size_thumbnail', 'ci_theme_override_woocommerce_image_size_thumbnail' );
function ci_theme_override_woocommerce_image_size_thumbnail( $size ) {
    return array(
        'width'  => 750,
        'height' => 430,
        'crop'   => 1,
    );
}  

//This is the code we used to bring the single product images under control.
//Change the Single Product image:

// Single product image: square
add_filter( 'woocommerce_get_image_size_single', 'ci_theme_override_woocommerce_image_size_single' );
function ci_theme_override_woocommerce_image_size_single( $size ) {
    return array(
        'width'  => 750,
        'height' => 750,
        'crop'   => 1,
    );
}

//We had no need for this code but someone may find it handy.
//Change gallery thumbnails:

// Gallery thumbnails: proportional, max width 200px
add_filter( 'woocommerce_get_image_size_gallery_thumbnail', 'ci_theme_override_woocommerce_image_size_gallery_thumbnail' );
function ci_theme_override_woocommerce_image_size_gallery_thumbnail( $size ) {
    return array(
        'width'  => 200,
        'height' => '',
        'crop'   => 0,
    );
}