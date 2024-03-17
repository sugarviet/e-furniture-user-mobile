import React from 'react'
import { View, Image } from 'react-native'

const SHAPES = {
    rounded: {
      borderRadius: 'rounded-full',
    },
    default: {
      borderRadius: 'rounded-sm',
    },
  };
  
  const AVATAR_SIZES = {
    large: "w-10 h-10",
    mega: "w-20 h-20",
    small: "w-48 h-48",
    medium: "w-32 h-32",
    default: "w-72 h-72",
  };

const Avatar = ({ src, size = "default", shape = "default" }) => {
    const sizeStyle = AVATAR_SIZES[size] || AVATAR_SIZES["default"];
    const shapeStyle = SHAPES[shape] || SHAPES["default"];

    const combinedClassName = `object-cover ${sizeStyle} ${shapeStyle.borderRadius}`;

  return (
    <View>
        <Image
        source={{
          uri: src,
        }}
        className={combinedClassName}
      />
    </View>
  )
}

export default Avatar