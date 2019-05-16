//Ajuste de itens top bar
add_action( 'admin_bar_menu', 'remove_wp_logo', 999 );
function remove_wp_logo( $wp_admin_bar ) {
    $wp_admin_bar->remove_node( 'wp-logo' );
}

function my_admin_bar_render() {
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('comments');
}
add_action( 'wp_before_admin_bar_render', 'my_admin_bar_render' );

add_action( 'admin_bar_menu', 'remove_wp_nodes', 999 );

function remove_wp_nodes() 
{
    global $wp_admin_bar;   
    $wp_admin_bar->remove_node( 'new-link' );
    $wp_admin_bar->remove_node( 'new-media' );
	$wp_admin_bar->remove_node( 'new-page' );
	$wp_admin_bar->remove_node( 'new-blocks' );
	$wp_admin_bar->remove_node( 'new-yith-wccos-ostatus' );
	$wp_admin_bar->remove_node( 'new-featured_item' );
}