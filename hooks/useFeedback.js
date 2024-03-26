import { get_feedback_api_of } from "../api/feedbackUrl";
import { useFetch } from "./api-hooks";

function useFeedback(id) {
    const { data, isLoading } = useFetch(get_feedback_api_of(id));

    console.log(data);

    const get_average_rating = () => {
        const value = data.reduce((rating, cur) => rating + cur.rating, 0) / data.length;
        return value ? value.toFixed(1) : 'not rated'
    }

    const get_total_feedback = () => data.length;

    return {
        get_average_rating,
        isLoading,
        get_total_feedback,
    };
}

export default useFeedback;
