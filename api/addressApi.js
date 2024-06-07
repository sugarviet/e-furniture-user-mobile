export const get_all_address = () => {
    return "/address";
}

export const add_address = () => {
    return "/address";
}

export const edit_address = (_id) => {
    return `/address/${_id}`;
}

export const get_address_default_by_user = () => {
    return "/address/default";
}

export const set_address_default_by_user = (_id) => {
    return `/address/default/${_id}`;
}

export const delete_single_address = (id) => {
    return `/address/${id}`;
}

export const get_district_in_saigon = () => {
    return "https://vapi.vnappmob.com/api/province/district/79";
}

export const get_ward_in_saigon = (id) => {
    return `https://vapi.vnappmob.com/api/province/ward/${id}`;
}