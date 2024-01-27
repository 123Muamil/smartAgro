import { StyleSheet, Text, View,ScrollView,TouchableOpacity,TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/AntDesign';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { clearCart, decrementQuantity, incrementQuantity, removeItem } from '../../../store/cartSlice';
import { useToast } from "react-native-toast-notifications";
type AddtoCartProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  };
const AddtoCart:React.FC<AddtoCartProps> = ({navigation}) => {
  const cartData = useAppSelector((state) => state.cart);
  const toast = useToast();
  const dispatch=useAppDispatch()
 

 
  const handleContinueShopping=()=>{
     navigation.navigate('buyProducts')
  }
  const decrementItem=(id:any)=>{
        dispatch(decrementQuantity(id))
  }
  const IncrementItem=(id:any)=>{
     dispatch(incrementQuantity(id))
  }
  const removeItems=(id:any)=>{
    

     dispatch(removeItem(id))
    // Show the toast message for successful removal
    toast.show('Product removed from cart successfully!', {
      type: 'success',
      placement: 'top',
      duration: 3000,
      style: styles.toastContainer,
      textStyle: styles.toastText,
      
    });
   
  }
 const clearCartItems=()=>
 {
    dispatch(clearCart())
    toast.show('Cart cleared successfully. Ready for more shopping!', {
      type: 'success',
      placement: 'bottom',
      duration: 3000,
      style: styles.toastContainer1,
      textStyle: styles.toastText,
      
    });
 }

  const calculateSubTotal = () => {
    let subTotal = 0;
    cartData.forEach((item:any) => {
      subTotal += item.price * item.quantity;
    });
    return subTotal;
  };
  
  const calculateTotal = () => {
    const subTotal = calculateSubTotal();
    const taxAndFees = subTotal * 0.1; // Assuming 10% tax and fees
    const deliveryFees = 100; // Assuming a fixed delivery fee of $100
    const total = subTotal + taxAndFees + deliveryFees;
    return total;
  };
  const getQuantity=()=>{
    let quantity = 0;
    cartData.forEach((item:any) => {
      quantity=  item.quantity;
    });  
    return quantity
  }
  return (
    <View style={styles.Container}>
    <View style={{ overflow: 'hidden', paddingBottom: 1 }}>
     <View style={styles.topContainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circularContainer2}></View>
             <View style={styles.backContainer}>
             <AntDesign name='left' size={20} style={styles.icon} onPress={() => navigation.goBack()} />
             </View>
            <View style={styles.semiContainer}>
              <View style={styles.semiCircleContainer}></View>
              <View style={styles.semiCircleContainer1}></View>
            
            </View>
         
          </View>
          <View>
            <Text style={styles.smartText}>Cart</Text>
            
          </View>
        </View>
        </View>
       {
          cartData.length===0?<View style={styles.cartEmpty}>
              <Text style={styles.emptyText}>There are no items in this cart</Text>
              <View style={styles.buyNowbuttonContainer}>
                   <TouchableOpacity style={styles.buyNowbutton} onPress={handleContinueShopping}>
                <Text style={styles.buynowbuttonText}>Continue Shopping</Text>
              </TouchableOpacity>
          
                   </View>
          </View>: <ScrollView>
          <View style={styles.contentContainer}>
               {
                  cartData.map((currentItem:any,index:number)=>{
                     return <View style={styles.cardContainer} key={index}>
                     <View style={styles.cardContentContainer}>
                     <View style={styles.leftContainer}>
                      <Image style={styles.cardImage} source={currentItem.imageSource}/>
                      </View>
                      <View style={styles.middleContainer}>
                       <Text style={styles.title}>{currentItem.title} </Text>
                       <Text style={styles.subTitle}>{currentItem.subTitle}</Text>
                       <Text style={styles.price}>{currentItem.price}</Text>
                      </View>
                      <View style={styles.rightContainer}>
                      <TouchableOpacity onPress={()=>removeItems(currentItem.id)}>
                      <Icon  name="close" size={20} color="#FF3600" style={styles.closeIcon} />
                      </TouchableOpacity>
                      <View style={styles.buttonContainer}>
                    
                                <TouchableOpacity style={styles.button} onPress={()=>decrementItem(currentItem.id)}>
                                  <Image source={require('../../../assets/minus.png')}/>
                                 </TouchableOpacity>
                                 <Text style={styles.text} >{currentItem.quantity}</Text>
                                 <TouchableOpacity style={styles.button} onPress={()=>IncrementItem(currentItem.id)}>
                                 <Image source={require('../../../assets/plus.png')}/>
                                 </TouchableOpacity>
                                </View>
                      </View>
                     </View>
                    </View>
                  })
               }
              
               
               {/* <View style={styles.cardContainer}>
                <View style={styles.cardContentContainer}>
                <View style={styles.leftContainer}>
                 <Image style={styles.cardImage} source={require('../../../assets/cartImage1.png')}/>
                 </View>
                 <View style={styles.middleContainer}>
                  <Text style={styles.title}>Agri  -  Protex </Text>
                  <Text style={styles.subTitle}>Corp Prodution</Text>
                  <Text style={styles.price}>Rs.2060</Text>
                 </View>
                 <View style={styles.rightContainer}>
                 <View>
                 <Icon
                    name="close"
                    size={20}
                    color="#FF3600"
                  
                    style={styles.closeIcon}
                  />
                 </View>
                 <View style={styles.buttonContainer}>
                           <TouchableOpacity style={styles.button}>
                             <Image source={require('../../../assets/minus.png')}/>
                            </TouchableOpacity>
                            <Text style={styles.text}>02</Text>
                            <TouchableOpacity style={styles.button1}>
                            <Image source={require('../../../assets/plus.png')}/>
                            </TouchableOpacity>
                           </View>
                 </View>
                </View>
               </View> */}
               {/* end card code */}
               <View style={styles.promoContainer}>
               <TextInput
                style={styles.input}
                placeholder="Promo Code"
                placeholderTextColor="#BEBEBE"
              />
               <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applybuttonText}>Apply</Text>
              </TouchableOpacity>
               </View>
                <View>
                  <View  style={styles.totalPriceContainer}>
                  <Text style={styles.titlePrice}>
                  Subtotal
                  </Text>
                  <Text style={styles.titlePrice}>
                    {calculateSubTotal() || 0}
                  </Text>
                  </View>
                  <View style={styles.horizontalLine}/>
                  <View  style={styles.totalPriceContainer}>
                  <Text style={styles.titlePrice}>
                  Tax & Fees
                  </Text>
                  <Text style={styles.titlePrice}>
                    10%
                  </Text>
                  </View>
                  <View style={styles.horizontalLine}/>
                  <View  style={styles.totalPriceContainer}>
                  <Text style={styles.titlePrice}>
              Delivery
                  </Text>
                  <Text style={styles.titlePrice}>
                     Rs. 100
                  </Text>
                  </View>
                  <View style={styles.horizontalLine}/>
                  <View  style={styles.totalPriceContainer}>
                  <Text style={styles.titlePrice}>
              Total
                  </Text>
                  <Text style={styles.titlePrice}>
                  ${calculateTotal() || 0}
                  </Text>
                  </View>
                  <View style={styles.horizontalLine}/>
                </View>
          </View>
              
                   <View style={styles.buyNowbuttonContainer}>
                   <TouchableOpacity style={styles.buyNowbutton}>
                <Text style={styles.buynowbuttonText}>Buy Now</Text>
              </TouchableOpacity>
          
                   </View>
                  </ScrollView>
       }
      {
         cartData.length > 0? <View style={styles.clearCartItemContainer}><TouchableOpacity style={styles.clearCartButton} onPress={clearCartItems}>
         <Text style={styles.buynowbuttonText}>Clear Cart Items</Text>
      </TouchableOpacity></View>:null
      }
    </View>
  )
}

export default AddtoCart

const styles = StyleSheet.create({
    Container: {
        flex: 1, // This allows the ScrollView to take up the entire screen.
        backgroundColor: '#fff',
      },
     
        topContainer: {
            width: '100%',
            height: 74,
            flexShrink: 0,
            backgroundColor: '#FFF',
            shadowColor: 'rgba(63, 76, 95, 0.12)',
            shadowOpacity: 1,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowRadius: 4,
            elevation: 4,
          },
          circleContainer: {
            flex: 1,
            flexDirection: 'row',
          },
          semiContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          semiCircleContainer: {
            width: 121.314,
            height: 121.314 / 2,
            backgroundColor: 'rgba(254, 114, 76, 0.69)',
            borderBottomLeftRadius: 121.314 / 2,
            borderBottomRightRadius: 121.314 / 2,
            overflow: 'hidden',
            flexShrink: 0,
            marginTop: -20,
          },
          semiCircleContainer1: {
            width: 121.314,
            height: 121.314 / 2,
            backgroundColor: 'rgba(52, 168, 83, 0.69)',
            borderBottomLeftRadius: 121.314 / 2,
            borderBottomRightRadius: 121.314 / 2,
            overflow: 'hidden',
            flexShrink: 0,
            marginTop: -20,
          },
          circularContainer2: {
            width: 70.583,
            height: 70.583,
            backgroundColor: 'transparent',
            borderRadius: 70.583 / 2,
            borderColor: 'rgba(52, 168, 83, 0.69)',
            borderWidth: 26.469,
            flexShrink: 0,
            marginLeft: -30,
          },
          smartText: {
            color: '#000',
            fontFamily: 'Alatsi',
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
          },
          backContainer:{
            width: 38,
            height: 38,
            flexShrink: 0,
            tintColor: '#FFF',
            backgroundColor: '#fff',
        shadowColor: 'rgba(63, 76, 95, 0.12)',
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 4,
        elevation: 4,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        
        textAlign:'center',
        marginTop:20,
          },
          icon: {
            width: 16.75,
            height: 27.586,
            color: '#000000',
            marginLeft: 0,
            marginTop: 5,
          
          },
          contentContainer:{
            backgroundColor:'#fff',
            marginHorizontal:20,
            marginTop:20,
         },
         cardContainer:{
              width:'100%',
              height:100,
              backgroundColor:'#fff',
              justifyContent:'center',
              marginBottom:10,
         },
         cardContentContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
         }
         ,
         leftContainer:{
            backgroundColor:'#fff'
         },
         middleContainer:{
            backgroundColor:'#fff'
         },
         rightContainer:{
            backgroundColor:'#fff',
            flexDirection:'row',
            justifyContent:'space-between',
         }
         ,
         cardImage:{
            width:64,
            height:77,
            flexShrink:0,
         },
         title:{
            color: '#000',
            fontFamily: 'Alatsi',
            fontSize: 14.881,
            fontStyle: 'normal',
            fontWeight: '400',
         },
         subTitle:{
            color: '#8C8A9D',
            fontFamily: 'Architects Daughter', 
            fontSize: 14,
            fontStyle: 'normal',
            fontWeight: '400',
         },
         price:{
            color: '#34A853',
            fontFamily: 'Average Sans', 
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: '400',
         },
         closeIcon: {
            position: 'absolute',
            top: 1,
            right: 1,
         
          },
          buttonContainer:{
      
            flexDirection:'column',
            marginBottom:10,
           
         },
         button:{
            width:30.598,
            height:30.598,
            top:-6,
         },
       
         text:{
      color: '#000',
      fontFamily: 'Average Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      marginLeft:35,
      top:10,
         },
         promoContainer:{
            width: '100%',
            height: 60,
            flexShrink: 0,
          
            borderWidth: 1,
            borderColor: '#EEE',
            backgroundColor: '#FFF',
            justifyContent:'center',
            flexDirection:'row',
            marginTop:30,
         },
         input: {
            width: '70%',
            height: 60,
            flexShrink: 0,
            color: '#BEBEBE',
            fontFamily: 'Architects Daughter', 
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 20, 
            borderWidth: 1,
            borderColor: '#EEE',
          
            paddingLeft: 10,
            backgroundColor:'#fff',
            justifyContent:'center',
            
          
          },
          applyButton: {
            width: '30%',
            height: 60,
            flexShrink: 0,
            backgroundColor: '#34A853',
            justifyContent: 'center',
            alignItems: 'center',
           
          },
         applybuttonText: {
            color: '#FFF',
            fontFamily: 'Average Sans', 
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: '400',
            letterSpacing: 1.2,
            textTransform: 'uppercase',
          },
          totalPriceContainer:{
             flexDirection:'row',
             justifyContent:'space-between',
             marginTop:20,
          },
          horizontalLine:{
            width:'100%',
            height:1,
            backgroundColor:'#F1F2F3'
          },
          titlePrice:{
            color: '#000',
            fontFamily: 'Alatsi', 
            fontSize: 16,
            fontStyle: 'normal',
            fontWeight: '400',
          },
          buyNowbuttonContainer:{
              justifyContent:'center',
              alignItems:'center',
              marginTop:50,
              marginBottom:10,
          }
          ,
          buyNowbutton: {
            width: 248,
            height: 57,
            flexShrink: 0,
            borderRadius: 28.5,
            backgroundColor: '#34A853',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'rgba(254, 114, 76, 0.25)',
            shadowOffset: { width: 0, height: 8 },
            shadowRadius: 30,
            shadowOpacity: 1,
          },
          buynowbuttonText: {
            color: '#FFF',
            fontFamily: 'Average Sans', 
            fontSize: 15,
            fontStyle: 'normal',
            fontWeight: '400',
            letterSpacing: 1.2,
            textTransform: 'uppercase',
          },
          cartEmpty:{
               flex:1,
               justifyContent:'center',
               alignItems:'center'
          },
          emptyText:{
                left:-25,
          },
          toastContainer: {
            backgroundColor: '#FF5733', // A shade of red for danger/error
            padding: 16,
            borderRadius: 8,
            marginHorizontal: 16,
            marginTop: 70,
          },
          toastContainer1:{
            backgroundColor: '#4CAF50', // Green color for success
            padding: 16,
            borderRadius: 8,
            marginHorizontal: 16,
            marginVertical: 70,
            width:'100%'
          }
          ,
          toastText: {
            color: 'white',
          },
          clearCartItemContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:10,
          },
          clearCartButton:{
            width: 248,
            height: 57,
            flexShrink: 0,
            borderRadius: 10,
            backgroundColor: '#34A853',
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: 'rgba(254, 114, 76, 0.25)',
            shadowOffset: { width: 0, height: 8 },
            shadowRadius: 30,
            shadowOpacity: 1,
          }
})