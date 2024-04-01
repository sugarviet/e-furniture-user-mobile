import React from 'react'
import { View } from 'react-native';
import { Controller } from 'react-hook-form'
import { AirbnbRating } from 'react-native-ratings';
import ErrorMessage from '../ErrorMessage';

const TYPE = {
    rating: {
        placeholder: "Please enter your rating ...",
        rules: () => ({
            required: "Please enter the rating",
            pattern: {
                value: /^\S*$/,
                message: "Rating must be no whitespace",
            },
        }),
    },


};
const FormRating = ({ defaultValue, type, control, validated = true, size = 40, count = 5 }) => {
    return (
        <Controller
            control={control}
            name={type}
            defaultValue={defaultValue}
            rules={TYPE[type].rules(validated)}
            render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
            }) => (
                <View>
                    <AirbnbRating
                        onFinishRating={onChange}
                        defaultRating={defaultValue}
                        size={size}
                        count={count}
                        reviews={[]}
                        selectedColor={'black'}

                        ratingContainerStyle={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        starContainerStyle={{ flexDirection: 'row', gap: 20 }}
                    />
                    {error && <ErrorMessage message={error.message} />}
                </View>
            )}
        />
    )
}

export default FormRating