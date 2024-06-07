
const ORDER_CHECKOUT_URL = '/order';


export const checkout_with_guest = () => {
    return `${ORDER_CHECKOUT_URL}/guest/create-order`
}

export const checkout_with_user = () => {
    return `${ORDER_CHECKOUT_URL}/create-order`
}

export const set_is_paid_order = () => {
    return `${ORDER_CHECKOUT_URL}/paid`
}
