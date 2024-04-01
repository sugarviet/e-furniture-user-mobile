import { get_feedback_api } from "../api/feedbackApi";
import { get_feedback_api_of } from "../api/feedbackUrl";
import { useFetch, usePost } from "./api-hooks";

function useFeedback(id) {
    const { data, isLoading } = useFetch(get_feedback_api_of(id));
    const {mutate:feedback} = usePost(get_feedback_api(), undefined, ()=>{},()=>{})

    const get_feedback_at_rate = (rate) => {
        if(rate == 0) return data;
        return data.filter(item => item.rating == rate)
    };

    const get_average_rating = () => {
        const value = data.reduce((rating, cur) => rating + cur.rating, 0) / data.length;
        return value ? value.toFixed(1) : 'not rated'
    }

    const get_total_feedback = () => data.length;

    const handle_feedback_product = (data) => {
        feedback(data)
    }

    return {
        get_average_rating,
        isLoading,
        get_total_feedback,
        handle_feedback_product,
        get_feedback_at_rate
    };
}

export default useFeedback;
