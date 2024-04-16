import {
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { get_all_address } from "../../api/addressApi";
import { withFetchDataWithAuth } from "../../hocs/withFetchDataWithAuth";
import useNavigation from "../../hooks/useNavigation";
import AddressCard from "../AddressCard";
import ButtonModal from "../ButtonModal";

const AddressList = ({ data }) => {
  const { go_to_add_new_address } = useNavigation();
  return (
    <View className="relative flex-1">
      <ScrollView className="mb-24">
        {data.map((address) => (
          <View key={address._id} className="pb-6">
            <AddressCard data={address} />
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        className="absolute bottom-0 left-0 right-0 h-[100px] border-t border-t-grey5 px-5 bg-white"
        onPress={() => {
          go_to_add_new_address();
        }}
      >
        <View className="flex justify-center h-full">
          <ButtonModal type="addNewAddress">
            <View className="flex flex-row items-center">
              <Text className="text-white font-urbanistSemiBold">
                Add New Address
              </Text>
            </View>
          </ButtonModal>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default withFetchDataWithAuth(AddressList, get_all_address);
