import { get_add_to_wishlist_api, get_all_wishlist_api, get_remove_from_wishlist_api } from "../api/wishlistUrl";
import { useFetchWithAuth, usePost } from "./api-hooks";

function useWishlist(id) {
    const { data, isLoading } = useFetchWithAuth(get_all_wishlist_api());
    const { mutate: addToWishlistMutate } = usePost(get_add_to_wishlist_api(id), undefined, () => { }, () => { }, get_all_wishlist_api())
    const { mutate: removeFromWishlistMutate } = usePost(get_remove_from_wishlist_api(id), undefined, () => { }, () => { }, get_all_wishlist_api())

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