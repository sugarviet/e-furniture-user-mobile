import { router } from "expo-router";

function useNavigation() {
    const go_back = () => router.back();
    const go_to_welcome_screen = () => router.push('/')
    const go_to_sign_in = () => router.push('/sign-in')
    const go_to_sign_up = () => router.push('/sign-up')
    const go_to_home = () => router.push('/home')
    const go_to_menu = () => router.push("/menu")
    const go_to_product_detail = () => router.push("/product-detail")
    const go_to_product_card = () => router.push("/product-card")
    const go_to_search_page = () => router.push("/search")

    return {
        go_to_sign_in,
        go_to_sign_up,
        go_to_home,
        go_to_welcome_screen,
        go_back,
        go_to_menu,
        go_to_product_detail,
        go_to_search_page
    };
}

export default useNavigation;