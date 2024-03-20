import { AntDesign } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { ICONS } from '../../constants/icons';
import { classNames } from '../../utils/classNames';

const types = {
    cart: {
        plusSize: 12,
        minusSize: 12,
        text: 16,
    },
    productDetail: {
        plusSize: 23,
        minusSize: 26,
        text: 20,
    },
};


const QuantityOption = ({ className, name }) => {

    const plusSize = types[name].plusSize;
    const text = types[name].text;
    const minusSize = types[name].minusSize;

    return (
        <View className={classNames(className, "flex flex-row items-center bg-[#f3f3f3] rounded-[40px]")}>
            <AntDesign name={ICONS.antDesign_minus} size={minusSize} color="black" />
            <Text style={{ fontSize: text }} className="font-urbanistBold mx-4">2</Text>
            <AntDesign name={ICONS.antDesign_plus} size={plusSize} color="black" />
        </View>
    )
}

export default QuantityOption