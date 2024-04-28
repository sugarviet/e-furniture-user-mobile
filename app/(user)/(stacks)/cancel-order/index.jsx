import React from 'react'
import CancelOrderForm from '../../../../components/CancelOrderForm'
import { View } from 'react-native'
import { Stack } from 'expo-router'

function CancelOrder() {
    return (
        <View className="flex-1">
            <Stack.Screen options={{ title: 'Cancel Order' }}/>
            <CancelOrderForm />
        </View>
    )
}

export default CancelOrder