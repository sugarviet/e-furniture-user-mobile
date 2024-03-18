import { Keyboard, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native";

function ContentContainer({ children }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={{ paddingHorizontal: 10, paddingVertical: 10, flex: 1 }}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default ContentContainer;
