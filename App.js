import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import Main from './Components/SettingScreen/Main';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PayementAddressScreen from './Components/SettingScreen/MiddleListSection/PayementAddressScreen/PayementAddressScreen';
import { Provider } from 'react-redux';
import store from './Redux/Redux';
import LoginScreen from './LoginScreen/LoginScreen';
import CartScreen from './Components/CartScreen/CartScreen';
import main from './Components/SettingScreen/Main';
import PaymentScreen from './Components/PaymentScreen/PaymentScreen';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen name="SettingsScreen" component={Main} />
      <Stack.Screen
        name="PaymentAddressScreen"
        component={PayementAddressScreen}
      />
      <Stack.Screen name="CartScreen" component={CartScreen}/>
      <Stack.Screen name="PaymentScreen" component={PaymentScreen}/>
    </Stack.Navigator>
    </NavigationContainer>
   </Provider>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={LoginScreen}
          options={{
            tabBarIcon: () => <Icon name="home" size={20.0} color="gray" />,
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="user" size={20.0} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="Histor"
          component={LoginScreen}
          options={{
            tabBarIcon: () => <Icon name="history" size={20.0} color="gray" />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={main}
          options={{
            tabBarIcon: () => <Icon name="cogs" size={20.0} color="gray" />,
          }}
        />
      </Tab.Navigator>
    
  );
};

export default App;


