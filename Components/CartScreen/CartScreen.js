import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

function CartScreen({route}) {
  const naviagtion = useNavigation();

  const [Item, setItem] = useState(route.params.text);

  useEffect(() => {
    console.log(route.params.text);
  }, []);

  const handleDeleteItem = qty => {
    //setItem({...Item, qty: qty});
  };

  return (
    <SafeAreaView style={styles.container}>
        <View
          style={{
            width: widthScreen,
            height: heightScreen * 0.8,
            padding: 15.0,
            borderBottomLeftRadius: 15.0,
            borderBottomRightRadius: 15.0,
            backgroundColor: 'white',
          }}>
          <View style={styles.appBarContainer}>
            <TouchableOpacity onPress={() => naviagtion.navigate('HomeScreen')}>
              <Icon name="arrow-left" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="cart-plus" size={20} color="black" />
              <View style={styles.cartRedDot}>
                {Item[0] ? (
                  <Text style={styles.dotText}>{Item[0].qty}</Text>
                ) : (
                  <Text></Text>
                )}
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.myCartContainer}>
            <Text style={styles.myCartText}>My Cart</Text>
            <Text style={styles.itemText}>{Item.length} items</Text>
          </View>

          <View style={styles.itemContainer}>
            <View>
              {Item[0] ? (
                <Image
                  source={{
                    uri: Item[0].image,
                  }}
                  style={styles.imageStyle}
                />
              ) : null}
            </View>

            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{Item[0].name}</Text>
              <Text style={styles.priceText}>${Item[0].price}</Text>
              <View>
                <Text style={styles.otherText}>Size : {Item[0].size}</Text>
                <Text style={styles.otherText}>Quantity : {Item[0].qty}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.crossButton}
              onPress={() => handleDeleteItem(0)}>
              <Text style={{fontWeight: 'bold'}}>X</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.deliveryContent}>
            <Text style={styles.deliveryText}>
              Delivery : All orders of $50 or more qualify for FREE delivery
            </Text>
          </View>

          <View style={styles.totalPriceContainer}>
            <Text style={styles.totalText}>Total :</Text>
            <Text style={styles.totalPriceText}>
              ${Item[0].price * Item[0].qty}
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.checkOutButton}
          onPress={() => {
            naviagtion.navigate('PaymentAddressScreen');
          }}>
          <Text style={styles.checkOutText}>CHECKOUT</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    flex: 1,
    width: widthScreen,
  },
  appBarContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
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
  myCartContainer: {
    marginTop: 30.0,
  },
  myCartText: {
    fontWeight: 'bold',
    fontSize: 25.0,
  },
  itemText: {
    fontWeight: '600',
    fontSize: 18.0,
  },
  itemContainer: {
    marginVertical: 20.0,
    flexDirection: 'row',
  },
  imageStyle: {
    height: heightScreen * 0.25,
    width: widthScreen * 0.35,
    resizeMode: 'cover',
    borderRadius: 10.0,
  },
  itemDetails: {
    margin: 20.0,
    justifyContent: 'space-between',
    flex: 1,
  },
  itemName: {
    fontSize: 20.0,
    fontWeight: 'bold',
  },
  priceText: {
    fontWeight: '700',
  },
  crossButton: {
    backgroundColor: '#f2f2f2',
    height: 20.0,
    width: 20.0,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30.0,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  checkOutButton: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen,
  },
  checkOutText: {
    fontWeight: 'bold',
    fontSize: 20.0,
    color: 'white',
  },
  deliveryContent: {
    borderColor: '#e0e0e0',
    paddingVertical: 10.0,
    borderTopWidth: 0.5,
  },
  deliveryText: {
    fontWeight: 'bold',
  },
  totalPriceContainer: {
    justifyContent: 'space-between',
    marginVertical: 20.0,
    flexDirection: 'row',
  },
  totalText: {
    fontSize: 20.0,
  },
  totalPriceText: {
    fontWeight: 'bold',
    fontSize: 20.0,
  },
});

export default CartScreen;
