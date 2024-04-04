import { StyleSheet, Dimensions } from "react-native";
import { SIZES, COLORS, ROUNDED } from "../../constants";

const WIDTH_FULL = Dimensions.get("window").width

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    position: 'relative',
  },
  imageItem: (resizeMode) => ({
    resizeMode: resizeMode,
    width: '100%',
    height: 90,
  }),
  paginationContainer: {
    position: 'absolute',
    bottom: 2,
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