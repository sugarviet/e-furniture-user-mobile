import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import BankAccountCard from '../BankAccountCard';
import { AntDesign } from '@expo/vector-icons';
import { ICONS } from '../../constants/icons';
import useNavigation from '../../hooks/useNavigation';
import { get_bank_account_api } from "../../api/bankApi";
import { withFetchDataWithAuth } from "../../hocs/withFetchDataWithAuth";
import EmptyContent from '../EmptyContent';
const BankAccount = ({ data }) => {

    const { go_to_list_bank_account } = useNavigation();

    const isEmptyBankAccount = !data.length;

    return (
        <ScrollView className="h-full bg-white px-4 py-4">
            <Text className="text-grey2 font-urbanistRegular text-[14px] uppercase">Your bank account list</Text>
            {data.map((bank, index) => (
                <BankAccountCard key={`${bank} + ${index}`} bank={bank} />
            ))}
            {isEmptyBankAccount &&
                <View className="pt-12 pb-6">
                    <EmptyContent type="bank" />
                </View>
            }
            <Pressable onPress={go_to_list_bank_account} className="flex flex-row items-center bg-black/10 rounded-3xl self-center px-6 py-2 mt-4 mb-10" >
                <AntDesign name={ICONS.antDesign_plus} size={16} color="black" ></AntDesign>
                <Text className="text-black text-sm font-urbanistSemiBold pl-1"> Add account bank</Text>
            </Pressable>
        </ScrollView>
    )
}

export default withFetchDataWithAuth(BankAccount, get_bank_account_api)