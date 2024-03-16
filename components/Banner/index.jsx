import { Image } from "react-native";

function Banner({ source, height }) {
  return (
    <Image
      style={{ width: "100%", height: height ? height : "35%" }}
      resizeMode="cover"
      source={source}
    />
  );
}

export default Banner;
