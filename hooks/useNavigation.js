import { router } from "expo-router";

function useNavigation() {
  const go_back = () => router.back();
  const go_to_welcome_screen = () => router.push("/");
  const go_to_order = () => router.push("/order");
  const go_to_cart = () => router.push("/cart");
  const go_to_sign_in = () => router.push("/sign-in");
  const go_to_sign_up = () => router.push("/sign-up");
  const go_to_home = () => router.push("/home");
  const go_to_menu = () => router.push("/menu");
  const go_to_product_detail = (slug) => router.push(`/product-detail/${slug}`);
  const go_to_search_page = () => router.push("/search");
  const go_to_search_result_page = (search) => router.push(`/search/result?q=${search}`);
  const go_to_wishlist = () => router.push("/wishlist");
  const go_to_checkout = (purchaseItems) => router.push({ pathname: '/checkout', params: { data: JSON.stringify(purchaseItems) } });
  const go_to_address_book = () => router.push("/address");
  const go_to_add_new_address = () => router.push("/address/add-new-address");
  const go_to_edit_address = (address) => router.push({ pathname: '/address/edit-address', params: address })
  const go_to_voucher_list = (purchaseItems) => router.push({ pathname: '/checkout/voucher', params: { data: JSON.stringify(purchaseItems) } })
  const go_to_payment_list = () => router.push("/checkout/payment");
  const go_to_profile = (id) => router.push(`/edit-profile/${id}`);
  const go_to_catalog = (slug) => router.push(`/product-catalog/${slug}`)
  const go_to_order_detail = (id) => router.push({ pathname: '/order-detail', params: id })
  const go_to_delivery_tracking = (orderTracking) => router.push({ pathname: '/order-detail/delivery-detail', params: orderTracking })
  const go_to_delivery_proof = (orderTracking) => router.push({ pathname: '/order-detail/delivery-proof', params: orderTracking })
  const go_to_refund_proof = (orderTracking) => router.push({ pathname: '/order-detail/refund-proof', params: orderTracking })
  const go_to_region_select = () => router.push('/address/add-new-address/region-select')
  const go_to_review_products = (id) => {
    return router.push(`/product-review/${id}`)
  }
  const go_to_bank_account = () => router.push("/bank");
  const go_to_list_bank_account = () => router.push("/bank/bank-list");
  const go_to_bank_form = (selectedBank) => router.push({ pathname: '/bank/bank-form', params: selectedBank })
  const go_to_flash_sale = () => router.push("/flashsale");
  const go_to_order_confirmation = () => router.push("/order-confirmation");
  const go_to_order_confirmation_cod = (checkoutData) => router.push({ pathname: '/order-confirmation/cod-confirmation', params: { data: JSON.stringify(checkoutData) } });
  const go_to_cancel_order = (cancelData) => router.push({ pathname: '/cancel-order', params: { data: JSON.stringify(cancelData) } });

  return {
    go_to_region_select,
    go_to_catalog,
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
    go_to_edit_address,
    go_to_voucher_list,
    go_to_order,
    go_to_payment_list,
    go_to_profile,
    go_to_order_detail,
    go_to_delivery_tracking,
    go_to_review_products,
    go_to_bank_account,
    go_to_list_bank_account,
    go_to_bank_form,
    go_to_flash_sale,
    go_to_order_confirmation,
    go_to_order_confirmation_cod,
    go_to_cart,
    go_to_delivery_proof,
    go_to_cancel_order,
    go_to_refund_proof
  };
}

export default useNavigation;
