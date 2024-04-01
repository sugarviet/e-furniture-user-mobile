const FEEDBACK_URL = '/feedback'

export const get_feedback_api = () => FEEDBACK_URL;

export const get_feedback_api_of = (id) => FEEDBACK_URL + '/' + id;

export const get_feedback_api_product_detail = (params) => {
    console.log(params.slug)
    return FEEDBACK_URL + '/' + params.slug
}
    