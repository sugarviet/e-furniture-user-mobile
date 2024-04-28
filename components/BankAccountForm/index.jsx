import axios from "axios";
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import useBank from '../../hooks/useBank';
import BankInput from '../BankInput';
import ButtonModal from '../ButtonModal';
import ErrorMessage from "../ErrorMessage";
import LoadingStrip from "../LoadingStrip";

const client_id = "b2b6a9d3-0e62-48fe-8731-07f072b97412";
const api_key = "0baa5242-d26e-400f-88e4-0e5b82317b71";

const BankAccountForm = () => {

    const params = useLocalSearchParams();

    const { name, logo, bin } = params

    const [accountName, setAccountName] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [accountError, setAccountError] = useState(false);

    const { addBankAccount,isCreateBankLoading } = useBank();

    const handleLookUpAccount = () => {
        // const data = JSON.stringify({
        //     bin: bin,
        //     accountNumber: accountNumber,
        // });
        // const config = {
        //     method: "post",
        //     url: "https://api.vietqr.io/v2/lookup",
        //     headers: {
        //         "x-client-id": client_id,
        //         "x-api-key": api_key,
        //         "Content-Type": "application/json",
        //     },
        //     data: data,
        // };
        // axios(config)
        //     .then(function (response) {
        //         const { accountName } = response.data.data;
        //         setAccountName(accountName);
        //     })
        //     .catch(function (error) {
        //         setAccountError(true);
        //         setAccountName(undefined);
        //     });
    };

    const handleAddAccount = () => {
        addBankAccount({ ...params, accountNumber, accountName });
    };

    if(isCreateBankLoading) return <LoadingStrip/>


    return (
        <View>
            <ScrollView className="pt-4 bg-white h-full">
                <View className="flex justify-center items-center bg-[#f7f7f7] mx-4 py-6 rounded-xl">
                    <Image className="w-48 h-20 " source={{ uri: logo }}></Image>
                    <Text className="text-[14px] font-urbanistBold">{name}</Text>
                </View>
                <View className="mx-4 mt-6">
                    <BankInput
                        onFocus={() => setAccountError(false)}
                        onBlur={handleLookUpAccount}
                        onChange={setAccountNumber}
                        value={accountNumber}
                        type={"account_number"}
                        className="py-4 rounded-md text-[16px] font-urbanistBold"
                    />
                </View>
                {accountError && (
                    <View className="mx-4 mt-2">
                        <ErrorMessage message={"Your bank account number is invalid"} />
                    </View>
                )}
                <View className="mx-4 mt-2">
                    <BankInput
                        onFocus={() => setAccountError(false)}
                        onBlur={handleLookUpAccount}
                        onChange={setAccountName}
                        value={accountName}
                        type={"account_name"}
                        className="py-4 rounded-md text-[16px] font-urbanistBold"
                    />
                </View>
            </ScrollView>
            <View className="absolute bottom-4 px-4 left-0 right-0 w-full">
                <ButtonModal onPress={handleAddAccount} type="addNewAddress">
                    <Text className="text-white">Confirm</Text>
                </ButtonModal>
            </View>
        </View>
    )
}

export default BankAccountForm