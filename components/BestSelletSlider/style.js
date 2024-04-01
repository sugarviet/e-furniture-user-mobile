import { StyleSheet, Dimensions } from "react-native";
import { SIZES, COLORS, ROUNDED } from "../../constants";

const WIDTH_FULL = Dimensions.get("window").width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
  },
  carouselItem: (padding, width, height) => ({
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }),

  imageItem: (resizeMode) => ({
    resizeMode: resizeMode,
    width: 380,
    height: 300,
  }),
  paginationContainer: {
    position: 'absolute',
    bottom: 30,
    paddingTop: SIZES.tiny,
    paddingBottom: SIZES.tiny,
  },
  paginationDot: {
    width: SIZES.xSmall,
    height: SIZES.xSmall,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  inactivePaginationDot: {
    width: SIZES.xSmall,
    height: SIZES.xSmall,
    borderRadius: 5,
    backgroundColor: "white",
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