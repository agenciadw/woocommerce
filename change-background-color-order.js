//Pago

function change_order_processing_row_color(){?>

      <style type="text/css">
      .status-wc-processing {
             background: #bbe1a0 !important;
             color: white !important;
            }
          </style>
     
        <?php }
     
        add_action('admin_head','change_order_processing_row_color');
     
//Aguardando

     function change_order_pending_row_color(){?>
     
      <style type="text/css">
      .status-wc-pending {
             background: #ffc4707a !important;
             color: white !important;
            }
          </style>
     
        <?php }
     
        add_action('admin_head','change_order_pending_row_color');
     

//Entregue

function change_order_completed_row_color(){?>
     
      <style type="text/css">
      .status-wc-completed {
             background: #81d742 !important;
             color: white !important;
            }
          </style>
     
        <?php }
     
        add_action('admin_head','change_order_completed_row_color');        


//Cancelado

function change_order_cancelled_row_color(){?>
     
      <style type="text/css">
      .status-wc-cancelled {
             background: #bfbfbf !important;
             color: white !important;
            }
          </style>
     
        <?php }
     
        add_action('admin_head','change_order_cancelled_row_color');              


//Pronto para entrega

function change_order_driver_assigned_row_color(){?>
     
      <style type="text/css">
      .status-wc-driver-assigned {
             background: #7100e2 !important;
             color: white !important;
            }
          </style>
     
        <?php }
     
        add_action('admin_head','change_order_driver_assigned_row_color');              
        

//Novo

function change_order_novo_row_color(){?>
     
      <style type="text/css">
      .status-wc-novo {
             background: #ffc97999 !important;
             color: white !important;
            }
          </style>
     
        <?php }
     
        add_action('admin_head','change_order_novo_row_color');             