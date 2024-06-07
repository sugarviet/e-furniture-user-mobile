import { useState } from "react";
import { View, Text } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { COLORS } from '../../constants/theme';
import Icon2D from "../Icon2D";
import { FontAwesome5 } from "@expo/vector-icons";

const labels = [
    "Pending",
    "Processing",
    "Shipping",
    "Done",
];

const STEPS = {
    0: {
        activeIcon: <Icon2D name='pending' activated={COLORS.primary} size={18} />,
        unactiveIcon: <Icon2D name='pending' activated='#d3d3d3' size={18} />

    },
    1: {
        activeIcon: <Icon2D name='package' activated={COLORS.primary} size={18} />,
        unactiveIcon: <Icon2D name='package' activated='#d3d3d3' size={18} />
    },
    2: {

        activeIcon: <Icon2D name='ship' activated={COLORS.primary} size={14} />,
        unactiveIcon: <Icon2D name='ship' activated='#d3d3d3' size={14} />
    },
    3: {
        activeIcon: <Icon2D name='done' activated={COLORS.primary} size={18} />,
        unactiveIcon: <Icon2D name='done' activated='#d3d3d3' size={18} />

    }
}


const TYPES = {
    Pending: {
        step: 0,
    },
    Processing: {
        step: 1,
    },
    Shipping: {
        step: 2,
    },
    Done: {
        step: 3,
    },
};


const customStyles = {
    stepIndicatorSize: 35,
    currentStepIndicatorSize: 45,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 1,
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#d3d3d3',
    stepStrokeCurrentColor: 'black',
    stepStrokeUnFinishedColor: `#d3d3d3`,
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

function OrderStep({ type }) {

    const validTypes = Object.keys(TYPES);

    if (!validTypes.includes(type)) {
        return null;
    }

    const { step } = TYPES[type];

    return (
        <View className="">
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
