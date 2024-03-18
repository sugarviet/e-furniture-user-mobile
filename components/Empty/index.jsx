import React from 'react'
import { View, Text } from 'react-native'
import LottieView from "lottie-react-native";
import { ANIMATIONS } from '../../constants/animations';
export default function Empty() {
    return (
        <View style={{ display: 'flex', alignItems: 'center', paddingHorizontal: 50 }}>
            <View style={{marginTop:20,}}>
                <LottieView
                    source={ANIMATIONS.empty_cart}
                    style={{
                        width: '70%',
                    }}
                    resizeMode="contain"
                    loop={true}
                    autoPlay
                />
            </View>
            <Text style={{ fontSize: 20, marginTop: 20 }}>Giỏ hàng của bạn đang trống</Text>
            <Text style={{ textAlign: 'center', marginTop: 10 }}>Có vẻ như bạn chưa thêm bất cứ sản phẩm nào vào giỏ hàng của mình</Text>
        </View>
    )
}
