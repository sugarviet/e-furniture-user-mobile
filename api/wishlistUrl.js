const WISHLIST_URL = '/wishlist'

export const get_all_wishlist_api = () => WISHLIST_URL;
export const get_add_to_wishlist_api = (id) => WISHLIST_URL + '/' + id;
export const get_remove_from_wishlist_api = (id) => WISHLIST_URL + '/' + id;