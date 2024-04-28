import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { get_order_by_state } from '../../../../api/orderHistoryApi'
import EmptyContent from '../../../../components/EmptyContent'
import LoadingStrip from '../../../../components/LoadingStrip'
import OrderProductCard from '../../../../components/OrderProductCard'
import { useFetchWithAuth } from '../../../../hooks/api-hooks'

const Orders = ({ ...props }) => {

    const { data, isLoading } = useFetchWithAuth(get_order_by_state(props.route.name));


    const isEmptyData = !data?.data.length

    if (isLoading) return <LoadingStrip />

    return (
        <View className='bg-[#f5f5f5] flex-1'>
            
            {isEmptyData ?
                <EmptyContent type="order" />
                :
                <ScrollView>
                    {data.data.map((order,index) => (
                        <OrderProductCard key={index} orderData={order} state={props.route.name}/>
                    ))}
                </ScrollView>
            }
        </View>
    )
}

export default Orders