import useNavigation from "../../hooks/useNavigation";
import { ICONS } from "../../constants/icons";
import { IMAGES } from "../../constants/image";

function useFlashSaleButton(id) {
    const { go_to_product_detail } = useNavigation();

    const upcoming = {
        name: 'Upcoming',
        function: () => { go_to_product_detail(id) },
    }

    const ongoing = {
        name: 'Buy now',
        function: () => { go_to_product_detail(id) },
    }

    const finished = {
        name: 'Finished',
        function: () => { go_to_product_detail(id) },
    }


    return { upcoming, ongoing, finished };
}

export default useFlashSaleButton;