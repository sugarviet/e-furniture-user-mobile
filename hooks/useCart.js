
import { useEffect } from "react";
import {
    get_add_to_cart_api,
    get_cart_api,
    get_decrease_by_one_api,
    get_increase_by_one_api,
    get_remove_from_cart_api,
    get_update_quantity_api,
    get_update_variation_api,
} from "../api/cartUrl";
import { useCartStore } from "../stores/useCartStore";
import {
    useDelete,
    useDeleteAuth,
    useFetchWithAuth,
    usePost,
    useUpdate,
} from "./api-hooks";

import useNotification from "./useNotification";

function useCart() {
    const { success_message, error_message } = useNotification();

    const { data, isLoading } = useFetchWithAuth(get_cart_api());
    const { purchaseItems, setPurchaseItems } = useCartStore();

    const { mutate: addToCartMutation } = usePost(
        get_add_to_cart_api(),
        undefined,
        (data) => {
            success_message(null, null,"Add to cart successfully");
        },
        (error) => {
            error_message(null, null,"Add to cart failed");

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
    const { mutate: removeFromCartMutation } = useDeleteAuth(
        get_remove_from_cart_api(),
        undefined,
        () => { },
        () => { },
        get_cart_api()
    );

    const { mutate: updateVariationMutation } = useUpdate(
        get_update_variation_api(),
        undefined,
        () => { },
        (error) => { },
        get_cart_api()
    );

    const addToCart = (item) => {
        const { _id, select_variation } = item;

        const body = {
            _id: _id,
            variation: select_variation,
            quantity: 1,
        };

        addToCartMutation(body);
    };

    const removeFromCart = (code) => {
        removeFromCartMutation({ code: code, quantity: 1 });
    };

    const increaseQuantity = (code) => {
        increaseQuantityMutation({ code: code, quantity: 1 });
    };

    const decreaseQuantity = (code) => {
        decreaseQuantityMutation({ code: code, quantity: 1 });
    };

    const updateQuantity = (code, quantity) => {
        updateQuantityMutation({
            product: {
                code: code,
            },
            newQuantity: quantity,
        });
    };

    const getTotalPrice = () => {
        return total = purchaseItems.reduce((total, cur) => {
            const subPrice = cur.select_variation.reduce(
                (total, cur) => total + cur.sub_price,
                0
            );
            return total + (cur.sale_price + subPrice) * cur.quantity_in_cart;
        }, 0);
    };

    const getCart = () => data ? [...data.products] : [];

    const getPurchaseItems = () => [...purchaseItems]

    const addToPurchaseItems = (item) => {
        const isExist = getPurchaseItems().some(i => i.code === item.code);

        if (isExist) return setPurchaseItems([...purchaseItems.filter(i => i.code !== item.code)])

        return setPurchaseItems([...purchaseItems, item])
    }

    const updateVariation = (item) => {
        const { code, _id, select_variation } = item;
        const body = {
            code: code,
            _id: _id,
            variation: select_variation,
        };
        updateVariationMutation(body);
    };

    const purchaseAll = () => {
        if (isPurchaseAll()) return setPurchaseItems([])
        return setPurchaseItems([...getCart()])
    }

    const isInPurchaseItems = (item) => getPurchaseItems().some(i => i.code === item.code);

    const isPurchaseAll = () => purchaseItems.length === getCart().length;

    return {
        updateVariation,
        isLoading,
        purchaseAll,
        isPurchaseAll,
        isInPurchaseItems,
        addToPurchaseItems,
        getPurchaseItems,
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
