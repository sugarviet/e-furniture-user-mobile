const FURNITURE_URL = '/product'

export const get_search_furniture_api = (param) => {
    const { q } = param
    return `${FURNITURE_URL}/search/${q}?page=1&limit=8
    `
}

export const get_search_live_furniture_api = (searchValue) => {
    return `${FURNITURE_URL}/search/${searchValue}?page=1&limit=4`
}