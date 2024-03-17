import useAuth from "../../../hooks/useAuth";

function useSupportItemCard() {
  const { sign_out } = useAuth();

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
      sign_out();
    },
  };

  return { log_out, wish_list, assistance, setting, saved_post, following };
}

export default useSupportItemCard;
