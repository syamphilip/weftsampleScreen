import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

export default function HomeScreen() {
  const [cartCount, setcartCount] = useState(0);
  const [addedToCart, setaddedToCart] = useState(false);

  const [JersyImage, setJersyImage] = useState([
    {
      key: 1,
      img:'https://cdn.shopify.com/s/files/1/0333/3029/8924/products/brazil-2020-stadium-away-football-shirt-6cbhDn-removebg-preview_720x.png?v=1627865848',
    },
    {
      key: 2,
      img:'https://cdn.shopify.com/s/files/1/0333/3029/8924/products/brazil-2020-stadium-away-football-shirt-6cbhDn-removebg-preview_720x.png?v=1627865848',
    },
    {
      key: 3,
      img:'https://cdn.shopify.com/s/files/1/0333/3029/8924/products/brazil-2020-stadium-away-football-shirt-6cbhDn-removebg-preview_720x.png?v=1627865848',
    },
  ]);

  useEffect(() => {
    if (cartCount == 0) {
      setaddedToCart(false);
    } else {
      setaddedToCart(true);
    }
  }, [cartCount]);

  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.appBarContainer}>
        <TouchableOpacity>
          <Icon name="bars" size={20} color="gray" />
        </TouchableOpacity>
        <View>
          <Text style={styles.appBarText}>FIFA World Cup Kits</Text>
        </View>
        <TouchableOpacity>
          <Icon name="cart-plus" size={20} color="gray" />
          <View style={styles.cartRedDot}>
            <Text style={styles.dotText}>{cartCount}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Swiper
        style={styles.warpper}
        dot={
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,.3)',
              width: 10,
              height: 10,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: '#2c3e50',
              width: 10,
              height: 10,
              borderRadius: 7,
              marginLeft: 7,
              marginRight: 7,
            }}
          />
        }
        paginationStyle={{
          bottom: 20,
        }}>
          {JersyImage.map((item)=>{
            return(
              <View>
          <Image
            source={{
              uri: item['img'],
            }}
            style={styles.imageStyle}
          />
          {addedToCart && (
            <View style={styles.addedToCartButton}>
              <Text style={styles.addedToCartText}>Added to Cart</Text>
            </View>
          )}
          <TouchableOpacity style={styles.expandButton}>
            <Icon name="expand" size={25.0} color="gray" />
          </TouchableOpacity>
        </View>
            )
          })}
      </Swiper>

      <View style={styles.detailsConatiner}>
        <View style={styles.detailsSubContainer}>
          <View style={styles.producatName}>
            <Text style={styles.producatText}>
              FRANCE AUTHENTIC HOME JERSEY 2018
            </Text>
          </View>
          <Text style={styles.brandNameText}>NIKE</Text>
          <Text style={styles.priceText}>$165</Text>
        </View>
      </View>

      <View style={styles.categoryConatiner}>
        <View style={styles.sizeContiner}>
          <Text style={styles.sizeText}>Size</Text>
          <SizeList />
        </View>

        <View style={styles.KitContiner}>
          <Text style={styles.sizeText}>Kit </Text>
          <Kit />
        </View>

        <View style={styles.qtyConatiner}>
          <Text style={styles.sizeText}>Qty</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => {
                if (cartCount == 0) {
                  setcartCount(0);
                } else {
                  setcartCount(cartCount - 1);
                }
              }}>
              <Text style={styles.qtyBtText}>-</Text>
            </TouchableOpacity>
            <View>
              <Text
                style={{color: '#2c3e50', fontWeight: 'bold', fontSize: 20.0}}>
                {cartCount}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.Button}
              onPress={() => {
                setcartCount(cartCount + 1);
                setaddedToCart(true);
              }}>
              <Text style={styles.qtyBtText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const SizeList = () => {
  const [Size, setSize] = useState([
    {key: 0, size: 'S', available: false, isSelected: false},
    {key: 1, size: 'M', available: true, isSelected: true},
    {key: 2, size: 'L', available: true, isSelected: false},
    {key: 3, size: 'XL', available: false, isSelected: false},
    {key: 4, size: 'XXL', available: true, isSelected: false},
  ]);

  const [currentSelectedSize, setcurrentSelectedSize] = useState(1);

  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
      {Size.map(item => {
        {
          if (item['available'] === true && item['isSelected'] === false) {
            return (
              <TouchableOpacity
                key={item['key']}
                style={styles.MeasurementContainerAvailable}
                onPress={() => {
                  setSize(
                    [...Size],
                    (item['isSelected'] = true),
                    (Size[currentSelectedSize]['isSelected'] = false),
                  );
                  setcurrentSelectedSize(item['key']);
                }}>
                <Text>{item['size']}</Text>
              </TouchableOpacity>
            );
          } else if (item['available'] && item['isSelected']) {
            return (
              <View
                style={styles.MeasurementContainerSelected}
                key={item['key']}>
                <Text style={styles.mesurementText}>{item['size']}</Text>
              </View>
            );
          } else {
            return (
              <View
                style={styles.MeasurementContainerNotAvailable}
                key={item['key']}>
                <Text>{item['size']}</Text>
              </View>
            );
          }
        }
      })}
    </View>
  );
};

const Kit = () => {
  const [currentIndex, setcurrentIndex] = useState(0);

  const [KitItems, setKitItems] = useState([
    {key: 0, kit: 'HOME', isSelected: true},
    {key: 1, kit: 'AWAY', isSelected: false},
    {key: 2, kit: 'THIRD', isSelected: false},
  ]);

  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
      {KitItems.map(item => {
        if (item['isSelected']) {
          return (
            <View style={styles.kitIteamContainerSelected} key={item['key']}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                {item['kit']}
              </Text>
            </View>
          );
        } else {
          return (
            <TouchableOpacity
              style={styles.kitIteamContainer}
              key={item['key']}
              onPress={() => {
                setKitItems(
                  [...KitItems],
                  (item['isSelected'] = true),
                  (KitItems[currentIndex]['isSelected'] = false),
                );
                setcurrentIndex(item['key']);
              }}>
              <Text>{item['kit']}</Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  warpper: {
    backgroundColor: '#ececec',
  },
  conatiner: {
    backgroundColor: 'white',
    flex:1,
    width: widthScreen,
  },
  appBarContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15.0,
    backgroundColor: 'white',
    elevation: 5,
  },
  appBarText: {
    fontWeight: '700',
    fontSize: 15.0,
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
  imageStyle: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  expandButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 15.0,
  },
  addedToCartButton: {
    backgroundColor: '#2c3e50',
    position: 'absolute',
    right: 0,
    margin: 15.0,
    padding: 8.0,
  },
  addedToCartText: {
    color: 'white',
    fontWeight: '700',
  },
  detailsConatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    paddingVertical: 8.0,
  },
  detailsSubContainer: {
    alignItems: 'center',
  },
  producatName: {
    flexGrow: 1,
    paddingHorizontal: 20.0,
  },
  producatText: {
    fontWeight: 'bold',
    fontSize: 25.0,
    textAlign: 'center',
  },
  brandNameText: {
    fontWeight: '600',
    color: 'gray',
    fontSize: 15.0,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 20.0,
  },
  categoryConatiner: {
    padding: 20.0,
    paddingVertical: 30.0,
  },
  sizeContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sizeText: {
    fontWeight: 'bold',
    color: '#2c3e50',
    fontSize: 18.0,
    marginRight: 20.0,
  },
  MeasurementContainerAvailable: {
    borderColor: '#2c3e50',
    borderWidth: 1,
    height: 40.0,
    width: 40.0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10.0,
    backgroundColor: 'white',
  },
  MeasurementContainerNotAvailable: {
    backgroundColor: '#e0e0e0',
    height: 40.0,
    width: 40.0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10.0,
  },
  MeasurementContainerSelected: {
    backgroundColor: '#2c3e50',
    height: 40.0,
    width: 40.0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10.0,
  },
  mesurementText: {
    fontWeight: 'bold',
    color: 'white',
  },
  KitContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20.0,
    justifyContent: 'space-between',
  },
  kitIteamContainer: {
    borderWidth: 1,
    borderColor: '#2c3e50',
    marginHorizontal: 10.0,
    padding: 8.0,
  },
  kitIteamContainerSelected: {
    borderWidth: 1,
    borderColor: '#2c3e50',
    marginHorizontal: 10.0,
    padding: 8.0,
    backgroundColor: '#2c3e50',
  },
  kitIteamContainer: {
    borderWidth: 1,
    borderColor: '#2c3e50',
    marginHorizontal: 10.0,
    padding: 8.0,
  },
  qtyConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Button: {
    backgroundColor: '#e0e0e0',
    height: 40.0,
    width: 40.0,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20.0,
    borderRadius: 10.0,
  },
  qtyBtText: {
    fontWeight: 'bold',
    fontSize: 25.0,
  },
});
