import { StyleSheet } from "react-native";

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

  },
  text_wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  text: (color = 'black') => ({
    color,
    fontSize: 16,
    fontWeight: "bold",
  }),
});

export default styles;
