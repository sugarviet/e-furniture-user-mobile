import { pay_again } from "../api/orderHistoryApi";
import { useFetch, usePost, useUpdateWithAuth } from "./api-hooks";
import useNavigation from "./useNavigation";
import * as WebBrowser from 'expo-web-browser';
function useOrderAction(data) {

    const { go_back, go_to_order, go_to_home, go_to_menu } = useNavigation();

    const { mutate: payAgain } = useUpdateWithAuth(
        pay_again(data.id),
        undefined,
        async (data) => {
            await WebBrowser.openBrowserAsync(data.data.metaData);
            WebBrowser.dismissBrowser();
            go_to_home();
        },
        () => {

        },
    );

    return {
        payAgain,

    };
}

export default useOrderAction;
