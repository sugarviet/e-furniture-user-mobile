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

const TYPE = {
  first_name: {
    placeholder: "First name",
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
        // value: /^(?=.*[a-zA-Z])(?=.*\d)(?!\s).{6,}$/,
        value: /^\S*$/,
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
    icon: IMAGES.mail,
    rules: () => ({
      required: "Please enter your email",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Invalid email address",
      },
    }),
  },
  first_name: {
    placeholder: "Việt",
    rules: () => ({
      required: "Please enter your first name! ",
    }),
  },
  last_name: {
    placeholder: "Đăng",
    rules: () => ({
      required: "Please enter your last name! ",
    }),
  },
  phone: {
    placeholder: "0981890262",
    rules: () => ({
      required: "Please enter your phone number! ",
      pattern: {
        value: /^\d{10,11}$/,
        message: "Invalid phone number!",
    },
    }),
  },
  province: {
    placeholder: "Ho Chi Minh",
    editable: false,
    rules: () => ({
    }),
  },
  district: {
    placeholder: "District",
    rules: () => ({
      required: "Please choose your district address!",
    }),
  },
  ward: {
    placeholder: "Ward",
    rules: () => ({
      required: "Please choose your ward address!",
    }),
  },
  address: {
    placeholder: "VD: 123 Lê Đức Thọ, Phường Linh Trung",
    rules: () => ({
      required: "Please enter your detail address (include home number)",
    }),
  },
  phone_edit: {
    placeholder: "0981890262",
    icon: IMAGES.telephone,
    rules: () => ({})
  },
};

function FormInput({ defaultValue, type, control, validated = true }) {
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
            className={classNames(
              "p-2 h-14 bg-gray-100 rounded-md my-2 border-[1px] flex-row items-center",
              error ? "border-rose-500" : "border-transparent"
            )}
          >
            {TYPE[type].icon ? (
              <Icon source={TYPE[type].icon} className="w-5 h-5 mr-2" />
            ) : null}

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
