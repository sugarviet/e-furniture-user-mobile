import { useState } from "react";
import { Text, TextInput, View } from "react-native";

const BANK_INPUT_TYPE = {
  account_number: {
    label: "Account number",
    input_mode: "numeric",
    placeholder: "Enter your account number",
  },
  account_name: {
    label: "Account name",
    input_mode: "text",
    placeholder: "Your account name",
    editable: false,
  },
};

function BankInput({ type, onBlur, onChange, onFocus, value, className }) {
  const { label, input_mode, placeholder, editable } = BANK_INPUT_TYPE[type];

  const [isFocus, setIsFocus] = useState(false);

  return (
    <View className="flex flex-col">
      <Text className="text-base font-semibold mb-2">{label}</Text>
      <TextInput
        onFocus={() => {
          setIsFocus(true)
          onFocus();
        }}
        editable={editable}
        inputMode={input_mode}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        onBlur={() => {
          setIsFocus(false);
          onBlur();
        }}
        className={`font-urbanistMedium pl-3 pr-10 outline-none border-[0.5px] ${isFocus || value ? "border-[#black]" : "border-grey4"
          } ${className}`}
      />
    </View>
  );
}

export default BankInput;
