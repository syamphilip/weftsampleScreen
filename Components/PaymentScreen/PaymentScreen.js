import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View ,Text} from 'react-native'



function PaymentScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <Text onPress={()=>navigation.goBack()}>Hello from payment</Text>
        </View>
    )
}

export default PaymentScreen
