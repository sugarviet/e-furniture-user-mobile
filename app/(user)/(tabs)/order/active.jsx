import React from 'react'
import { View } from 'react-native'
import EmptyContent from '../../../../components/EmptyContent'
import LoadingSpinner from '../../../../components/LoadingSpinner'

const Active = () => {
  return (
    <View className='bg-white flex-1'>
        {/* <EmptyContent type='order'/>
         */}
         <LoadingSpinner />
    </View>
  )
}

export default Active