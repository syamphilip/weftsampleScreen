import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AppBar from './Components/AppBar/AppBar';
import ContactDetailsSteps from './Components/ContactDetailsSteps/ContactDetailsSteps';
import UserAddressForm from './Components/UserAddressForm/UserAddressForm';

export default function PayementAddressScreen() {
  return(<View style={{flex:1}}>
    <AppBar/>
    <ContactDetailsSteps/>
    <UserAddressForm/>
  </View>)
  ;
}
