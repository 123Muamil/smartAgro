import { StyleSheet, Text, View,TouchableOpacity,ScrollView,Image,TouchableWithoutFeedback } from 'react-native'
import React, { useEffect } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { addProducts } from '../../../store/productSlice';
import data from '../../../api/products';
type BuyProductsProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
const BuyProducts:React.FC<BuyProductsProps> = ({navigation}) => {
  const products = useAppSelector((state) => state.products);
  const cart = useAppSelector((state) => state.cart)
  // console.log("The products are:",products)

  const dispatch=useAppDispatch()
 
  useEffect(()=>{
    data.map((currentItem)=>{
      dispatch(addProducts(currentItem))
 })
  },[])
  const handlePress = () => {
    navigation.navigate('cart');
    // console.log(cartItems)
  };
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item:any) => {
      total += item.quantity
    })
    return total
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
            <TouchableOpacity style={styles.cartContainer} onPress={handlePress} >
               <TouchableWithoutFeedback onPress={()=>navigation.navigate('cart')}>
               <Image source={require('../../../assets/cart.png')}  />
               </TouchableWithoutFeedback>
                 <View style={styles.cartTextCircle}>
                 <Text style={styles.cartText}>{getTotalQuantity() || 0}</Text>
                 </View>
              </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.smartText}>SmartAgro</Text>
            
          </View>
        </View>
        </View>
        <ScrollView>
        <View style={styles.contentContainer}>
        <View >
          <View style={styles.titleContainer}>
          <Text style={styles.title}>Our</Text>
            <Text style={styles.subTitle}>Best Poducts</Text>
          </View>
          
       {/* Card Design */}
    <View style={styles.cardContainer}>
    {products.map((cardData: any, index: number) => (
        <TouchableOpacity style={styles.card} key={cardData.id} onPress={()=>navigation.navigate('detail',{ id: cardData.id })}>
        <View style={styles.imageContainer}>
          <Image source={cardData.imageSource} style={styles.image} />
        </View>
        <Text style={styles.title}>{cardData.title}</Text>
        <Text style={styles.price}>{cardData.price}</Text>
        <Text style={styles.save}>{cardData.save}</Text>
      
      </TouchableOpacity>
      
       
      ))}
</View>
{/* end of cart Design */}
    
   
        </View>
        </View>
        </ScrollView>
    </View>
  )
}

export default BuyProducts

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
    marginTop:10,
      },
      icon: {
        width: 16.75,
        height: 27.586,
        color: '#000000',
        marginLeft: 0,
        marginTop: 20,
      },
     contentContainer:{
        backgroundColor:'#fff'
     },
     titleContainer:{
          marginHorizontal:20,
          marginVertical:20,
     }
     ,
     title: {
        color: '#272D2F',
        fontFamily: 'Aoboshi One',
        fontSize: 27.986,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 30.784,
      },
      subTitle: {
        color: '#34A853',
        fontFamily: 'Aoboshi One',
        fontSize: 34.776,
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 38.254, 
      },
      cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      card: {
        width: 250,
        height: 300, 
        margin: 10, 
        padding:10,
        borderRadius: 7.387,
         
        backgroundColor: '#fff',
       
        alignItems: 'center',
        justifyContent: 'center',
       
       
      
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2, 
        shadowRadius: 4,
        elevation: 4, 
      },
      imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 64,
        height: 77,
        margin:10,
  
      },
      cardtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        textAlign: 'center',
        marginTop:10,
      },
      price: {
        fontSize: 14,
        fontWeight: 'normal',
        marginVertical: 5,
        textAlign: 'center',
        marginTop:10,
      },
      save: {
        fontSize: 14,
        fontWeight: 'normal',
        marginVertical: 5,
        textAlign: 'center',
      },
      buyButton: {
        width:200,
        backgroundColor: '#4BA26A',
        padding: 10,
        borderRadius: 5,
        marginTop: 30,
      },
      buyButtonText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold',
      },
      cartContainer:{
           marginRight:10,
           top:35,
           justifyContent:'center',
           alignItems:'center'
      },
      cartTextCircle:{
        position:'absolute',
           width:20,
           height:20,
           borderRadius:50,
           backgroundColor:'#4BA26A',
            top:-5,
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            left:16,
      }
      ,
      cartText:{
          color:'#fff',
          bottom:2,
      }
})