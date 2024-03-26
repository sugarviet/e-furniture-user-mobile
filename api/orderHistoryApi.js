const ORDER_URL = '/order';


export const get_order_by_state = (state) => {
    return `${ORDER_URL}/state/tracking?page=1&limit=10&&type=${state}`
}

export const get_order_detail_by_id = (params, urlParams) => {
    const { id } = urlParams;
    return `${ORDER_URL}/${id}`
}

export const cancel_order_by_id = (id) => {
    return `${ORDER_URL}/${id}/cancel`
}

