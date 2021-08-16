import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const heightScreen = Dimensions.get('window').height;
const widthScreen = Dimensions.get('window').width;

const ordersData = [
  {
    orderNo: 'HS0721158',
    AED: 'AED 96.00',
    OrderDate: 'Jul 12, 2021',
    DeliveryDate: 'Jul 14, 2021',
  },
  {
    orderNo: 'HS0721157',
    AED: 'AED 96.00',
    OrderDate: 'Jul 12, 2021',
    DeliveryDate: 'Jul 14, 2021',
  },
  {
    orderNo: 'HS0721156',
    AED: 'AED 192.00',
    OrderDate: 'Jul 12, 2021',
    DeliveryDate: 'Jul 14, 2021',
  },
];

const orderListView = ({item}) => (
  <View style={styles.ItemMainView}>
    <View style={styles.OrderNoAndAEDView}>
      <Text>Order No: {item.orderNo}</Text>
      <Text style={styles.AEDText}>{item.AED}</Text>
    </View>

    <View style={styles.blueContainer}>
        <View style={styles.OrderPlacedOrderDateView}>
            <Text>Order</Text>
            <View style={styles.PlacedView}><Text style={styles.PlacedText}>Placed</Text></View>
            <View style={styles.OrderDateView}>
            <IonIcon name="checkmark-circle-outline" size={20} color="gray"/>
            <Text style={styles.OrderDate}>Order Date- {item.OrderDate}</Text>
            </View>
        </View>

        <View style={styles.DeliveryDateView}>
            <Icon name="truck" size={16} color="gray"/>
            <Text style={styles.DeliveryDateText}>Delivery Data-{item.DeliveryDate}</Text>
        </View>

        <View style={styles.ButtonsView}>
            <TouchableOpacity style={styles.ViewOrderButton}>
                <Text style={styles.ViewOrderText}>View Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.CancelOrderButton}>
            <Text style={styles.CancelOrderText}>Cancel Order</Text>
            </TouchableOpacity>
        </View>
    </View>
  </View>
);

function OrdersScreen() {
  const navigationPointer = useNavigation();

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.mainContainer}>
        <View style={styles.appBarView}>
          <TouchableOpacity onPress={() => navigationPointer.goBack()}>
            <Icon name="arrow-left" size={20} />
          </TouchableOpacity>
          <Text style={styles.orderAppBarText}>Orders</Text>
          <View style={{minWidth: 20.0}} />
        </View>

        <View style={styles.ordersView}>
          <Text style={styles.orderText}>Orders</Text>
        </View>

        <View style={styles.OrderHistoryAndPriceView}>
          <Text style={styles.OrderHistoryAndPriceText}>Order History</Text>
          <Text style={styles.OrderHistoryAndPriceText}>Price</Text>
        </View>

        <FlatList
          data={ordersData}
          renderItem={orderListView}
          keyExtractor={item => item.orderNo}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default OrdersScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    padding: 15.0,
    backgroundColor: 'white',
  },
  appBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderAppBarText: {
    fontWeight: 'bold',
    fontSize: 18.0,
  },
  ordersView: {
    paddingVertical: 10.0,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  orderText: {
    fontWeight: '700',
    fontSize: 20.0,
  },
  OrderHistoryAndPriceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10.0,
    paddingHorizontal: 15.0,
  },
  OrderHistoryAndPriceText: {
    fontWeight: 'bold',
  },

  ItemMainView: {
    borderTopLeftRadius: 5.0,
    borderTopRightRadius: 5.0,
    borderColor: 'gray',
    borderWidth: 0.5,
    elevation: 3.0,
    backgroundColor: 'white',
    marginBottom: 10.0,
  },
  OrderNoAndAEDView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15.0,
    paddingVertical: 10.0,
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  AEDText: {
    fontWeight: 'bold',
  },
  blueContainer: {
    backgroundColor: '#e2ece9',
    width: '100%',
    padding: 10.0,
  },
  OrderPlacedOrderDateView:{
      flexDirection:'row',
      alignItems:"center"     
  },
  PlacedView:{
      backgroundColor:"#f9c74f",
      marginLeft:5.0,
  },
  PlacedText:{
      color:'white',
      padding:2.0,
      paddingHorizontal:5.0,
      fontWeight:'bold'
  },
  OrderDateView:{
      flexDirection:'row',
      alignItems:'center',
      marginLeft:10.0
  },
  OrderDate:{
      marginLeft:2.0
  },
  DeliveryDateView:{
      flexDirection:'row',
      alignItems:'center',
      marginVertical:15.0
  },
  DeliveryDateText:{
      marginLeft:5.0
  },
  ButtonsView:{
      flexDirection:'row',
      alignItems:'center',
      marginVertical:5.0
  },
  ViewOrderButton:{
      borderColor:'#43aa8b',
      borderWidth:1,
      padding:3.0,
      paddingHorizontal:10.0,
      marginRight:10.0
  },
  CancelOrderButton:{
    padding:3.0,
    paddingHorizontal:10.0,
    backgroundColor:'#43aa8b'
  },
  ViewOrderText:{
      fontWeight:'bold',
      color:'#43aa8b'
  },
  CancelOrderText:{
      color:'white',
      fontWeight:'bold'
  }
});
