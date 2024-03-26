import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import React from 'react';
import Orders from './orders';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TAB_ORDER = [
    { name: "pending", title: "Pending" },
    { name: "processing", title: "Processing" },
    { name: "shipping", title: "Shipping" },
    { name: "done", title: "Done" },
    { name: "cancel", title: "Cancelled" },
    { name: "failed", title: "Failed" },
    { name: "refunded", title: "Refund" }
];

const OrderLayout = withLayoutContext(() => {

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: 'black',
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize' },
                tabBarIndicatorStyle: { backgroundColor: 'black' },
                tabBarScrollEnabled: true,
                tabBarItemStyle: {
                    width: 120,
                    height: 50,
                }
            }}

        >
            {TAB_ORDER.map(tab => (
                <Screen
                    key={tab.name}
                    name={tab.name}
                    options={{ title: tab.title }}
                >
                    {props => <Orders {...props} />}
                </Screen>
            ))}
        </Navigator>
    )
}
);

export default OrderLayout;
