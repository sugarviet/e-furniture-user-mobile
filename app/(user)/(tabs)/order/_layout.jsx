import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { withLayoutContext } from 'expo-router'

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);
const OrderLayout = () => {
    return (
        <MaterialTopTabs
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize' },
                tabBarIndicatorStyle: { backgroundColor: 'black' },
                tabBarScrollEnabled: true,
                tabBarItemStyle: {
                    width: 120,
                  }
            }}
        >
            <MaterialTopTabs.Screen name="pending" options={{ title: 'Active' }} />
            <MaterialTopTabs.Screen name="processing" options={{ title: 'Processing' }} />
            <MaterialTopTabs.Screen name="shipping" options={{ title: 'Shipping' }} />
            <MaterialTopTabs.Screen name="completed" options={{ title: 'Completed' }} />
            <MaterialTopTabs.Screen name="cancelled" options={{ title: 'Cancelled' }} />
            <MaterialTopTabs.Screen name="failed" options={{ title: 'Failed' }} />
            <MaterialTopTabs.Screen name="refund" options={{ title: 'Refund' }} />

        </MaterialTopTabs>
    )
}

export default OrderLayout