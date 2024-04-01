import { View, Text, Image } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { ICONS } from '../../constants/icons'

const BankAccountCard = () => {
    return (
        <View className="pt-4">
            <View className="bg-blackPrimary rounded-3xl py-6 px-6">
                <View className="flex flex-row justify-between">
                    <View>
                        <Text className="text-white font-urbanistBold text-base pb-2">
                            VU TRUONG GIANG
                        </Text>
                        <Text className="text-white font-urbanistBold text-base">
                            *******409104
                        </Text>
                    </View>
                    <Image className="w-[100px] h-[32px]" source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Logo_BIDV.svg/2560px-Logo_BIDV.svg.png" }} />
                                                                                                             </View>
                <View className="flex flex-row justify-between">
                    <View className="flex flex-row items-center gap-2 pt-8">
                        <Feather name={ICONS.feather_check_circle} size={20} color="#49B949" />
                        <Text className="text-[#49B949]">Default bank account</Text>
                    </View>
                    <View className="self-end">
                        <SimpleLineIcons name={ICONS.simple_options_vertical} size={24} color="white" />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BankAccountCard