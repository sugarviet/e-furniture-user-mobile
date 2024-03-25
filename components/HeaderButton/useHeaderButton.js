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

    return { close, back, notification };
}

export default useHeaderButton;