import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Picker,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Form from './Form';

export default function UserAddressForm() {
  return (
    <ScrollView>
      <View style={styles.mainConatiner}>
      <View style={styles.textContainer}>
        <Text style={styles.contactDetailsText}>Contact Details</Text>
      </View>
      <View style={styles.formContainer}>
        <Form />
        <View style={styles.defaultContainer}>
          <DefaultButton />
          <Text style={styles.defaultText}>Make as default address</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.continueText}>Continue</Text>
        </View>
      </View>
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
    marginVertical: 30.0,
    justifyContent: 'space-between',
  },
  
  button: {
    backgroundColor: 'blue',
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
    marginVertical:10.0
  },
  defaultText: {
    fontSize: 13.0,
    fontWeight: '700',
    color: 'gray',
    marginHorizontal: 5,
  },
});
