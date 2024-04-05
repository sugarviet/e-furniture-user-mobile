import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const TYPES = {
    order: {
        title: 'black',
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize' },
        tabBarIndicatorStyle: { backgroundColor: 'black' },
        tabBarItemStyle: {
            width: 120,
            height: 50,
        },
        tabBarStyle: "",
        status: false,
    },
    flash_sale: {
        title: 'white',
        tabBarActiveTintColor: 'white',
        tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold', textTransform: 'capitalize' },
        tabBarIndicatorStyle: { backgroundColor: '#ffe503' },
        tabBarItemStyle: {
            width: 100,
            height: 50,
        },
        tabBarStyle: { backgroundColor: 'transparent' },
        status: true,
    },

};

const TopTabNavigator = ({ TABS, Component, type }) => {

    const {
        tabBarActiveTintColor,
        tabBarLabelStyle,
        tabBarIndicatorStyle,
        tabBarItemStyle,
        tabBarStyle,
        title,
        status
    } = TYPES[type]


    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: tabBarActiveTintColor,
                tabBarLabelStyle: tabBarLabelStyle,
                tabBarIndicatorStyle: tabBarIndicatorStyle,
                tabBarScrollEnabled: true,
                tabBarItemStyle: tabBarItemStyle,
                tabBarStyle: tabBarStyle,
            }}

        >
            {TABS.map(tab => (
                <Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: () => (
                            <View >
                                <Text style={{ color: title }} className="text-center text-[18px] font-urbanistBold">{tab.name}</Text>
                                {status &&
                                    <Text className="text-white text-center text-[12px] font-urbanistLight">{tab.status}</Text>
                                }
                            </View>
                        )
                    }}
                >
                    {props => <Component {...props} />}
                </Screen>
            ))}
        </Navigator>
    )
}


export default TopTabNavigator;
