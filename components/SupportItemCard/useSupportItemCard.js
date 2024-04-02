import useAuth from "../../hooks/useAuth";
import useNavigation from "../../hooks/useNavigation";
import useAuthStore from "../../stores/useAuthStore";

function useSupportItemCard() {
  const { handleLogout } = useAuth();
  const { accountId } = useAuthStore();
  const { go_to_wishlist, go_to_order, go_to_profile, go_to_bank_account } = useNavigation();
  const bank = {
    function: () => {
      go_to_bank_account();
    },
  };
  const wish_list = {
    function: () => {
      go_to_wishlist();
    },
  };
  const saved_post = {
    function: () => {

    },
  };
  const order = {
    function: () => {
      go_to_order()
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
      go_to_profile(accountId)
    },
  };

  return { log_out, wish_list, assistance, setting, saved_post, following, order, cart, bank, edit_profile };
}

export default useSupportItemCard;
