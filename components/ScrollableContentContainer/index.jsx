import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";

function ScrollableContentContainer({ style, color, children }) {
  return (
    <SafeAreaView className="bg-white flex-1 py-2">
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView>
          {children}
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default ScrollableContentContainer;
