import useAuth from "../../hooks/useAuth";

function useSupportItemCard() {
  const {handleLogout} = useAuth();
  const bank = {
    function: () => {
      
    },
  };
  const wish_list = {
    function: () => {
      
    },
  };
  const saved_post = {
    function: () => {
      
    },
  };
  const order = {
    function: () => {
      
    },
  };
  const cart = {
    function: () => {
      
    },
  };
  const setting = {
    function: () => {
      
    },
  };
  const assistance = {
    function: () => {
      
    },
  };
  const following = {
    function: () => {
      
    },
  };
  const log_out = {
    function: () => {
      handleLogout()
    },
  };
  const edit_profile = {
    function: () => {
     
    },
  };

  return { log_out, wish_list, assistance, setting, saved_post, following, order, cart, bank, edit_profile };
}

export default useSupportItemCard;
