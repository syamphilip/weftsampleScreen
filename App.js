import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Components/Main';
import HomeScreen from './Components/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:()=>(<Icon name="home" size={20.0} color="gray"/>)}}/>
        <Tab.Screen name="Statstic" component={HomeScreen} options={{tabBarIcon:()=>(<Icon name="chart-pie" size={20.0} color="gray"/>)}}/>
        <Tab.Screen name="History" component={HomeScreen} options={{tabBarIcon:()=>(<Icon name="history" size={20.0} color="gray"/>)}}/>
        <Tab.Screen name="Settings" component={Main} options={{tabBarIcon:()=>(<Icon name="cogs" size={20.0} color="gray" />)}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
