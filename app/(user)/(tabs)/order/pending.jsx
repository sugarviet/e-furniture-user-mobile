import React from 'react'
import { View } from 'react-native'
import EmptyContent from '../../../../components/EmptyContent'
const Pending = () => {
  return (
    <View className='bg-white flex-1'>   
        <EmptyContent type='order'/>
    </View>
  )
}

export default Pending