import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';
/// just comment
const CreditCards = [
  {name: 'Leanne Graham', cardNumber: '1884 5264 1112', exDate: '02/26'},
  {name: 'Ervin Howell', cardNumber: '2545 8756 5552', exDate: '09/24'},
  {name: 'Clementine Bauch', cardNumber: '2354 7856 3512', exDate: '12/23'},
];

const PaymentMethods = [
  {
    logo: 'https://www.macworld.co.uk/cmsdata/features/3792527/apple_pay_logo_thumb900_1-1.jpg',
    name: 'Apple Pay',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqmTmFkIx7IuKVFp_gQf078Eueri4ksA2-4ZKvfE_htli_5ohff4EQJHjfgo3CpwYoD8g&usqp=CAU',
    name: 'VISA',
  },
  {
    logo: 'data:image/png;base64,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',
    name: 'MasterCard',
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptidUjsuQvdpmHHpj2bYonXiHRE8pAiWQjvYnWznmW4GVe-nmgQnoxwzNNMaLMvut5mo&usqp=CAU',
    name: 'Local Debit',
  },
];

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

function PaymentScreen() {
  const state = useSelector(state => state.Reducer1);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.SafeView}>
      <View style={styles.mainContainer}>
        <View style={styles.appBarContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="cart-plus" size={20} color="black" />
            <View style={styles.cartRedDot}>
              <Text style={styles.dotText}>{state.value}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.paymentFont}>Payment options</Text>

        <View style={styles.SwiperView}>
          <Swiper
            autoplay={true}
            autoplayTimeout={3}
            dot={<View style={styles.dotStyle} />}
            activeDot={<View style={styles.activeDotStyle} />}
            paginationStyle={{
              bottom: 20,
            }}>
            {CreditCards.map(item => {
              return (
                <TouchableOpacity style={styles.creditCardView} key={item['name']}>
                  <Image
                    style={styles.visaImage}
                    source={{
                      uri: 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2006-2014.png',
                    }}
                  />
                  <Text style={styles.cardName}>{item['name']}</Text>
                  <View style={styles.cardNumberView}>
                    <Text style={styles.accountNumberText}>
                      {item['cardNumber']}
                    </Text>
                    <Text style={styles.exDateText}>
                      Expiry Date {item['exDate']}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </Swiper>
        </View>

        <View style={styles.paymentOptionContainer}>
          <Text style={styles.AddPaymentFont}>Add new payment method</Text>
          <ScrollView>
            {PaymentMethods.map(item => {
              return (
                <View key={item['name']}>
                  <TouchableOpacity style={styles.paymentListContainer} onPress={()=>navigation.navigate('OrderPlacedScreen')}>
                    <Image
                      source={{uri: item['logo']}}
                      style={styles.logoStyle}
                    />
                    <Text style={{fontWeight: 'bold'}}>{item['name']}</Text>
                    <Icon name="plus-circle" size={20} color="#e0e0e0" />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity style={styles.confirmContiner} onPress={()=>navigation.navigate('OrderPlacedScreen')}>
        <Text style={styles.confirmFont}>CONFIRM</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default PaymentScreen;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    padding: 15.0,
    width: '100%',
    height: heightScreen * 0.8,
    borderBottomLeftRadius: 15.0,
    borderBottomRightRadius: 15.0,
  },
  SwiperView: {
    width: widthScreen,
    height: heightScreen * 0.35,
  },
  SafeView: {
    backgroundColor: '#2c3e50',
    height: '100%',
    width: '100%',
  },
  appBarContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  cartRedDot: {
    backgroundColor: 'red',
    padding: 2.0,
    borderRadius: 50.0,
    height: 20.0,
    width: 20.0,
    position: 'absolute',
    top: -10.0,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotText: {
    color: 'white',
    fontSize: 10.0,
    fontWeight: 'bold',
  },
  paymentFont: {
    fontSize: 25.0,
    fontWeight: 'bold',
    marginVertical: 10.0,
  },
  creditCardView: {
    backgroundColor: '#D3E0EA',
    height: heightScreen * 0.28,
    width: widthScreen * 0.85,
    margin: 10.0,
    borderRadius: 10.0,
  },
  dotStyle: {
    backgroundColor: 'white',
    width: 30,
    height: 5,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
    borderColor: 'gray',
    borderWidth: 0.5,
  },
  activeDotStyle: {
    backgroundColor: '#2c3e50',
    width: 30,
    height: 5,
    borderRadius: 7,
    marginLeft: 7,
    marginRight: 7,
  },
  visaImage: {
    height: 40,
    width: 80,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  cardName: {
    fontWeight: 'bold',
    fontSize: 20.0,
    color: 'gray',
    margin: 10.0,
    position: 'absolute',
    justifyContent: 'center',
  },
  cardNumberView: {
    flex: 1,
    justifyContent: 'center',
    padding: 10.0,
  },
  accountNumberText: {
    fontSize: 20.0,
    fontWeight: 'bold',
  },
  exDateText: {
    fontStyle: 'italic',
  },
  paymentOptionContainer: {
    borderColor: 'gray',
    borderTopWidth: 1,
    paddingVertical: 15.0,
  },
  AddPaymentFont: {
    fontWeight: '700',
    fontSize: 16.0,
  },
  logoStyle: {
    height: 40.0,
    width: 40.0,
    borderRadius: 50.0,
  },
  paymentListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5.0,
    borderBottomWidth: 0.5,
    borderColor: '#e0e0e0',
    alignItems: 'center',
  },
  confirmContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmFont: {
    fontWeight: 'bold',
    fontSize: 20.0,
    color: 'white',
  },
});
