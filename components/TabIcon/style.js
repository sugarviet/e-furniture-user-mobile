import { StyleSheet } from "react-native";
import { FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: 'center'
    },
    icon: {
        marginVertical: SIZES.tiny,
    },
    label: (color) => ({
        fontFamily: FONTS.bold,
        fontSize: SIZES.small,
        color: color,
        textTransform: 'capitalize',
    }),
});

export default styles;