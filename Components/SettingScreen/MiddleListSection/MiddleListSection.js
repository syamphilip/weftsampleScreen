import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SettingsList = [
  {
    icon: <Icon name="toolbox" size={20} style={{color: 'black'}} />,
    name: 'Account Settings',
    label: '',
  },
  {
    icon: <Icon name="globe" size={20} style={{color: 'black'}} />,
    name: 'Language',
    label: 'English',
  },
  {
    icon: <Icon name="user-plus" size={18} style={{color: 'black'}} />,
    name: 'Invite Friends',
    label: '',
  },
  {
    icon: <Icon name="phone-alt" size={20} style={{color: 'black'}} />,
    name: 'Support',
    label: '',
  },
  {
    icon: <Icon name="shield-alt" size={20} style={{color: 'black'}} />,
    name: 'Privacy & Security',
    label: '',
  },
];



export default function MiddleListSection() {
  const navigation=useNavigation();
  return (
    <View style={styles.mainContainer}>
      {SettingsList.map(item => (
          <TouchableOpacity key={item['name']} onPress={()=>navigation.navigate("PaymentAddressScreen")}>
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
