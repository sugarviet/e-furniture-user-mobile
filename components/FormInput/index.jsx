import { Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import { classNames } from "../../utils/classNames";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { ICONS } from "../../constants/icons";
import ErrorMessage from "../ErrorMessage";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const TYPE = {
  first_name: {
    placeholder: "First name",
    icon: IMAGES.user,
    rules: () => ({
      required: "Please enter the first name",
      pattern: {
        value: /^\S*$/,
        message: "first name must be no whitespace",
      },
    }),
  },
  last_name: {
    placeholder: "Last name",
    icon: IMAGES.user,
    rules: () => ({
      required: "Please enter the last name",
      pattern: {
        value: /^\S*$/,
        message: "Last name must be no whitespace",
      },
    }),
  },
  username: {
    placeholder: "Username",
    icon: IMAGES.user,
    rules: () => ({
      required: "Please enter the username",
      pattern: {
        value: /^\S*$/,
        message: "Username must be no whitespace",
      },
    }),
  },
  password: {
    placeholder: "Password",
    icon: IMAGES.padlock,
    isSecure: true,
    rules: () => ({
      required: "Please enter the password",
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?!\s).{6,}$/,
        message:
          "The password must be at least 6 characters long, including both uppercase and lowercase letters, and numbers, no whitespace",
      },
    }),
  },
  confirmPassword: {
    placeholder: "Confirm Password",
    icon: IMAGES.padlock,
    isSecure: true,
    rules: (validated) => ({
      required: "Bạn chưa nhập lại mật khẩu!",
      validate: () => validated || "Mật khẩu không khớp",
    }),
  },
  email: {
    placeholder: "email@example.com",
    icon: IMAGES.email,
    rules: () => ({
      required: "Please enter your email",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Invalid email address",
      },
    }),
  },
};

function FormInput({ type, control, validated = true }) {
  const [isSecure, setIsSecure] = useState(TYPE[type]?.isSecure);

  return (
    <Controller
      control={control}
      name={type}
      defaultValue={""}
      rules={TYPE[type].rules(validated)}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <View
            className={classNames(
              "p-2 h-12 bg-gray-100 rounded-md my-2 border-[1px] flex-row items-center",
              error ? "border-rose-500" : "border-transparent"
            )}
          >
            <TextInput
              className="flex-1"
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

export default FormInput;
