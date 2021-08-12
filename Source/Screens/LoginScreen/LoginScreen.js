import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useSelector} from 'react-redux';
import toggleLogin from '../../Redux/actionCreator';
import store from '../../Redux/Redux';

import HomeScreen from '../HomeScreen/HomeScreen';
import CartScreen from '../CartScreen/CartScreen';

const windowHeight = Dimensions.get('window').height;

export default function LoginScreen({}) {
  const [userName, setuserName] = useState(null);
  const [password, setpassword] = useState(null);

  const StoreUserName = useSelector(state => state.Reducer1.userName);
  const StorePassword = useSelector(state => state.Reducer1.password);

  if (useSelector(state => state.Reducer1.isLoggedIn)) {
    return <HomeScreen/>;
  } else
    return (
      <View style={styles.mainConatiner}>
        <View>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={styles.formMainContainer}>
          <View style={styles.textInputContainer}>
            <Icon
              name="user"
              size={22.0}
              color="#2c3e50"
              style={{marginRight: 10.0}}
            />
            <TextInput
              placeholder="User Name"
              style={styles.textInputStyle}
              placeholderTextColor="#2c3e50"
              onChangeText={text => {
                setuserName(text);
              }}
            />
          </View>
          <View style={styles.textInputContainer}>
            <Icon
              name="key"
              size={22.0}
              color="#2c3e50"
              style={{marginRight: 10.0}}
            />
            <TextInput
              placeholder="Password"
              style={styles.textInputStyle}
              placeholderTextColor="#2c3e50"
              secureTextEntry
              onChangeText={text => {
                setpassword(text);
              }}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonConatiner}
          onPress={() => {
            if (StoreUserName==userName && StorePassword==password) {
                store.dispatch(toggleLogin())
            } else {
                 console.log('error');
            };
          }}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
  formMainContainer: {
    justifyContent: 'space-evenly',
    height: windowHeight * 0.2,
    width: '100%',
    marginTop: 30.0,
  },
  mainConatiner: {
    padding: 20.0,
  },
  loginText: {
    marginTop: 20.0,
    fontSize: 30.0,
    color: '#2c3e50',
    fontWeight: 'bold',
  },
  textInputContainer: {
    backgroundColor: '#e2e2e2',
    borderRadius: 5.0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20.0,
  },
  textInputStyle: {
    fontWeight: 'bold',
    width: '100%',
  },
  buttonConatiner: {
    backgroundColor: '#2c3e50',
    borderRadius: 5.0,
    width: '30%',
    padding: 10.0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18.0,
  },
});
