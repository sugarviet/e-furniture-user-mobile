import { StyleSheet, Dimensions } from "react-native";
import { SIZES, COLORS, ROUNDED } from "../../constants";

const WIDTH_FULL = Dimensions.get("window").width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carouselItem: (padding, width, height) => ({
    flex: 1,
    padding: padding,
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",

  }),
  
  imageItem: (resizeMode) => ({
    resizeMode: resizeMode,
    width: '100%',
    height: '100%',
  }),
  paginationContainer: {
    paddingTop: SIZES.tiny,
    paddingBottom: SIZES.tiny,
  },
  paginationDot: {
    width: SIZES.xSmall,
    height: SIZES.xSmall,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: COLORS.primary,
  },
  inactivePaginationDot: {
    width: SIZES.xSmall,
    height: SIZES.xSmall,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "lightgray",
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: SIZES.xLarge,
    height: SIZES.xLarge,
    backgroundColor: COLORS.info,
    borderRadius: ROUNDED.small,
  },

});

export default styles;