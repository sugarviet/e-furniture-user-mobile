import React, { useState } from 'react'
import { Pressable, View, Text } from 'react-native';
import Icon2D from '../Icon2D';
const STATUS = {
    defaultText: "text-black",
    defaultPresable: "bg-white",
    activeText: "text-white",
    activePresable: "bg-black",
    activeIcon: 'white',
    defaultIcon: 'black'
  };

const ReviewChip = ({name, value, setActive = () => {}, active}) => {

  return (
    <Pressable
    className={`px-4 py-2 rounded-full border-black border-[2px] ${
      active === value
        ? STATUS.activePresable
        : STATUS.defaultPresable
    }`}
    onPress={() => setActive(value)}
  >
    <View className='flex-row items-center'>
        <Text
        className={`${
            active === value
            ? STATUS.activeText
            : STATUS.defaultText
        } mr-2`}
        >
        {name}
        </Text>
        <Icon2D name='star' activated={`${active === value ? STATUS.activeIcon : STATUS.defaultIcon}`}/>

    </View>
  </Pressable>
  )
}

export default ReviewChip