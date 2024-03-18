import useNavigation from "../../hooks/useNavigation";
import {ICONS} from "../../constants/icons";

function useHeaderButton() {
    const { go_back} = useNavigation();

    const close = {
        icon: ICONS.ionIcon_close,
        function: () => { go_back() },
    }

    const back = {
        icon: ICONS.ionIcon_back,
        function: () => { go_back() },
    }

    const chat = {
        icon: ICONS.ionIcon_chat,
        function: () => { }
    }

    const search = {
        icon: ICONS.ionIcon_search,
        function: () => { }
    }

    const shopping_options = {
        icon: ICONS.ionIcon_menu,
        function: () => { }
    }

    const shopping_cart = {
        icon: ICONS.ionIcons_cart,
        function: () => { }
    }

    return { close, back, chat, search, shopping_options, shopping_cart };
}

export default useHeaderButton;