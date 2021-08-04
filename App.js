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

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="home" size={20.0} color="gray" />,
          }}
        />
        <Tab.Screen
          name="StatsticTab"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Icon name="chart-pie" size={20.0} color="gray" />
            ),
          }}
        />
        <Tab.Screen
          name="HistorTab"
          component={HomeScreen}
          options={{
            tabBarIcon: () => <Icon name="history" size={20.0} color="gray" />,
          }}
        />
        <Tab.Screen
          name="SettingsTab"
          component={StackNavigator}
          options={{
            tabBarIcon: () => <Icon name="cogs" size={20.0} color="gray" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SettingsScreen" component={Main} />
      <Stack.Screen
        name="PaymentAddressScreen"
        component={PayementAddressScreen}
      />
    </Stack.Navigator>
  );
};

export default App;
