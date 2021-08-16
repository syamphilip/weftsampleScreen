import 'react-native-gesture-handler';
import React from 'react';
import { Text,View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import LoginScreen from '../Screens/LoginScreen/LoginScreen';
import Main from '../Screens/SettingScreen/Main';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import PayementAddressScreen from '../Screens/SettingScreen/MiddleListSection/PayementAddressScreen/PayementAddressScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';
import PaymentScreen from '../Screens/PaymentScreen/PaymentScreen';
import { useSelector } from 'react-redux';
import TodoScreen from '../Screens/TodoScreen/TodoScreen';
import OrderPlacedScreen from '../Screens/OrderPlacedScreen/OrderPlacedScreen';
import OrdersScreen from '../Screens/OrdersScreen/OrdersScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer= createDrawerNavigator();




const BottomStack = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
         <Tab.Screen
        name="HomeScreen"
        component={DrawerStack}
        options={{
          tabBarIcon: () => <Icon name="user" size={20.0} color="gray" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Main}
        options={{
          tabBarIcon: () => <Icon name="cogs" size={20.0} color="gray" />,
        }}
      />
    </Tab.Navigator>

);
};

const DrawerStack=()=>{
  return(
    <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Settings" component={Main}/>
    </Drawer.Navigator>
  )
}


function AppStack() {
  const state = useSelector(state => state.Reducer1)
  return <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!state.isLoggedIn?
      <Stack.Screen name="LoginScreen" component={LoginScreen} />:
      <>
      <Stack.Screen name="HOME" component={BottomStack} />
      <Stack.Screen name="PaymentAddressScreen" component={PayementAddressScreen}/>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="TodoScreen" component={TodoScreen} />
      <Stack.Screen name="OrderPlacedScreen" component={OrderPlacedScreen} />
      <Stack.Screen name="OrdersScreen" component={OrdersScreen} />
      </>}
    </Stack.Navigator>
  </NavigationContainer>
}

export default AppStack;
