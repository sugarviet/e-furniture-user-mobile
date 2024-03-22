import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { withLayoutContext } from 'expo-router'

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext(Navigator);
const OrderLayout = () => {
    return (
        <MaterialTopTabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize' }, tabBarIndicatorStyle: {backgroundColor: 'black'} }}>
            <MaterialTopTabs.Screen name="active" options={{ title: 'Active' }} />
            <MaterialTopTabs.Screen name="completed" options={{ title: 'Completed' }} />


        </MaterialTopTabs>
    )
}

export default OrderLayout