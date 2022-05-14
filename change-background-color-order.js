function change_order_processing_row_color(){?>

      <style type="text/css">
      .status-wc-processing {
             background: #c5e9c5 !important;
             color: white !important;
            }
          </style>
     
        <?php }
     
        add_action('admin_head','change_order_processing_row_color');
     
     
     function change_order_pending_row_color(){?>
     
      <style type="text/css">
      .status-wc-pending {
             background: #ffc470 !important;
             color: white !important;
            }
          </style>
     
        <?php }
     
        add_action('admin_head','change_order_pending_row_color');
     