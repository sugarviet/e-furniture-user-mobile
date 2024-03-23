import { useLocalSearchParams } from "expo-router";
import useAuth from "../../hooks/useAuth";
import useNavigation from "../../hooks/useNavigation";
import useAuthStore from "../../stores/useAuthStore";
import { usePost, useUpdate } from "../../hooks/api-hooks";
import { get_update_user_profile } from "../../api/userUrl";

function useButtonModal() {
    const param = useLocalSearchParams();
    const { mutate: edit_profile } = useUpdate(get_update_user_profile(param.slug), undefined, () => {
        console.log("thanh cong");
    }, () => { console.log("That bai") });
    const cart = {
        function: () => {

        },
    };
    const addToCart = {
        function: () => {
            go_to_wishlist();
        },
    };
    const remove = {
        function: () => {

        },
    };
    const checkout = {
        function: () => {

        },
    };
    const viewOrder = {
        function: () => {

        },
    };
    const goToHome = {
        function: () => {

        },
    };
    const addNewAddress = {
        function: () => {

        },
    };
    const updateUserProfile = {
        function: () => {
            const { slug } = param;
            console.log('hi');
        },
    };


    return { addToCart, updateUserProfile, addNewAddress, goToHome, viewOrder, cart, remove, checkout };
}

export default useButtonModal;
