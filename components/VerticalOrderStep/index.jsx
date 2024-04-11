import { Text, View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { COLORS } from '../../constants/theme';
import { formatDateWithType, formatTime } from "../../utils/formatDate";
import Icon2D from "../Icon2D";


// const data = [
//     {
//         name: 'Pending',
//         note: 'Your order is waiting for to',
//         date: '2024-03-25T1:04:07.018Z'
//     },
//     {
//         name: 'Processing',
//         note: 'Efurniture staff is preparing the order',
//         date: '2024-03-26T11:04:07.018Z'
//     },
//     {
//         name: 'Shipping',
//         note: 'Your order will be delivered soon, please keep your phone handy.',
//         date: '2024-03-27T6:04:07.018Z'
//     },
//     {
//         name: 'Done',
//         note: 'Your order has been received',
//         date: '2024-03-28T17:04:07.018Z'
//     },
// ]

const STEPS = {
    3: {
        activeIcon: <Icon2D name='pending' activated={COLORS.primary} size={15} />,
        unactiveIcon: <Icon2D name='pending' activated='#d3d3d3' size={15} />

    },
    2: {
        activeIcon: <Icon2D name='package' activated={COLORS.primary} size={15} />,
        unactiveIcon: <Icon2D name='package' activated='#d3d3d3' size={15} />
    },
    1: {

        activeIcon: <Icon2D name='ship' activated={COLORS.primary} size={10} />,
        unactiveIcon: <Icon2D name='ship' activated='#d3d3d3' size={10} />
    },
    0: {
        activeIcon: <Icon2D name='done' activated={COLORS.primary} size={15} />,
        unactiveIcon: <Icon2D name='done' activated='#d3d3d3' size={15} />

    }
}


const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
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
    labelAlign: "left",
    labelSize: 12,
};

const classNameMap = {
    1: 'h-20',
    2: 'h-36',
    3: 'h-64',
    4: 'h-full',
};

function VerticalOrderStep({ data }) {

    const labels = data.map((track) => track.name).reverse();
    const note = data.map((track) => track.note).reverse();
    const date = data.map((track) => track.date).reverse();

    const currentPosition = 0

    const deliveryLength = data.length

    const className = classNameMap[deliveryLength] || 'h-32';

    const renderLabel = ({
        position,
        label,
        currentPosition,
    }) => {
        const color = position === currentPosition ? "#000" : "#cfcfcf";
        const dateColor = position === currentPosition ? "#000" : "#aaa";
        return (
            <View className="pl-2 flex flex-row justify-between w-full pr-10 relative">
                <View className="flex flex-col max-w-[250px]">
                    <Text className="font-urbanistSemiBold" style={{ color }}>{label}</Text>
                    <Text style={{ color }}>{note[position]}</Text>
                </View>
                <View className="absolute left-[-85px] top-1 flex items-center">
                    <Text style={{ color: dateColor }} className="text-[11px] font-urbanistMedium text-grey2">
                        {formatDateWithType(date[position], 'DD, MMM')}
                    </Text>
                    <Text style={{ color: dateColor }} className="text-[11px] font-urbanistMedium text-grey2">
                        {formatTime(date[position])}
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View className={`pl-14 ${className}`}>
            <StepIndicator
                renderStepIndicator={({ position }) => {
                    return position === currentPosition ? (
                        STEPS[position].activeIcon
                    ) : STEPS[position].unactiveIcon;
                }}
                stepCount={labels.length}
                labels={labels}
                renderLabel={renderLabel}
                currentPosition={currentPosition}
                customStyles={customStyles}
                direction="vertical"
            />
        </View>
    );
}

export default VerticalOrderStep;
