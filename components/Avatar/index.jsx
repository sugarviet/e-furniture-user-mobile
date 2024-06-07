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
    superMega: "w-32 h-32",
    large: "w-48 h-48",
    mega: "w-20 h-20",
    small: "w-14 h-14",
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