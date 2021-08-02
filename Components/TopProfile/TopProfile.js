import React from 'react';
import {View, Text, StyleSheet, Dimensions,Image} from 'react-native';

const width = Dimensions.get('window').width;

export default function TopProfile() {
  return (
    <View style={styles.mainConatiner}>
      <View>
        <Text style={styles.topSettingText}>Settings</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.UserDetailsWhiteContainer}>
           <View style={styles.imageContiner}>
               <Image source={{uri:"https://images.pexels.com/photos/6437888/pexels-photo-6437888.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}} style={styles.imageConfig}/>
           </View>
           <View style={styles.userDetails}>
               <Text style={styles.userName}>
                   Cameron Williamson
               </Text>
               <Text style={styles.userMail}>
                   democameron21@gmail.com
               </Text>
           </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
  },

  topSettingText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20.0,
    margin: 20.0,
  },

  UserDetailsWhiteContainer: {
    marginHorizontal: 20.0,
    width: width * 0.9,
    backgroundColor: 'white',
    height: 120.0,
    borderRadius: 20.0,

  },

  imageContiner:{
      borderRadius:20.0,
      flexDirection:'row',
      justifyContent:'center',
      padding:10.0
  },

  imageConfig:{
    width:80.0,
    height:80.0,
    borderRadius:100.0,
    position:'absolute',
    top:-35,
  },
  userDetails:{
    justifyContent:'center',
    flex:1,
    alignItems:'center',
  },
  userName:{
    fontWeight:'bold',
    fontSize:15.0,
    color:'gray',
    marginTop:10.0
  },
  userMail:{
    fontWeight:'700',
    fontSize:12.0,
    opacity:0.8,
    margin:2.0
  }
});
