const ORDER_URL = '/order';


export const get_order_by_state = (state) => {
    return `${ORDER_URL}/state/tracking?page=1&limit=10&type=${state}`
}

export const get_order_detail_by_id = (params) => {
    const id = Object.values(params).join('');
    return `${ORDER_URL}/${id}`
}

export const cancel_order_by_id = (id) => {
    return `${ORDER_URL}/${id}/cancel`
}
export const pay_again = (id) => {
    return `${ORDER_URL}/pay-again/${id}`
}
export const get_order_by_pay_os = (params) => {
    let orderCode;
    for (const key in params) {
        if (typeof params[key] === 'string') {
            orderCode = params[key];
        }
    }
    return `${ORDER_URL}/payos/${orderCode}`;
}

