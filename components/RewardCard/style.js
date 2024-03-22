import { StyleSheet } from "react-native";
// import { SIZES, FONTS, COLORS } from "../../../constants";
import {COLORS} from '../../constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.danger,
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginVertical: 16,
  },
  primary_icon_wrapper: {
    height: 60,
    top: -30,
    right: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  content_wrapper: {
    marginTop: 48,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#d3d3d3",
  },
  description: {
    textAlign: "center",
    paddingVertical: 14,
    color: COLORS.lightGray,
    fontSize: 13,
  },
  button: {
    backgroundColor: "white",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 32,
  },
  icon_button: {
    width: 20,
    height: 20,
    marginHorizontal: 4,
  },
  text_button: {
    fontSize: 14,
    color: COLORS.primary,
    textAlign: 'center',
    marginHorizontal: 4,
  },
});

export default styles;
