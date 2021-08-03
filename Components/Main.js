import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MiddleListSection from './SettingScreen/MiddleListSection/MiddleListSection'
import TopProfile from './SettingScreen/TopProfile/TopProfile';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function main() {
    return (
        <View style={styles.mainContainer}>
          <TopProfile/>
          <MiddleListSection/>
        </View>
      )
}

const styles=StyleSheet.create({
    mainContainer:{
      backgroundColor:"blue",
      width:width,
      height:height,
    }
  })