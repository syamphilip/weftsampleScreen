import React, { useState ,useEffect} from 'react'
import { View,Text,TextInput,StyleSheet,Picker} from 'react-native'
//import {useSelector} from 'react-redux';
//import store from '../../../../../../Redux/Redux'

export default function Form(props) {

  const [Name, setName] = useState("")
  const [ValidName, setValidName] = useState(false)

  const [Email, setEmail] = useState("")
  const [ValidEmail, setValidEmail] = useState(false)

  const [Phone, setPhone] = useState("")
  const [ValidPhone, setValidPhone] = useState(false)

  const [Address, setAddress] = useState("")
  const [validAddress, setvalidAddress] = useState(false)

  const [City, setCity] = useState("")
  const [validCity, setvalidCity] = useState(false)

  //const state = useSelector(state => state.AddressReducer);
  //console.log(state);

  useEffect(() => {
    props.AddressSetter(Name,Phone,Email,Address,City)
  }, [City])

  const nameValidator=()=>{
    if(Name==""){
      setValidName(true)
    }
    else{
      setValidName(false)
    }
  }

  const emailValidator=()=>{
    if(Email.length==0){
      setValidEmail(true);
    }
    else if(Email.includes("@",".")===true){
      setValidEmail(false);
    }
    else{
      setValidEmail(true)
    }
  }

  const phoneValidator=()=>{
    if(Phone.length==10){
      setValidPhone(false)
    }
    else{
      setValidPhone(true)
    }
  }

  const addressValidator=()=>{
    if(Address==""){
      setvalidAddress(true)
    }
    else{
      setvalidAddress(false)
    }
  }

  const cityValidator=()=>{
    if (City=="") {
      setvalidCity(true)
    } else {
      setvalidCity(false)
    }
  }
    return (
        <View style={styles.mainContainer}>
        {ValidName && <Text style={{color:'red'}}>Enter a valid Name</Text>}
        <TextInput style={styles.textInput} placeholder="Name*" onChangeText={(text)=>setName(text)} onEndEditing={()=>nameValidator()}/>
        {ValidEmail && <Text style={{color:'red'}}>Enter a valid Email</Text>}
        <TextInput style={styles.textInput} placeholder="Email Address*" onChangeText={(text)=>setEmail(text)} onEndEditing={()=>emailValidator()}/>
        {ValidPhone && <Text style={{color:'red'}}>Enter a valid Phone Number</Text>}
        <TextInput style={styles.textInput} placeholder="Phone Number*" keyboardType="numeric" onChangeText={(text)=>setPhone(text)} onEndEditing={()=>phoneValidator()}/>
        {validAddress && <Text style={{color:'red'}}>Enter a valid Address</Text>}
        <TextInput style={styles.textInput} placeholder="Address*" onChangeText={(text)=>setAddress(text)} onEndEditing={()=>addressValidator()}/>
        <View style={styles.pickerInput}>
          <Picker>
            <Picker.Item label="India" value="india" />
            <Picker.Item label="United State" value="USA" />
            <Picker.Item label="U.A.E" value="UAE" />
            <Picker.Item label="China" value="china" />
          </Picker>
        </View>
        {validCity && <Text style={{color:'red'}}>Enter a valid City</Text>}
        <TextInput style={styles.textInput} placeholder="City*" onChangeText={(text)=>setCity(text)} onEndEditing={()=>cityValidator()}/>
        </View>
    )
}

const styles=StyleSheet.create({
    textInput: {
        borderWidth: 0.5,
        borderColor: 'gray',
        width: '100%',
        padding: 8.0,
        marginVertical: 10.0,
      },
      pickerInput: {
        borderWidth: 1,
        borderColor: 'gray',
        opacity: 0.6,
        marginVertical:8.0
      },

      mainContainer:{
      }
})