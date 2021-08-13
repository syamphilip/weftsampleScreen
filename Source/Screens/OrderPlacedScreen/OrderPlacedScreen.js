import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
  TextInput,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Picker} from '@react-native-picker/picker';
import {useSelector} from 'react-redux';

let date = Date();
let currentDate = date.split(' ');
let randomOrderNumber = Math.floor(Math.random() * 1000, 10000);

let heightScreen=Dimensions.get('window').height;

function OrderPlacedScreen() {

  const navigationPointer = useNavigation();
  const [PickerState, setPickerState] = useState('Invoice');

  const AddressReducer1State = useSelector(state => state.AddressReducer2)

  const [isModalVisible, setisModalVisible] = useState(false);

  console.log(AddressReducer1State);

  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.mainContainer}>
        <View style={styles.appBarContainer}>
          <TouchableOpacity onPress={() => navigationPointer.goBack()}>
            <Icon name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.orderDetailsContainer}>
          <View>
            <Text style={styles.contactDetailsText}>Contact Details</Text>
          </View>
        </View>

        <View style={styles.OrderNoVieww}>
          <View>
            <Text style={styles.OrderNoText}>
              Order No : WT{currentDate[3]}
              {randomOrderNumber}
            </Text>
          </View>
          <View style={styles.dateAnddelveryDateView}>
            <View style={styles.orderDateView}>
              <Icon name="check" size={13} color="#808080" />
              <Text style={styles.orderDateText}>
                Order Date - {currentDate[2]} {currentDate[1]} {currentDate[3]}
              </Text>
            </View>
            <View style={styles.DeliveryDateView}>
              <Icon name="truck" size={13} color="#808080" />
              <Text style={styles.orderDateText}>
                Delivery Date - {currentDate[2]} {currentDate[1]}{' '}
                {currentDate[3]}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.pickerView}>
          <Picker selectedValue={PickerState} mode="dropdown">
            <Picker.Item label="Invoice" value="invoice" />
            <Picker.Item label="Receipt" value="receipt" />
          </Picker>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.billingDetailsView}>
            <View style={styles.firstRow}>
              <View style={styles.billingView}>
                <Text style={styles.billingText}>Billing Address</Text>
                <Text>{AddressReducer1State.address}</Text>
                <Text>Ph: {AddressReducer1State.phone}</Text>
              </View>
              <View style={styles.paymentView}>
                <Text style={styles.paymentText}>Payment Method</Text>
                <Text>Online Payment</Text>
                <View style={styles.orderPlacedView}>
                  <Text style={styles.orderStatusText}>Order Status</Text>
                  <View style={styles.placedView}>
                    <Text style={styles.placedText}>Placed</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={{marginTop: 10.0}}>
              <View>
                <Text style={styles.billingText}>Order Summary</Text>
              </View>
              <View style={styles.summaryItem}>
                <View style={styles.defaultSummaryItem}>
                  <View style={styles.defaultItemView}>
                    <Text>Item(s) Subtotal:</Text>
                  </View>
                  <View style={styles.defaultItemView}>
                    <Text style={styles.summaryItemText}>AED 91.20</Text>
                  </View>
                </View>
                <View style={styles.defaultSummaryItem}>
                  <View style={styles.defaultItemView}>
                    <Text>Tax(VAT 5% Inclusive):</Text>
                  </View>
                  <View style={styles.defaultItemView}>
                    <Text style={styles.summaryItemText}>AED 4.80</Text>
                  </View>
                </View>
                <View style={styles.defaultSummaryItem}>
                  <View style={styles.defaultItemView}>
                    <Text>Shipping:</Text>
                  </View>
                  <View style={styles.defaultItemView}>
                    <Text style={styles.summaryItemText}>AED 0.00</Text>
                  </View>
                </View>
              </View>
              <View style={styles.OrderTotalView}>
                <View style={styles.defaultItemView}>
                  <Text style={styles.summaryItemText}>Order Total:</Text>
                </View>
                <View style={styles.defaultItemView}>
                  <Text style={styles.summaryItemText}>AED 96.00</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.itemSpecView}>
            <View style={styles.imageItemView}>
              <Image
                style={styles.imageItem}
                source={{
                  uri: 'https://kitranger.com/wp-content/uploads/2020/01/Orange-Sports-Jersey-Design-SJD04-Back.jpg',
                }}
              />
            </View>
            <View>
              <View style={styles.itemDetailsView}>
                <View style={styles.itemHeading}>
                  <View style={styles.foreginNameView}>
                    <Text style={styles.foreginNameText}>
                      Foregin Name : BAKING PAPER
                    </Text>
                  </View>
                  <View style={{width: '10%'}}>
                    <Text style={styles.qtyText}>Qty</Text>
                  </View>
                  <View style={{width: '16%'}}>
                    <Text style={styles.priceText}>Price</Text>
                  </View>
                </View>
              </View>
              <View style={styles.itemContentView}>
                <View style={styles.itemHeading}>
                  <View style={styles.foreginNameView}>
                    <Text style={{fontWeight: 'bold', fontSize: 13.0}}>
                      WRAPMASTER PARCHEMENT REFILL 45CM*50M*3ROLLS{' '}
                    </Text>
                  </View>
                  <View style={{width: '10%', flexShrink: 1}}>
                    <Text style={styles.qtyText}>2</Text>
                  </View>
                  <View style={{width: '16%', flexShrink: 1}}>
                    <Text style={styles.priceText}>AED 96.00</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottomView}>
        <Text style={styles.brandText}>Brand - WRAPMATSER</Text>
        <TouchableOpacity style={styles.submitButton} onPress={()=>setisModalVisible(true)}>
          <Text style={styles.buttonText}>Submit Review</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} >
        <View style={styles.modalMainContainer}>
          <View style={styles.submitModalBar}><Text style={styles.submitReviewText}>Sumbit Review</Text></View>
          <TextInput placeholder="Enter your review" style={styles.reviewTextinput}/>
          <View style={styles.ratingStarView}>
            <Text style={styles.ratingText}>1 2 3 4 5 6</Text>
            <Text style={styles.ratingText}>   Rate this product</Text>
          </View>
          <View style={styles.ModalButtons}>
            <TouchableOpacity style={styles.submitModalButton}>
              <Text style={{color:'white'}}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelModalButton} onPress={()=>setisModalVisible(false)}>
            <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      
    </SafeAreaView>
  );
}

export default OrderPlacedScreen;

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
  },
  mainContainer: {
    paddingTop: 15.0,
    paddingHorizontal: 15.0,
    backgroundColor: 'white',
    flex: 1,
  },
  appBarContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contactDetailsText: {
    fontWeight: '700',
    color: 'black',
    fontSize: 20.0,
    marginVertical: 15.0,
  },
  orderDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
  },
  OrderNoVieww: {
    paddingVertical: 10.0,
  },
  OrderNoText: {
    fontSize: 15.0,
    color: '#808080',
  },
  orderDateView: {
    marginVertical: 6.0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderDateText: {
    fontSize: 12.0,
    marginLeft: 5.0,
    fontWeight: 'bold',
    color: '#808080',
  },
  dateAnddelveryDateView: {
    flexDirection: 'row',
  },
  DeliveryDateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10.0,
  },
  pickerView: {
    width: '40%',
    borderWidth: 1,
    height: 40.0,
    justifyContent: 'center',
    borderColor: '#7209b7',
  },
  billingDetailsView: {
    padding: 10.0,
    borderRadius: 5.0,
    borderWidth: 0.5,
    borderColor: '#7209b7',
    marginVertical: 10.0,
    backgroundColor: '#e6f0ff',
  },
  firstRow: {
    flexDirection: 'row',
  },
  billingView: {
    flex: 1,
    borderRightWidth: 0.5,
    padding: 5.0,
  },
  paymentView: {
    flex: 1,
    paddingVertical: 5.0,
    paddingHorizontal: 20.0,
    justifyContent: 'space-between',
  },
  billingText: {
    fontWeight: 'bold',
    marginBottom: 10.0,
  },
  paymentText: {
    fontWeight: 'bold',
  },
  orderStatusText: {
    fontWeight: 'bold',
  },
  placedView: {
    backgroundColor: '#fed102',
    width: '40%',
    paddingHorizontal: 5.0,
    alignItems: 'center',
    marginVertical: 5.0,
  },
  orderPlacedView: {
    marginTop: 5.0,
  },
  placedText: {
    fontWeight: 'bold',
    color: 'white',
  },
  defaultSummaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  defaultItemView: {
    flex: 1,
    alignItems: 'flex-start',
  },
  summaryItemText: {
    fontWeight: 'bold',
  },
  summaryItem: {
    justifyContent: 'space-between',
    height: 80.0,
  },
  OrderTotalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10.0,
  },

  itemSpecView: {
    flexDirection: 'row',
    padding: 10.0,
    borderRadius: 5.0,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginVertical: 10.0,
    backgroundColor: 'white',
    elevation: 4.0,
  },
  imageItem: {
    height: 100.0,
    width: 100.0,
  },
  imageItemView: {
    flex: 1,
  },
  itemDetailsView: {
    flex: 2,
    paddingHorizontal: 5,
    borderBottomWidth: 0.5,
  },
  itemHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foreginNameView: {
    flexShrink: 1,
    width: '45%',
  },
  foreginNameText: {
    fontSize: 13.0,
  },
  qtyText: {
    fontWeight: 'bold',
    fontSize: 13.0,
  },
  priceText: {
    fontWeight: 'bold',
    fontSize: 13.0,
  },
  itemContentView: {
    flex: 2,
    padding: 5.0,
  },

  bottomView: {
    width: '100%',
    backgroundColor: '#e6f0ff',
    padding: 10.0,
    paddingBottom: 35.0,
  },
  brandText: {
    fontWeight: 'bold',
    marginTop: 5.0,
  },
  submitButton: {
    borderWidth: 1,
    borderColor: '#7209b7',
    padding: 5.0,
    marginVertical: 25.0,
    maxWidth: '30%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#7209b7',
  },
  modalMainContainer:{
    margin:15.0,
    backgroundColor:'white',
    borderWidth:0.5
  },
  submitModalBar:{
    width:'100%',
    backgroundColor:'#7209b7',
    padding:10.0
  },
  submitReviewText:{
    fontSize:20.0,
    color:'white'
  },
  reviewTextinput:{
    height:heightScreen*0.2,
    borderColor:'gray',
    borderWidth:0.5,
    margin:10.0,
    borderRadius:2.0,
    fontStyle:'italic'
  },
  ratingStarView:{
    flexDirection:'row',
    marginHorizontal:10.0
  },
  ratingText:{
    color:'gray'
  },
  ModalButtons:{
    flexDirection:'row',
    margin:10
  },
  submitModalButton:{
    backgroundColor:'#7209b7',
    alignItems:'center',
    padding:10.0,
    paddingHorizontal:20.0
  },
  cancelModalButton:{
    borderColor:'#7209b7',
    borderWidth:1,
    alignItems:'center',
    marginLeft:10.0,
    padding:10.0,
    paddingHorizontal:20.0
  }  
});
