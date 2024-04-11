import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import React from 'react';
import Orders from '.';
import TopTabNavigator from '../../../../components/TopTabNavigator';


const TAB_ORDER = [
    { title: "pending", name: "Pending" },
    { title: "processing", name: "Processing" },
    { title: "shipping", name: "Shipping" },
    { title: "done", name: "Done" },
    { title: "cancel", name: "Cancelled" },
    { title: "refunded", name: "Refund" }
];

const OrderLayout = () => {

    return (
        <TopTabNavigator TABS={TAB_ORDER} Component={Orders} type="order" isOpen={true}/>
    )
}

export default OrderLayout;
