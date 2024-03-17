import { StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 16,
    flex: 1,
  },
  icon_wrapper: {
    borderRadius: 8,
    width: 44,
    height: 44,
    padding: 8,
    alignItems: "center",
    alignContent: "center",
    marginRight: 16,
  },
  icon: {
    width: 28,
    height: 28,
    flex: 1
  },
  text_wrapper: {
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontFamily: FONTS.bold,
    color: COLORS.black,
  },
});

export default styles;
