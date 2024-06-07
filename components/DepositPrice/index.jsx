import { Text, View } from 'react-native';
import { formatCurrency } from '../../utils/formatCurrency';

function DepositPrice({ order,className }) {
    const isDepositPaid = order.order_checkout.paid.paid_amount > 0;
    const depositPrice = order.order_checkout.paid.must_paid
    return (
        <>
            <View className="flex flex-row justify-between items-center flex-wrap">
                <Text className={`${className}`}>Deposit </Text>
                <Text className={`${className}`}>
                    {formatCurrency(depositPrice)}
                </Text>
            </View>
            <View className="flex items-end text-sm tracking-[0.5px] leading-[23.3px]">
                {isDepositPaid ?
                    <Text className='text-grey1 pb-4'>
                        (Deposit has been paid)
                    </Text>
                    :
                    <Text className='text-grey1 pb-4'>
                        (Deposit has been not paid)
                    </Text>
                }

            </View>
        </>
    )
}

export default DepositPrice