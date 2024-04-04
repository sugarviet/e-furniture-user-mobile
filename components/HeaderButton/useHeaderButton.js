import useNavigation from "../../hooks/useNavigation";
import { ICONS } from "../../constants/icons";
import { IMAGES } from "../../constants/image";

function useHeaderButton() {
    const { go_back } = useNavigation();

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

    const back_white = {
        icon: IMAGES.right_arrow_white,
        function: () => { go_back() },
    }

    return { close, back, notification,back_white };
}

export default useHeaderButton;