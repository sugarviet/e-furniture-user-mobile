import useNavigation from "../../hooks/useNavigation";
import { ICONS } from "../../constants/icons";
import { IMAGES } from "../../constants/image";

function useHeaderButton() {
    const { go_back, go_to_order,go_to_home,go_to_menu } = useNavigation();

    const close = {
        icon: IMAGES.back,
        function: () => { go_back() },
    }

    const notification = {
        icon: IMAGES.notification,
        function: () => { },
    }

    const back = {
        icon: IMAGES.back,
        function: () => { go_back() },
    }

    const white = {
        icon: IMAGES.right_arrow_white,
        function: () => { go_back() },
    }
    const back_white = {
        icon: IMAGES.right_arrow_white,
        function: () => { go_to_home() },
    }

    const order_back = {
        icon: IMAGES.back,
        function: () => { go_to_order() },
    }
    const bank_back = {
        icon: IMAGES.back,
        function: () => { go_to_menu() },
    }

    return { close, back, notification, back_white, order_back,bank_back,white };
}

export default useHeaderButton;