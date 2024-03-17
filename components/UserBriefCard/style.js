import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../../../constants";
import GLOBAL_STYLE from "../../../app/global.style"

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        padding: 8,
        borderRadius: 8,
        ...GLOBAL_STYLE.shadow
    },
    avatar_wrapper: {
        marginRight: 20,
    },
    info_wrapper: {
        flex: 1,
    },
    name: {
        fontFamily: FONTS.bold,
        fontSize: 20,
        marginVertical: 2,
    },
    go_to_profile: {
        fontFamily: FONTS.bold,
        fontSize: 12,
        color: COLORS.lightBlack,
        marginVertical: 2,
    }
});

export default styles;