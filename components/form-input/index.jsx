import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Controller } from "react-hook-form";

const INPUT_TYPE = {
  password: {
    isSecure: true,
    rules: (validated) => ({
      required: "Bạn chưa nhập mật khẩu!",
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?!\s).{6,}$/,
        message:
          "Mật khẩu phải có ít nhất 6 ký tự. Gồm cả chữ thường, chữ hoa và số, không chứa khoảng trắng",
      },
      validate: () => validated || "Mật khẩu không khớp",
    }),
  },
  confirmPassword: {
    isSecure: true,
    rules: (validated) => ({
      required: "Bạn chưa nhập lại mật khẩu!",
      validate: () => validated || "Mật khẩu không khớp",
    }),
  },
  email: {
    rules: () => ({
      required: "Bạn chưa nhập email!",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Email không hợp lệ",
      },
    }),
  },
  default: {
    rules: () => ({}),
  },
};

const FormInput = ({
  control,
  type = "default",
  name,
  placeholder,
  errorMessage,
  required = false,
  validated = true,
  ...others
}) => {
  const [isSecure, setIsSecure] = React.useState(INPUT_TYPE[type]?.isSecure);

  return (
    <Controller
      name={name}
      control={control}
      rules={INPUT_TYPE[type].rules(validated)}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View style={styles.container}>
          <TextInput
            secureTextEntry={isSecure}
            style={styles.input}
            placeholder={placeholder}
            onChangeText={(text) => {
              onChange(text);
              if (validated) onBlur();
            }}
            onBlur={onBlur}
            value={value}
            {...others}
          />
          {error && (
            <Text style={styles.error}>{errorMessage || error.message}</Text>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    width: "100%",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    padding: 10,
  },
  error: {
    color: "red",
  },
});

export default FormInput;
