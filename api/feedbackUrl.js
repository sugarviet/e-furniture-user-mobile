const FEEDBACK_URL = '/feedback'

export const get_feedback_api_of = (id) => FEEDBACK_URL + '/' + id;

export const handle_feedback = () => {
    return FEEDBACK_URL
}