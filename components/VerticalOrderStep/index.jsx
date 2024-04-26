import { Image, Text, TouchableOpacity, View } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { COLORS } from '../../constants/theme';
import { formatDateWithType, formatTime } from "../../utils/formatDate";
import Icon2D from "../Icon2D";
import useNavigation from "../../hooks/useNavigation";

const STEPS = {
    Pending: {
        activeIcon: <Icon2D name='pending' activated='#26aa99' size={15} />,
        unactiveIcon: <Icon2D name='pending' activated='#d3d3d3' size={15} />

    },
    Processing: {
        activeIcon: <Icon2D name='package' activated='#26aa99' size={15} />,
        unactiveIcon: <Icon2D name='package' activated='#d3d3d3' size={15} />
    },
    Shipping: {

        activeIcon: <Icon2D name='ship' activated='#26aa99' size={12} />,
        unactiveIcon: <Icon2D name='ship' activated='#d3d3d3' size={10} />
    },
    Done: {
        activeIcon: <Icon2D name='done' activated='#26aa99' size={18} />,
        unactiveIcon: <Icon2D name='done' activated='#d3d3d3' size={15} />

    },
    Failed: {
        activeIcon: <Icon2D name='fail' activated='#26aa99' size={15} />,
        unactiveIcon: <Icon2D name='fail' activated='#d3d3d3' size={13} />

    },
    Refunded: {
        activeIcon: <Icon2D name='refund' activated='#26aa99' size={17} />,
        unactiveIcon: <Icon2D name='refund' activated='#d3d3d3' size={15} />

    },
    Cancelled: {
        activeIcon: <Icon2D name='cancel' activated='#26aa99' size={18} />,
        unactiveIcon: <Icon2D name='cancel' activated='#d3d3d3' size={16} />

    }
}


const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 1,
    currentStepStrokeWidth: 1,
    stepStrokeWidth: 1,
    stepStrokeFinishedColor: '#26aa99',
    stepStrokeCurrentColor: '#26aa99',
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
    3: 'h-80',
    4: 'h-96',
    5: 'h-full'
};

function VerticalOrderStep({ data, metaData }) {

    const { go_to_delivery_proof } = useNavigation();

    const labels = data.map((track) => track.name).reverse();
    const note = data.map((track) => track.note).reverse();
    const date = data.map((track) => track.date).reverse();

    const currentPosition = 0

    const deliveryLength = data.length

    const className = classNameMap[deliveryLength] || 'h-full';

    const renderLabel = ({
        position,
        label,
        currentPosition,
    }) => {
        const color = position === currentPosition ? "#26aa99" : "#cfcfcf";
        const dateColor = position === currentPosition ? "#26aa99" : "#aaa";
        return (
            <View className="pl-2 flex flex-row justify-between w-full pr-10 relative">
                <View className="flex flex-col max-w-[250px]">
                    <Text className="font-urbanistExtraBold text-base" style={{ color }}>{label}</Text>
                    {label === "Processing" ?
                        <Text style={{ color }}>eFurniture staff is preparing the order</Text>
                        :
                        label === "Done" ?
                            <View>
                                <Text className="text-sm font-urbanistMedium text-[#26aa99]">Successfully delivered</Text>
                                <Text className="text-sm font-urbanistMedium text-[#26aa99]">Recipient: {metaData.order_shipping.last_name} {metaData.order_shipping.first_name}</Text>
                                <TouchableOpacity onPress={() => go_to_delivery_proof({ data: JSON.stringify(metaData) })}>
                                    <Text className="text-sm font-urbanistMedium text-blue-400 underline">View Proof of Delivery</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <Text style={{ color }}>{note[position]}</Text>
                    }
                </View>
                <View className="absolute left-[-85px] top-1/2 -translate-y-3 flex items-center">
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
                    const state = labels[position];
                    return (
                        <View>
                            {state in STEPS ? (
                                currentPosition === position ? (
                                    STEPS[state].activeIcon
                                ) : (
                                    STEPS[state].unactiveIcon
                                )
                            ) : null}
                        </View>
                    );
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
