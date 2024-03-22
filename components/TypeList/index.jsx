import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import styles from "./style";

const TypeList = ({ types }) => {
  const handlePress = (type) => {
    console.log(`Pressed ${type.name}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.typesContainer}>
        {types.map((type) => (
          <Pressable
            key={type.id}
            onPress={() => handlePress(type)}
            style={styles.typeItem}
          >
            <View style={styles.imageContainer}>
              <Image source={type.image} style={styles.image} />
            </View>
            <Text style={styles.name}>{type.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default TypeList;
