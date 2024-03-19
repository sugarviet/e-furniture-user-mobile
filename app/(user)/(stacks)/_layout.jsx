import React from "react";
import { Stack } from "expo-router";
import HeaderButton from "../../../components/HeaderButton";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        title: "",
        headerLeft: () => <HeaderButton type={"back"} />,
      }}
    />
  );
}
