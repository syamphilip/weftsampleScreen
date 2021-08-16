import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IoniIcon from 'react-native-vector-icons/Ionicons';

import toggleLogin from '../../../Redux/actionCreator';
import store from '../../../Redux/Redux';




export default function MiddleListSection() {
  const navigation=useNavigation();

  const SettingsList = [
    {
      icon: <Icon name="toolbox" size={20} style={{color: 'black'}} />,
      name: 'Address Settings',
      label: '',
      goto:()=>navigation.navigate("PaymentAddressScreen")
    },
    {
      icon: <Icon name="globe" size={20} style={{color: 'black'}} />,
      name: 'Language',
      label: 'English',
      goto:()=>navigation.navigate("PaymentAddressScreen")
    },
    {
      icon: <Icon name="clipboard-check" size={18} style={{color: 'black'}} />,
      name: 'Todo',
      label: '',
      goto:()=>navigation.navigate("TodoScreen")
    },
    {
      icon: <IoniIcon name="cart" size={20} style={{color: 'black'}} />,
      name: 'Your Orders',
      label: '',
      goto:()=>navigation.navigate("OrdersScreen")
    },
    {
      icon: <Icon name="shield-alt" size={20} style={{color: 'black'}} />,
      name: 'Privacy & Security',
      label: '',
      goto:()=>navigation.navigate("PaymentAddressScreen")
    },
    {
      icon: <Icon name="sign-out-alt" size={20} style={{color: 'black'}} />,
      name: 'Log out',
      label: '',
      goto:()=>store.dispatch(toggleLogin())
    },
  ];

  return (
    <View style={styles.mainContainer}>
      {SettingsList.map(item => (
          <TouchableOpacity key={item['name']} onPress={item['goto']}>
            <View style={styles.listTiles} >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.iconBackground}>{item['icon']}</View>
              <View>
                <Text style={styles.listText}>{item['name']}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{marginHorizontal: 10.0, fontSize: 13.0}}>
                {item['label']}
              </Text>
              <Icon name="angle-right" size={20} style={{color: 'gray'}} />
            </View>
          </View>
          </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 2,
    backgroundColor: 'white',
    borderTopLeftRadius: 30.0,
    borderTopRightRadius: 30.0,
    padding: 20.0,
  },
  listTiles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 15.0,
    borderBottomColor: '#e0e0e0',
  },
  iconBackground: {
    backgroundColor: 'gray',
    width: 40.0,
    height: 40.0,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4,
    borderRadius: 50.0,
  },
  listText: {
    marginHorizontal: 10.0,
    fontWeight: '600',
    fontSize: 15.0,
  },
});
