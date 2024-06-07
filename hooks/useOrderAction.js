import { pay_again } from "../api/orderHistoryApi";
import { useFetch, usePost, useUpdateWithAuth } from "./api-hooks";
import useNavigation from "./useNavigation";
import * as WebBrowser from 'expo-web-browser';
function useOrderAction(data) {

    const { go_back, go_to_order, go_to_home, go_to_menu,go_to_cart } = useNavigation();

    const { mutate: payAgain } = useUpdateWithAuth(
        pay_again(data.id),
        undefined,
        async (data) => {
            go_back();
            await WebBrowser.openBrowserAsync(data.data.metaData);
            WebBrowser.dismissBrowser();
        },
        () => {

        },
    );

    return {
        payAgain,

    };
}

export default useOrderAction;
