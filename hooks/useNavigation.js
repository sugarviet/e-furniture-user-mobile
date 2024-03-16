import { router } from "expo-router";

function useNavigation() {
    const go_to_welcome_screen = () => router.replace('/')
    const go_to_sign_in = () => router.replace('/sign-in')
    const go_to_home = () => router.replace('/home')
    return { go_to_sign_in, go_to_home, go_to_welcome_screen };
}

export default useNavigation;