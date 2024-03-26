const WISHLIST_URL = '/wishlist'

export const get_wishlist_api = () => WISHLIST_URL;

export const get_update_wishlist_api = (id) => WISHLIST_URL + '/' + id;

export const get_add_all_wishlist_api = () => WISHLIST_URL + '/' + 'items' + '/' + 'add-all';