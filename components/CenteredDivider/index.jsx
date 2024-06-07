import React from 'react'
import { View } from 'react-native'

const CenteredDivider = ({ color= 'black', thickness = 1, width='90%'}) => {
    return (
        <View
            style={{
                borderBottomColor: color,
                borderBottomWidth: thickness,
                width: width,
                borderRadius: 2,
                marginHorizontal: 'auto',
                alignSelf: 'center',
                marginTop: 2,
                marginBottom: 6,
            }}
        />
    )
}

export default CenteredDivider