import { Image } from "react-native";
import { classNames } from "../../utils/classNames";

function Icon({ source, className, style }) {
  return (
    <Image
      style={style}
      resizeMode="contain"
      className={classNames(className)}
      source={source}
    />
  );
}

export default Icon;
