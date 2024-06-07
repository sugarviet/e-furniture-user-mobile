import { View, Text, Image, Pressable, TouchableOpacity, ImageBackground } from 'react-native';
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import { ICONS } from '../../constants/icons'
import { IMAGES } from '../../constants/image'
import formatBankAccountNumber from "../../utils/formatBankAccountNumber";
import { useRef, useState } from 'react';
import ButtonModal from '../ButtonModal';
import GorhomeBottomSheet from "../BottomSheet";
import useBank from '../../hooks/useBank';
import LoadingStrip from '../LoadingStrip';
import FlashWarningModal from '../FlashWarningModal';
import ConfirmModal from '../ConfirmModal';

const BankAccountCard = ({ bank }) => {

    const {
        bank_account_name,
        account_number,
        bank_logo,
        bank_name,
        is_default,
    } = bank;

    const { setDefault, removeBankAccount, isRemoveBankLoading } = useBank();

    const [isDefault, setIsDefault] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const bankRef = useRef(null);

    const handleOpenDeleteModal = () => {
        bankRef.current?.expand();
    };
    const handleCloseDeleteModal = () => {
        bankRef.current?.close();
    };

    const handleRemoveBank = (id) => {
        if (bank.is_default) {
            setIsDefault(!isDefault)
            setTimeout(() => setIsDefault(false), 2000);
            handleCloseDeleteModal()
        } else {
            setIsVisible(!isVisible)
        }
    };
    const handleRemoveBankConfirm = (id) => {
        removeBankAccount(id)
        setIsVisible(!isVisible)
        handleCloseDeleteModal()
    };

    if (isRemoveBankLoading) return <LoadingStrip />

    return (
        <>
            <View className="pt-4 relative">
                {isDefault && <FlashWarningModal />}
                <ImageBackground imageStyle={{ borderRadius: 14 }} source={IMAGES.bank_bg} resizeMode="cover" className="py-8 px-6">
                    <View className="flex flex-row justify-between">
                        <View>
                            <Text className="text-white font-urbanistBold text-base pb-2">
                                {bank_account_name}
                            </Text>
                            <Text className="text-white font-urbanistBold text-base">
                                {formatBankAccountNumber(account_number + "")}
                            </Text>
                        </View>
                        <Image className="w-[100px] h-[32px]" source={{ uri: bank_logo }} />
                    </View>
                    <View className="flex flex-row justify-between pt-6">
                        <View className="flex flex-row items-center gap-2 ">
                            {is_default ? (
                                <>
                                    <Feather name={ICONS.feather_check_circle} size={20} color="#49B949" />
                                    <Text className="text-[#49B949]">Default bank account</Text>
                                </>
                            ) : null
                            }
                        </View>
                        <Pressable
                            onPress={handleOpenDeleteModal}
                            className="self-end"
                        >
                            <SimpleLineIcons name={ICONS.simple_options_vertical} size={24} color="white" />
                        </Pressable>
                    </View>
                </ImageBackground>
            </View>
            <GorhomeBottomSheet ref={bankRef}>
                <View className="px-6 pb-6 bg-[#fafafa]">
                    <View className="border-b border-grey5 pb-5">
                        <Text className="text-[18px] font-urbanistBold text-center ">
                            Bank Account Detail
                        </Text>
                    </View>
                    <View className="flex hover:cursor-pointer items-center py-6">
                        <View className="">
                            <Image className="h-8 w-20" source={{ uri: bank_logo }} />
                        </View>
                        <Text className="text-[13px] text-grey1 pt-2">{bank_name}</Text>
                        <Text className="text-black font-urbanistBold text-base pt-1">
                            {formatBankAccountNumber(account_number + "")}
                        </Text>
                    </View>
                </View>
                <View className="flex flex-col gap-4 mx-4">
                    <Pressable className="">
                        <ButtonModal
                            onPress={() =>
                                handleRemoveBank(bank._id)
                            }
                            type="removeBank"
                        >
                            <Text className="text-black font-urbanistSemiBold">
                                Remove account
                            </Text>
                        </ButtonModal>
                    </Pressable>
                    <Pressable className="">
                        <ButtonModal
                            onPress={() => {
                                setDefault(bank._id),
                                    handleCloseDeleteModal()
                            }}
                            type="setDefaultBank"
                        >
                            <Text className="text-white font-urbanistSemiBold">
                                Set default account
                            </Text>
                        </ButtonModal>
                    </Pressable>
                </View>
            </GorhomeBottomSheet>
            <ConfirmModal
                onCancelPress={() => setIsVisible(!isVisible)}
                onActionPress={() => handleRemoveBankConfirm(bank._id)}
                isVisible={isVisible}
                type="bank"
            />
        </>
    )
}

export default BankAccountCard