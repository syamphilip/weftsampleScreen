import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MiddleListSection from './MiddleListSection/MiddleListSection'
import TopProfile from './TopProfile/TopProfile';

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
      backgroundColor:"#2c3e50",
      width:width,
      height:height,
    }
  })