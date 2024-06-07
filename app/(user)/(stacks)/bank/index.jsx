import { Stack } from "expo-router";
import { View } from 'react-native';
import BankAccount from '../../../../components/BankAccount';
import HeaderButton from "../../../../components/HeaderButton";
const Bank = () => {
  return (
    <View >
      <Stack.Screen
        options={{
          title: "Bank account",
          headerLeft: () => <HeaderButton type={"back"} />,
        }}
      />
      <BankAccount />
    </View>
  )
}

export default Bank