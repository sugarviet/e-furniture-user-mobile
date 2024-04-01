import { useState } from "react";
import { Text, View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { classNames } from "../../utils/classNames";

const customStyles = {
  stepIndicatorSize: 8,
  currentStepIndicatorSize: 16,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: "#000000",
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: "#000000",
  stepStrokeUnFinishedColor: "#aaaaaa",
  separatorFinishedColor: "#000000",
  separatorUnFinishedColor: "#aaaaaa",
  stepIndicatorFinishedColor: "#000000",
  stepIndicatorUnFinishedColor: "#aaaaaa",
  stepIndicatorCurrentColor: "#ffffff",
  stepIndicatorLabelCurrentColor: "#000000",
  stepIndicatorLabelFinishedColor: "#ffffff",
  stepIndicatorLabelUnFinishedColor: "#aaaaaa",
  labelColor: "#cccccc",
  currentStepLabelColor: "#000000",
  labelAlign: "left",
  currentStepLabelColor: "#000000",
};

function RegionSelectionStep({ labels, position, setPosition }) {
  return (
    <View className="h-36 bg-white px-4 py-2">
      <Text className="text-sm text-gray-500 mb-2">Region Selected</Text>
      <StepIndicator
        renderStepIndicator={({ stepStatus }) => {
          return stepStatus === "current" ? (
            <View className="bg-black w-2 h-2 rounded-full"></View>
          ) : null;
        }}
        renderLabel={({ label, stepStatus }) => {
          const current = stepStatus === "current";
          return (
            <View>
              <Text
                className={classNames(
                  "ml-2 font-semibold",
                  current ? "" : "text-gray-400"
                )}
              >
                {label}
              </Text>
            </View>
          );
        }}
        labels={labels}
        stepCount={labels.length}
        direction="vertical"
        customStyles={customStyles}
        currentPosition={position}
        onPress={setPosition}
      />
    </View>
  );
}

export default RegionSelectionStep;
