import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function AppBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.appBarContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" color="black" size={17} />
      </TouchableOpacity>
      <Text style={styles.appBarText}>Add new address</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15.0,
    backgroundColor:'white',
    shadowColor: 'black',
    shadowRadius: 10,
    shadowOpacity: 1,
    elevation:3.0
  },
  appBarText: {
    fontWeight: '700',
    fontSize: 16.0,
    marginHorizontal: 10.0,
  },
});
