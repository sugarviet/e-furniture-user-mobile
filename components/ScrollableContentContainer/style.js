import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: (color) => ({
        backgroundColor: color,
        flex: 1,
        paddingVertical: 12,
    }),
    content_wrapper: {
        paddingHorizontal: 12,
        paddingVertical: 12,
    }
})

export default styles;