import { get_wishlist_api, get_update_wishlist_api } from "../api/wishlistApi";
import {  useDeleteAuth, useFetchWithAuth, usePost } from "./api-hooks";

function useWishlist(id) {
    const { data, isLoading } = useFetchWithAuth(get_wishlist_api());
    const { mutate: addToWishlistMutate } = usePost(get_update_wishlist_api(id), undefined, () => { }, () => { }, get_wishlist_api())
    const { mutate: removeFromWishlistMutate } = useDeleteAuth(get_update_wishlist_api(id), undefined, () => { }, () => { }, get_wishlist_api())

    const addToWishlist = () => {
        addToWishlistMutate();
    }

    const removeFromWishlist = () => {
        removeFromWishlistMutate();
    }

    const isInWishlist = (id) => {
        return data.some(item => item._id === id);
    }

    return { isInWishlist, isLoading, addToWishlist, removeFromWishlist };
}

export default useWishlist;