import React from 'react'
import { View, Text } from 'react-native'
import Avatar from '../Avatar'
import ReviewChip from '../ReviewChip'
import { COLORS } from '../../constants'
import CenteredDivider from '../CenteredDivider'
import calcTimeFrom from '../../utils/calcTimeFrom'

const ReviewCard = ({ data }) => {
    return (
        <View className='px-2 mt-1'>
            <View className='flex-row w-full'>
                <View className='flex-row items-center justify-between w-full '>
                    <View className='flex-row items-center'>
                       
                        <Text className='font-bold ml-3 text-lg'>{data.account_id.first_name} {data.account_id.last_name}</Text>

                    </View>

                    <ReviewChip name={data.rating} value={data.rating} />
                </View>


            </View>
            <View className='px-2 mt-1 h-12 max-h-24'>
                <Text ellipsizeMode='tail' numberOfLines={5}>{data.content}</Text>
            </View>
            <View className='px-2 my-1'>
                <Text>{calcTimeFrom(data.updatedAt)}</Text>
            </View>
            <CenteredDivider color={COLORS.lightGray} thickness={0.5} />

        </View>
    )
}

export default ReviewCard