import { useEffect, useState } from "react";
import { get_banks_api } from "../../api/bankApi";
import LoadingSpinner from "../LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import BankSearchInput from "../BankSearchInput";
import useNavigation from "../../hooks/useNavigation";

function BankList() {

  const { go_to_bank_form } = useNavigation()

  const { data, isLoading } = useQuery([get_banks_api()], () =>
    axios
      .get(get_banks_api())
      .then((response) => response.data)
      .then((data) => data.data)
  );

  const handleSelect = (bank) => {
    go_to_bank_form(bank)
  };

  const [banks, setBanks] = useState([]);

  const handleSearchChange = (value) => {

    const banksClone = [...data];

    const filteredBank = banksClone.filter((bank) =>
      bank.shortName.toLowerCase().includes(value.toLowerCase())
    );
    setBanks(filteredBank);
  };

  useEffect(() => {
    if (data) {
      setBanks(data);
    }
  }, [data]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <ScrollView className="w-full h-full bg-white">
      <View className="px-4 pt-2">
        <BankSearchInput onChange={handleSearchChange} />
      </View>
      <View className="flex flex-row flex-wrap">
        {banks.map((bank) => {
          const { id, logo, shortName } = bank;
          return (
            <Pressable
              onPress={() => handleSelect(bank)}
              className="basis-1/4"
              key={id}
            >
              <View className="flex hover:cursor-pointer items-center py-6">
                <View className="">
                  <Image className="h-8 w-20" source={{ uri: logo }} />
                </View>
                <Text className="text-[12px] text-grey1 pt-2 max-w-[80px]">{shortName}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </ScrollView>
  );
}

export default BankList;
