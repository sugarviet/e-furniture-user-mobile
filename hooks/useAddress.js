import { add_address, get_all_address } from "../api/addressApi";
import { usePost } from "./api-hooks";
import useNavigation from "./useNavigation";
import useNotification from "./useNotification";
import { useQueryClient } from "@tanstack/react-query";

function useAddress() {
    const queryClient = useQueryClient();

    const { success_message, error_message } = useNotification();
    const { go_back } = useNavigation();

    const { mutate: addAddressMutation } = usePost(
        add_address(),
        undefined,
        () => {
            queryClient.invalidateQueries(get_all_address());
            success_message("address", "add");
            go_back();
        },
        () => {
            error_message("address", "add");
            go_back();
        }
    );

    const addAddress = (data) => {
        const { phone, province, district, ward, address } = data;

        const body = {
            "phone": phone,
            "province": province,
            "district": district.name,
            "ward": ward.name,
            "address": address
        }

        addAddressMutation(body)
    }



    return { addAddress };
}

export default useAddress;