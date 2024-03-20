import { router } from "expo-router";

function useNavigation() {
  const go_back = () => router.back();
  const go_to_welcome_screen = () => router.push("/");
  const go_to_sign_in = () => router.push("/sign-in");
  const go_to_sign_up = () => router.push("/sign-up");
  const go_to_home = () => router.push("/home");
  const go_to_menu = () => router.push("/menu");
  const go_to_product_detail = () => router.push("/product-detail");
  const go_to_search_page = () => router.push("/search");
  const go_to_search_result_page = (search) => router.push(`/search/result?q=${search}`);
  const go_to_wishlist = () => router.push("/wishlist");

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
    go_to_search_result_page
  };
}

export default useNavigation;
