import { get_address_default_by_user } from "../../api/addressApi";
import { IMAGES } from "../../constants/image";
import { withFetchDataWithAuth } from "../../hocs/withFetchDataWithAuth";
import useNavigation from "../../hooks/useNavigation";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Icon2D from "../Icon2D";
import { useCheckout } from "../../context/CheckoutContext";
import { useEffect } from "react";
import { get_bank_account_api, get_bank_by_id } from "../../api/bankApi";
import { useFetchWithAuth } from "../../hooks/api-hooks";
import LoadingStrip from "../LoadingStrip";
import formatBankAccountNumber from "../../utils/formatBankAccountNumber";

function DefaultBankAccount({ data, setSelectedBank }) {

  const defaultBank = data.find((bank) => bank.is_default);

  const { data: bankInfo, isLoading } = useFetchWithAuth(get_bank_by_id(defaultBank._id));

  const { go_to_bank_account } = useNavigation();

  useEffect(() => (
    setSelectedBank(defaultBank)
  ), [data])

  if (isLoading) return <LoadingStrip />;

  return (
    <TouchableOpacity onPress={go_to_bank_account}>
      <View className="flex-row justify-between items-center bg-white px-2 py-4 shadow-sm rounded-xl mx-3">
        <View className="flex-1">
          {bankInfo ? (
            <View className='max-w-[240px] flex flex-row items-center'>
              <Image className="w-[100px] h-[32px]" resizeMode="contain" source={{ uri: bankInfo.bank_logo }}></Image>
              <View className='flex flex-col py-[1.5rem] pr-[1.5rem] '>
                <View className='text-[12px] lg:text-[14px] leading-[1.1875] tracking-[0.08em] flex flex-col gap-1'>
                  <Text className='font-medium text uppercase'>{bankInfo.bank_account_name}</Text>
                  <Text>{formatBankAccountNumber(bankInfo.account_number + "")}</Text>
                  <Text>{bankInfo.bank_name}</Text>
                </View>
              </View>
            </View>
          ) : (
            <Text className="text-sm font-urbanist">
              Please select address
            </Text>
          )}
        </View>
        <Image
          style={{ width: 24, height: 24 }}
          source={IMAGES.right_arrow_black}
        />
      </View>

    </TouchableOpacity>
  );
}

export default withFetchDataWithAuth(DefaultBankAccount, get_bank_account_api);

