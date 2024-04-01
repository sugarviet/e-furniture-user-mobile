import { add_address } from "../api/addressApi";
import { usePost } from "./api-hooks";

function useAddress() {
    const { mutate: addAddressMutation } = usePost(add_address())

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