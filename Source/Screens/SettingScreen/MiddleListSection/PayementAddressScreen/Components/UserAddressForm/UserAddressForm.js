import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {useSelector} from 'react-redux';
import Form from './Form';
import store from '../../../../../../Redux/Redux';
import {useNavigation} from '@react-navigation/native';

export default function UserAddressForm() {
  const [Name, setName] = useState(null);
  const [Phone, setPhone] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Address, setAddress] = useState(null);
  const [City, setCity] = useState(null);
  const [ValidForm, setValidForm] = useState(false);
  const [DefaultAddress, setDefaultAddress] = useState(false);

  const navigation = useNavigation();

  const AddressSetter = (Name, Phone, Email, Address, City, ValidForm) => {
    setName(Name);
    setPhone(Phone);
    setEmail(Email);
    setAddress(Address);
    setCity(City);
    setValidForm(ValidForm);
  };

  React.useEffect(() => {}, [ValidForm]);

  const StoreAndNavigate = () => {
    if(Name==="" || Email==="" || Phone==="" || Address==="" || City===""){
      navigation.navigate('PaymentScreen');
    }
    else{
      store.dispatch({
        type: 'ADD_ADDRESS',
        payload: {
          name: Name,
          phone: Phone,
          email: Email,
          address: Address,
          city: City,
        },
      });
      navigation.navigate('PaymentScreen');
    }
  };

  return (
    <ScrollView>
      <View style={styles.mainConatiner}>
        <View style={styles.textContainer}>
          <Text style={styles.contactDetailsText}>Contact Details</Text>
        </View>
        <View style={styles.formContainer}>
          <Form AddressSetter={AddressSetter} />
          <View style={styles.defaultContainer}>
            <DefaultButton />
            <Text style={styles.defaultText}>Make as default address</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => StoreAndNavigate()}>
          <View style={styles.button}>
            <Text style={styles.continueText}>Continue</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const DefaultButton = () => {
  const [isDefaultOn, setisDefaultOn] = useState(false);

  if (isDefaultOn) {
    return (
      <TouchableOpacity onPress={() => setisDefaultOn(!isDefaultOn)}>
        <View style={styles.defaultButtonOn}></View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={() => setisDefaultOn(!isDefaultOn)}>
        <View style={styles.defaultButtonOff}></View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    paddingHorizontal: 20.0,
    paddingVertical: 10.0,
    backgroundColor: 'white',
    height: '100%',
  },

  textContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingVertical: 6.0,
  },
  contactDetailsText: {
    fontWeight: '700',
  },
  formContainer: {
    marginVertical: 20.0,
    justifyContent: 'space-around',
  },

  button: {
    backgroundColor: '#2c3e50',
    padding: 8.0,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5.0,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  continueText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15.0,
  },
  defaultButtonOff: {
    height: 18.0,
    width: 18.0,
    borderRadius: 50.0,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  defaultButtonOn: {
    height: 18.0,
    width: 18.0,
    borderRadius: 50.0,
    backgroundColor: 'blue',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  defaultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  defaultText: {
    fontSize: 13.0,
    fontWeight: '700',
    color: 'gray',
    marginHorizontal: 5,
  },
});
