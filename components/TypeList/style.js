import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
    paddingHorizontal: 10,
  },
  typesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  },
  typeItem: {
    width: "25%",
    alignItems: "center",
    marginBottom: 25,
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    backgroundColor: "#EBEBEC",
  },
  image: {
    width: 28,
    height: 28,
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default styles;
