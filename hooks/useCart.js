
import {
    get_add_to_cart_api,
    get_cart_api,
    get_decrease_by_one_api,
    get_increase_by_one_api,
    get_remove_from_cart_api,
    get_update_quantity_api,
} from "../api/cartUrl";
import {
    useDelete,
    useFetchWithAuth,
    usePost,
    useUpdate,
} from "./api-hooks";

function useCart() {
    const { data, isLoading } = useFetchWithAuth(get_cart_api());
    const { mutate: addToCartMutation } = usePost(
        get_add_to_cart_api(),
        undefined,
        () => {
        },
        (error) => {
        },
        get_cart_api()
    );
    const { mutate: increaseQuantityMutation } = useUpdate(
        get_increase_by_one_api(),
        undefined,
        () => { },
        () => { },
        get_cart_api()
    );
    const { mutate: decreaseQuantityMutation } = useUpdate(
        get_decrease_by_one_api(),
        undefined,
        () => { },
        () => { },
        get_cart_api()
    );
    const { mutate: updateQuantityMutation } = useUpdate(
        get_update_quantity_api(),
        undefined,
        () => { },
        () => { },
        get_cart_api()
    );
    const { mutate: removeFromCartMutation } = useDelete(
        get_remove_from_cart_api(),
        undefined,
        () => { },
        () => { },
        get_cart_api()
    );

    const addToCart = (item) => {
        const isInCart = getCart().some((i) => i._id === item._id);

        if (isInCart) return increaseQuantity(item._id);

        addToCartMutation({ _id: item._id, quantity: 1 });
    };

    const removeFromCart = (id) => {
        removeFromCartMutation({ _id: id, quantity: 1 });
    };

    const increaseQuantity = (id) => {
        increaseQuantityMutation({ _id: id, quantity: 1 });
    };

    const decreaseQuantity = (id) => {
        decreaseQuantityMutation({ _id: id, quantity: 1 });
    };

    const updateQuantity = (id, quantity) => {
        updateQuantityMutation({
            product: {
                _id: id,
            },
            newQuantity: quantity,
        });
    };

    const getTotalPrice = () => {
        return getCart().reduce(
            (total, item) => total + item.sale_price * item.quantity_in_cart,
            0
        );
    };

    const getCart = () => [...data.products]

    return {
        isLoading,
        getCart,
        addToCart,
        decreaseQuantity,
        increaseQuantity,
        removeFromCart,
        getTotalPrice,
        updateQuantity,
        
    };
}

export default useCart;
