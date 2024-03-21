import { useState } from "react";
import { View, Text } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { COLORS } from '../../constants/theme';
import Icon2D from "../Icon2D";

const labels = [
    "Packaging",
    "Shipping",
    "Receive",
    "Done",
];

const STEPS = {
    0: {
        activeIcon: <Icon2D name='package' activated={COLORS.primary} size={24} />,
        unactiveIcon: <Icon2D name='package' activated='#d3d3d3' size={24} />

    },
    1: {
        activeIcon: <Icon2D name='ship' activated={COLORS.primary} size={24} />,
        unactiveIcon: <Icon2D name='ship' activated='#d3d3d3' size={24} />
    },
    2: {

        activeIcon: <Icon2D name='package' activated={COLORS.primary} size={24} />,
        unactiveIcon: <Icon2D name='package' activated='#d3d3d3' size={24} />
    },
    3: {
        activeIcon: <Icon2D name='done' activated={COLORS.primary} size={24} />,
        unactiveIcon: <Icon2D name='done' activated='#d3d3d3' size={24} />

    }
}


const customStyles = {
    stepIndicatorSize: 45,
    currentStepIndicatorSize: 55,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeWidth: 2,
    stepStrokeFinishedColor: 'white',
    stepStrokeCurrentColor: 'white',
    stepStrokeUnFinishedColor: `white`,
    separatorUnFinishedColor: `#d3d3d3`,
    stepIndicatorFinishedColor: 'white',
    stepIndicatorUnFinishedColor: `white`,
    separatorFinishedColor: COLORS.primary,
    stepIndicatorCurrentColor: "white",
    stepIndicatorLabelFinishedColor: "whitte",
    stepIndicatorLabelUnFinishedColor: "white",
    labelColor: "#999999",
    currentStepLabelColor: COLORS.primary,

    labelSize: 12,
};

function OrderStep() {
    const [step, setStep] = useState(1);
    return (
        <View className="mt-4">
            <StepIndicator
                renderStepIndicator={({ position }) => {
                    return position === step ? (
                        STEPS[position].activeIcon
                    ) : STEPS[position].unactiveIcon;
                }}
                stepCount={labels.length}
                labels={labels}
                currentPosition={step}
                customStyles={customStyles}
            />
        </View>
    );
}

export default OrderStep;
