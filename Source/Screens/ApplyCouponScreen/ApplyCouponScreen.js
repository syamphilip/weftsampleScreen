import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/core';
import RadioForm from 'react-native-simple-radio-button';
import Modal from 'react-native-modal';
import IonIcon from 'react-native-vector-icons/Ionicons';
import OfferImage from '../../Assets/Images/offer.png'

const couponData = [
  {
    code: 'MMSUB956',
    name: 'ABU BACKER',
  },

  {
    code: 'MOMSUB085',
    name: 'AJU CHARIYAN',
  },
  {
    code: 'MOMSUB040',
    name: 'AL FAWAZ ADV',
  },
  {
    code: 'MOMSUB084',
    name: 'ALEXANDER JEORGE',
  },
  {
    code: 'MOMSUB064',
    name: 'ALEXANDER JEORGE',
  },
];

function ApplyCouponScreen() {
  const navigationPointer = useNavigation();

  let RadioButtonLabel = [
    {label: 'Online Payment', value: 0},
    {label: 'Cash On Delivery', value: 1},
  ];

  const [isModalVisible, setisModalVisible] = useState(false);

  const ListRender = ({item}) => {
    return (
      <View style={styles.FlatListMainView}>
        <View style={styles.BlueLabelBar}>
          <View style={styles.LeftWhiteCirel} />
          <View style={styles.RigthWhiteCirel} />
          <View style={styles.LabelView}>
            <Text style={styles.ListCodeText}>CODE {item.code}</Text>
            <Text style={styles.ListCodeText}>[{item.name}]</Text>
            <TouchableOpacity style={styles.FlatListApplyButton}>
                <Text style={styles.FlatListApplyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.DiscountText}>Discount 20%</Text>
        <View style={styles.OfferImageView}>
            <Image source={OfferImage} style={styles.OfferImageStyle}/>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.DeliveryAddressBar}>
        <TouchableOpacity onPress={() => navigationPointer.goBack()}>
          <Icon name="arrow-left" size={18} />
        </TouchableOpacity>
        <Text style={styles.DeliveryAddressText}>Delivery Address</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.AddressContainer}>
          <Text style={styles.defaultText}>Weft</Text>
          <Text style={styles.defaultText}>WEFT</Text>
          <Text style={styles.defaultText}>WEFT SMARTCITY</Text>
          <Text style={styles.defaultText}>784512</Text>
          <Text style={styles.defaultText}>753125487</Text>
          <TouchableOpacity style={styles.UseButton}>
            <Text style={styles.UseButtonText}>Use</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigationPointer.navigate('PaymentAddressScreen')}
          style={styles.AddNewButton}>
          <Text style={styles.AddNewButtonText}>Add New</Text>
        </TouchableOpacity>

        <View style={styles.ReceiptMainView}>
          <Text style={styles.ReceiptText}>Receipt</Text>

          <View style={styles.CartSummaryView}>
            <Text style={styles.CartSummaryText}>Cart Summary</Text>
          </View>

          <TouchableOpacity
            style={styles.ApplyCouponButton}
            onPress={() => setisModalVisible(true)}>
            <Text style={styles.ApplyCouponButtonText}>Apply Coupon</Text>
          </TouchableOpacity>

          <View style={styles.SubtotalView}>
            <Text style={styles.ReceiptDefaultFont}>Subtotal</Text>
            <Text style={styles.ReceiptDefaultFont}>AED 75.53</Text>
          </View>

          <View style={styles.defaultItemView}>
            <View style={styles.defaultItem}>
              <Text style={styles.ReceiptDefaultFont}>Tax</Text>
              <Text style={styles.ReceiptDefaultFont}>AED 3.98</Text>
            </View>
            <Text style={styles.itemSubText}>VAT 5% (Inclusive)</Text>
          </View>

          <View style={styles.defaultItemView}>
            <View style={styles.defaultItem}>
              <Text style={styles.ReceiptDefaultFont}>Shipping</Text>
              <Text style={styles.ReceiptDefaultFont}>AED 0.00</Text>
            </View>
            <Text style={styles.itemSubText}>
              (Free shipping for orders above AED 30)
            </Text>
          </View>

          <View style={styles.SubtotalView}>
            <Text style={styles.ReceiptDefaultFont}>Discount</Text>
            <Text style={styles.ReceiptDefaultFont}>AED 0.00</Text>
          </View>

          <View style={styles.OrderTotalView}>
            <Text style={styles.ReceiptDefaultFont}>Order Total</Text>
            <Text style={styles.ReceiptDefaultFont}>AED 79.50</Text>
          </View>

          <Text style={styles.ReceiptDefaultFont}>Choose Payment Type</Text>
          <View style={styles.RadioButtonView}>
            <RadioForm
              radio_props={RadioButtonLabel}
              initial={0}
              formHorizontal={true}
              buttonColor={'#43aa8b'}
              selectedButtonColor={'#43aa8b'}
              onPress={value => {
                console.log(value);
              }}></RadioForm>
          </View>

          <View style={styles.CommentBoxView}>
            <TextInput
              numberOfLines={4}
              multiline={true}
              style={styles.TextInputStyle}
              placeholder="Enter your comment (Optional)..."
            />
          </View>

          <TouchableOpacity
            style={styles.PlaceOrderButton}
            onPress={() => navigationPointer.navigate('PaymentScreen')}>
            <Text style={styles.PlaceOrderButtonText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal isVisible={isModalVisible} backdropColor="black" backdropOpacity={0.5}>
        <View style={styles.ModalMainView}>
          <View style={styles.ModalTopBar}>
            <Text style={styles.ModalApplyCouponText}>Apply Coupon</Text>
            <TouchableOpacity
              style={styles.CloseButton}
              onPress={() => setisModalVisible(false)}>
              <IonIcon name="close" size={15} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.ModalTextInputView}>
            <TextInput
              placeholder="Apply Coupon"
              style={styles.ModalTextInput}
            />
            <TouchableOpacity style={styles.ModalApplyButton}>
              <Text style={styles.ModalApplyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={couponData}
            renderItem={ListRender}
            keyExtractor={item => item.code}
            style={{flexGrow:1,flex:1}}
          />
        </View>
      </Modal>
    </View>
  );
}

export default ApplyCouponScreen;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 15.0,
  },
  DeliveryAddressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    paddingBottom: 14.0,
  },
  DeliveryAddressText: {
    fontFamily: 'BarlowCondensed-SemiBold',
    fontSize: 18,
    marginLeft: 15.0,
  },
  AddressContainer: {
    borderColor: 'gray',
    borderWidth: 0.2,
    paddingVertical: 25.0,
    paddingHorizontal: 20.0,
    marginVertical: 25.0,
  },
  UseButton: {
    backgroundColor: '#43aa8b',
    padding: 5.0,
    paddingHorizontal: 15.0,
    maxWidth: 60.0,
    alignItems: 'center',
    marginTop: 30.0,
  },
  UseButtonText: {
    fontFamily: 'BarlowCondensed-SemiBold',
    color: 'white',
    fontSize: 16.0,
  },
  defaultText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 15.0,
  },
  AddNewButton: {
    paddingVertical: 8.0,
    backgroundColor: '#43aa8b',
    maxWidth: 180.0,
    alignItems: 'center',
    marginVertical: 10.0,
  },
  AddNewButtonText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 18.0,
    color: 'white',
  },
  ReceiptMainView: {
    backgroundColor: '#e2ece9',
    padding: 15.0,
    borderRadius: 10.0,
    marginTop: 25.0,
    marginBottom: 50.0,
  },
  ReceiptText: {
    fontFamily: 'BarlowCondensed-SemiBold',
    fontSize: 20.0,
  },
  CartSummaryView: {
    borderBottomWidth: 0.3,
    borderColor: 'gray',
    paddingVertical: 12.0,
    marginTop: 10.0,
  },
  CartSummaryText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 16.0,
  },
  ApplyCouponButton: {
    backgroundColor: '#43aa8b',
    padding: 5.0,
    maxWidth: 130.0,
    alignItems: 'center',
    marginVertical: 15.0,
  },
  ApplyCouponButtonText: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 17.0,
    color: 'white',
  },
  SubtotalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.3,
    borderColor: 'gray',
    paddingVertical: 12.0,
  },
  defaultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  defaultItemView: {
    borderBottomWidth: 0.3,
    borderColor: 'gray',
    paddingVertical: 12.0,
  },
  ReceiptDefaultFont: {
    fontFamily: 'BarlowCondensed-SemiBold',
    fontSize: 15.0,
  },
  itemSubText: {
    color: 'gray',
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 15.0,
  },
  OrderTotalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20.0,
  },
  RadioButtonView: {
    paddingVertical: 15.0,
  },
  CommentBoxView: {
    backgroundColor: 'white',
    borderWidth: 0.2,
    color: 'gray',
  },
  TextInputStyle: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 15.0,
    flex: 1,
  },
  PlaceOrderButton: {
    backgroundColor: '#43aa8b',
    alignItems: 'center',
    marginVertical: 20.0,
    paddingVertical: 10.0,
  },
  PlaceOrderButtonText: {
    fontFamily: 'BarlowCondensed-SemiBold',
    color: 'white',
    fontSize: 16.0,
  },
  ModalMainView: {
    backgroundColor: 'white',
    borderRadius: 10.0,
    padding: 15.0,
    width: '100%',
    flex: 1,
  },
  ModalTopBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  ModalApplyCouponText: {
    fontFamily: 'BarlowCondensed-SemiBold',
    fontSize: 18.0,
  },
  CloseButton: {
    backgroundColor: '#43aa8b',
    padding: 10.0,
    borderRadius: 30.0,
  },
  ModalTextInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20.0,
    maxHeight: 50.0,
  },
  ModalTextInput: {
    backgroundColor: '#d9d9d9',
    flex: 1,
    fontFamily: 'BarlowCondensed-Regular',
    paddingVertical: 6.0,
    paddingHorizontal: 10.0,
    color: 'black',
  },
  ModalApplyButton: {
    backgroundColor: '#43aa8b',
    height: '100%',
    minWidth: 100.0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalApplyButtonText: {
    fontFamily: 'BarlowCondensed-Regular',
    color: 'white',
    fontSize: 15.0,
  },
  FlatListMainView: {
    borderRadius: 3.0,
    borderWidth: 0.2,
    borderColor: 'gray',
    padding: 5.0,
    marginVertical: 8.0,
  },
  BlueLabelBar: {
    margin: 10.0,
    minHeight: 40.0,
    justifyContent: 'center',
    backgroundColor: '#43aa8b',
  },
  LeftWhiteCirel: {
    height: 20.0,
    width: 20.0,
    borderRadius: 30.0,
    position: 'absolute',
    left: -10,
    backgroundColor: 'white',
  },
  RigthWhiteCirel: {
    height: 20.0,
    width: 20.0,
    borderRadius: 30.0,
    position: 'absolute',
    right: -10,
    backgroundColor: 'white',
  },
  LabelView:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginHorizontal:15.0,
      marginVertical:15.0
  },
  ListCodeText:{
      color:'white',
      fontFamily:"BarlowCondensed-Regular",
      marginLeft:5.0
  },
  FlatListApplyButton:{
      backgroundColor:'white',
      paddingVertical:5.0,
      paddingHorizontal:15.0
  },
  FlatListApplyButtonText:{
      fontFamily:'BarlowCondensed-Regular'
  },
  DiscountText:{
      marginLeft:10.0,
      fontFamily:'BarlowCondensed-SemiBold',
      fontSize:15.0
  },
  OfferImageView:{
      width:50.0,
      height:50.0,
      position:"absolute",
      top:0,
      right:0
  },
  OfferImageStyle:{
    width:50.0,
    height:50.0
  }
});
