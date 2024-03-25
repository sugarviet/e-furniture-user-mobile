import { Pressable } from "react-native";
const PressableContainer = ({ children, onPress, className }) => {
  return (
    <Pressable
      className={className}
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      {children}
    </Pressable>
  );
};

export default PressableContainer;
