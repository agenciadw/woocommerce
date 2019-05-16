/**
 * Remove Notas e permite login com CPF e CNPJ
 *
 * @return 	bool 	false
 */
function remove_wc_order_notes() {
	return false;
}
add_filter( 'woocommerce_enable_order_notes_field', 'remove_wc_order_notes' );

add_filter('authenticate', 'login_cpf_cnpj', 10, 3);
function login_cpf_cnpj($user, $username, $password){
   if ($username == '' || $password == '') return;

   global $wpdb;
   if ($user) {
    return $user;
   }
   $user_row = $wpdb->get_results(
   $wpdb->prepare( "SELECT user_id FROM {$wpdb->prefix}usermeta 
                 WHERE ( meta_key = 'billing_cpf' AND meta_value = '%s') 
                 OR ( meta_key = 'billing_cnpj' AND meta_value = '%s' )",
    $username, $username ) );

   if (!empty($user_row)) {
      $user = get_user_by('ID', $user_row[0]->user_id);
      if ($user && wp_check_password($password, $user->user_pass, $user_row[0]->user_id)) {
          return $user;
      } else { ?>
         <script>
            alert('Wrong Password!');
            window.location = "<?php get_permalink(); ?>";
        </script>
     <?php
     }
   }
   return $user;
}
