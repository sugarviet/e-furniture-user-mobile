
export const get_user_profile = (param) => {
    const { slug } = param;
    return `account/${slug}`
}

export const get_update_user_profile = (param) => {
    const { slug } = param;
    return `account/${slug}`
}