import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./style";
import { IMAGES } from "../../constants/image";
import InteractiveIcon3D from "../InteractiveIcon3D";
import Icon3D from "../Icon3D";

const TYPE = {
  diamond: {
    title: "Reward",
    primary_icon: "diamond",
    description: "Rất nhiều phần quà đang chờ bạn đổi thưởng!",
    text_button: "100 Xu",
    button_icon: IMAGES.coin_3D,
  },
};

function RewardCard({ type }) {
  const props = TYPE[type];

  const { title, primary_icon, description, text_button, button_icon } = props;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.primary_icon_wrapper}>
        <Icon3D type={primary_icon} />
      </View>
      <View style={styles.content_wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button}>
          <Image style={styles.icon_button} source={button_icon} />
          <Text style={styles.text_button}>{text_button}</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
export default RewardCard;
