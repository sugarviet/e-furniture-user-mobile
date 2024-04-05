const CART_URL = '/cart'

export const get_cart_api = () => CART_URL;

export const get_add_to_cart_api = () => CART_URL + '/add-to-cart'
export const get_increase_by_one_api = () => CART_URL + '/increase'
export const get_decrease_by_one_api = () => CART_URL + '/decrease'
export const get_update_quantity_api = () => CART_URL + '/update-quantity'
export const get_remove_from_cart_api = () => CART_URL + '/remove-item'
export const get_update_variation_api = () => CART_URL + '/item'