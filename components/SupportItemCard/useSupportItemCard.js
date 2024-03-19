import useAuth from "../../hooks/useAuth";

function useSupportItemCard() {
  const {handleLogout} = useAuth();

  const wish_list = {
    function: () => {
      
    },
  };
  const saved_post = {
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

  return { log_out, wish_list, assistance, setting, saved_post, following };
}

export default useSupportItemCard;
