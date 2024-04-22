import { get_address_default_by_user } from "../../api/addressApi";
import { IMAGES } from "../../constants/image";
import { withFetchDataWithAuth } from "../../hocs/withFetchDataWithAuth";
import useNavigation from "../../hooks/useNavigation";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Icon2D from "../Icon2D";
import { useCheckout } from "../../context/CheckoutContext";
import { useEffect } from "react";

function DefaultAddressCard({ data }) {

  const { go_to_address_book } = useNavigation();

  const { setOrderShipping } = useCheckout();

  const { account_id, phone, address, province, ward, district } = data || {};
  const { first_name, last_name, email } = account_id || {};

  useEffect(() => {
    if (data) {
      setOrderShipping({
        first_name: first_name,
        email: email,
        last_name: last_name,
        address: address,
        ward: ward,
        district: district,
        province: province,
        phone: phone,
        longitude: 106.75197333979435,
        latitude: 10.786098323202225,
        mobile: true,
      })
    } else {
      setOrderShipping({})
    }

  }, [data])

  return (
    <TouchableOpacity onPress={go_to_address_book}>
      <View className="flex-row justify-between items-center bg-white px-3 py-4 shadow-sm rounded-xl">
        <View className="flex-row items-center">
          <View>
            <Icon2D name="location" size={28} activated="black" />
          </View>
          <View className="ml-2">
            {data ? (
              <View>
                <View className="flex-row items-center mt-1">
                  <Text className="text-sm font-urbanistSemiBold">{`${last_name} ${first_name}`}</Text>
                  <Text className="text-sm font-urbanistSemiBold px-2">|</Text>
                  <Text className="text-sm font-urbanistSemiBold">{phone}</Text>
                </View>
                <Text className="text-gray-500 text-sm font-urbanistRegular">{address}</Text>
                <Text className="text-gray-500 text-sm font-urbanistRegular max-w-[300px]">{`${ward} ${district} ${province}`}</Text>
              </View>
            ) : (
              <Text className="text-sm font-urbanist">
                Please select address
              </Text>
            )}
          </View>
        </View>
        <Image
          style={{ width: 24, height: 24 }}
          source={IMAGES.right_arrow_black}
        />
      </View>
    </TouchableOpacity>
  );
}

export default withFetchDataWithAuth(
  DefaultAddressCard,
  get_address_default_by_user
);
