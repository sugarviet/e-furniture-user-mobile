import { router } from "expo-router";

function useNavigation() {
  const go_back = () => router.back();
  const go_to_welcome_screen = () => router.push("/");
  const go_to_order = () => router.push("/order");
  const go_to_sign_in = () => router.push("/sign-in");
  const go_to_sign_up = () => router.push("/sign-up");
  const go_to_home = () => router.push("/home");
  const go_to_menu = () => router.push("/menu");
  const go_to_product_detail = () => router.push("/product-detail");
  const go_to_search_page = () => router.push("/search");
  const go_to_search_result_page = (search) => router.push(`/search/result?q=${search}`);
  const go_to_wishlist = () => router.push("/wishlist");
  const go_to_checkout = () => router.push("/checkout");
  const go_to_address_book = () => router.push("/address");
  const go_to_add_new_address = () => router.push("/address/add-new-address");
  const go_to_voucher_list = () => router.push("/checkout/voucher");
  const go_to_profile = (userId) => router.push(`/edit-profile/${userId}`);


  return {
    go_to_sign_in,
    go_to_sign_up,
    go_to_home,
    go_to_welcome_screen,
    go_back,
    go_to_menu,
    go_to_product_detail,
    go_to_search_page,
    go_to_wishlist,
    go_to_search_result_page,
    go_to_checkout,
    go_to_address_book,
    go_to_add_new_address,
    go_to_voucher_list,
    go_to_order,
    go_to_profile
  };
}

export default useNavigation;
