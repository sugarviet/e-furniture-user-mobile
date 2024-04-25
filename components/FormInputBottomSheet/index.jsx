import { Text, TextInput, View, Image } from "react-native";
import { Controller } from "react-hook-form";
import { classNames } from "../../utils/classNames";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { ICONS } from "../../constants/icons";
import ErrorMessage from "../ErrorMessage";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { SIZES } from "../../constants";
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
const TYPE = {
  content: {
    placeholder: "Please enter your review ...",
    rules: () => ({
      required: "Please enter the review",
    }),
  },
  

};

function FormInputBottomSheet({ defaultValue, type, control, validated = true }) {
  const [isSecure, setIsSecure] = useState(TYPE[type]?.isSecure);

  return (
    <Controller
      control={control}
      name={type}
      defaultValue={defaultValue}
      rules={TYPE[type].rules(validated)}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <View
           
          >
            {TYPE[type].icon ? (
              <Icon source={TYPE[type].icon} className="w-5 h-5 mr-2" />
            ) : null}

            <BottomSheetTextInput
              style={{
                borderRadius: 10,
                fontSize: 16,
                lineHeight: 20,
                padding: 10,
                height: 70,
                backgroundColor: 'rgba(151, 151, 151, 0.15)',
              }}
              placeholder={TYPE[type].placeholder}
              value={value}
              secureTextEntry={isSecure}
              editable={TYPE[type].editable}
              onChangeText={onChange}
              onBlur={onBlur}
            />
            {TYPE[type]?.isSecure && (
              <Ionicons
                style={{ marginRight: 2 }}
                name={
                  isSecure ? ICONS.ionIcon_eye_close : ICONS.ionIcon_eye_open
                }
                size={20}
                onPress={() => setIsSecure(!isSecure)}
              />
            )}
          </View>
          {error && <ErrorMessage message={error.message} />}
        </View>
      )}
    />
  );
}

export default FormInputBottomSheet;
