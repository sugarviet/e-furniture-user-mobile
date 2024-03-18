import { router } from "expo-router";

function useNavigation() {
    const go_back = () => router.back();
    const go_to_welcome_screen = () => router.replace('/')
    const go_to_sign_in = () => router.replace('/sign-in')
    const go_to_sign_up = () => router.replace('/sign-up')
    const go_to_home = () => router.replace('/home')
    const go_to_menu = () => router.push("/menu")

    return { go_to_sign_in, go_to_sign_up, go_to_home, go_to_welcome_screen, go_back, go_to_menu };
}

export default useNavigation;