import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CircularProgressbar} from 'react-circular-progressbar';

export default function ContactDetailsSteps() {
  const percentage = 66;
  return (
    <View style={styles.mainConatiner}>
      <View>
        <Text style={styles.contactDetailsText}>Contact Details</Text>
        <Text style={styles.contactNextsText}>Next : Payment</Text>
      </View>
      <View>
        <Text>1/2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    flexDirection: 'row',
    backgroundColor:'white',
    justifyContent: 'space-between',
    padding: 20.0,
    alignItems: 'center',
    borderBottomColor:'#e0e0e0',
    borderBottomWidth:1
  },
  contactDetailsText: {
    fontWeight: '700',
    color: 'gray',
    fontSize: 15.0,
  },
  contactNextsText: {
    fontWeight: '500',
    color: 'gray',
    fontSize: 12.0,
  },
});
