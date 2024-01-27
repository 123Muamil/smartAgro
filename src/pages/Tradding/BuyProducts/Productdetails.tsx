import { StyleSheet, Text, View,SafeAreaView,ScrollView,Image,TouchableOpacity,ToastAndroid } from 'react-native'
import React,{useEffect, useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { useAppDispatch,useAppSelector} from '../../../store/hooks';
import { addToCart, decrementQuantity, incrementQuantity } from '../../../store/cartSlice';
import { useToast } from "react-native-toast-notifications";
import data from '../../../api/products';

type ProductdetailsProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  
  };
 
  
const Productdetails:React.FC<ProductdetailsProps> = ({ route, navigation }) => {
  const { id } = route.params as { id: string };
  const dispatch = useAppDispatch();
  const toast = useToast();
  const cart = useAppSelector((state) => state.cart);
    //  console.log("The product id is:",id)
      const [checked, setChecked] = useState(true);
      const [checked1, setChecked1] = useState(false);
      const [quantity, setQuantity] = useState<number>(0);
      const [product,setProduct]=useState([])
      // console.log("The quantity is:",product.length)
      const handleAddToCart = (item: any) => {
        dispatch(addToCart(item));
        toast.show('Product added to cart successfully!', {
          type: 'success',
          placement: 'bottom',
          duration: 3000,
          style: styles.toastContainer,
          textStyle: styles.toastText,
          
        });
      };
  useEffect(()=>{
       getQuantity()
      //  decrementItem()
      //  IncrementItem()
  },[])
  const decrementItem = (itemId: any) => {
    dispatch(decrementQuantity(itemId));
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const IncrementItem = (itemId: any) => {
    dispatch(incrementQuantity(itemId));
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const getQuantity=()=>{
    const product=cart.filter((currentItem:any)=>currentItem.id===id)
    if(product.length>0)
    {
      setProduct(product)
      const qty=product[0].quantity;
      setQuantity(qty)
    }
    return 0
  }
  return (
    <SafeAreaView style={styles.Container}>
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
            <Text style={styles.smartText}>SmartAgro</Text>
            
          </View>
        </View>
        </View>
        <ScrollView style={styles.contentContainer}>
            <View>
                <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../../../assets/pro_2.jpeg')}/>
                </View>
                <View style={styles.topTextContainer}>
                    <Text style={styles.title}>
                  Cartap - Hydrocloride
                    </Text>
                    <Text style={styles.price}>Price : Rs. 2060-3060 </Text>
                  <View style={styles.textbuttonContainer}>
                  <View><Text style={styles.save}>Save : Rs.1000 </Text></View>
                 <View style={styles.buttonContainer}>
                 <TouchableOpacity style={styles.button} onPress={()=>decrementItem(id)}>
                   <Image source={require('../../../assets/minus.png')}/>
                  </TouchableOpacity>
                  <Text style={styles.text}>{product.length>0?quantity:0}</Text>
                  <TouchableOpacity style={styles.button1} onPress={()=>IncrementItem(id)}>
                  <Image source={require('../../../assets/plus.png')}/>
                  </TouchableOpacity>
                 </View>
               
                  </View>
                    <Text style={styles.subText}>Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</Text>
                </View>
                <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>
                             Choice of Add On
                    </Text>
                    <View style={styles.categoryContainer}>
                      <View style={styles.categoryTopContainer}>
                      <Image source={require('../../../assets/image.png')}/>
                      <Text style={styles.categoryTitle}>Agri Moss</Text>
                      </View>
                      <View style={styles.categoryBottomContainer}>
                           <Text style={styles.categoryPrice}>
                           +Rs.230
                           </Text>
                          {/* <CheckBox 
                          center
                          checkedIcon='dot-circle-o'
                          uncheckedIcon='circle-o'
                          checked={checked}
                          checkedColor='#34A853'
                          containerStyle={styles.container}
                          onPress={() => setChecked(!checked)} // Toggles the 'checked' state
                          /> */}
                      </View>
                    </View>
                    <View style={styles.categoryContainer}>
                      <View style={styles.categoryTopContainer}>
                      <Image source={require('../../../assets/image1.png')}/>
                      <Text style={styles.categoryTitle}>Agri Moss</Text>
                      </View>
                      <View style={styles.categoryBottomContainer}>
                           <Text style={styles.categoryPrice}>
                           +Rs.230
                           </Text>
                          {/* <CheckBox 
                          center
                          checkedIcon='dot-circle-o'
                          uncheckedIcon='circle-o'
                          checked={checked1}
                          checkedColor='#34A853'
                          containerStyle={styles.container}
                          onPress={() => setChecked1(!checked1)} // Toggles the 'checked' state
                          /> */}
                      </View>
                    </View>
                    <View style={styles.categoryContainer}>
                      <View style={styles.categoryTopContainer}>
                      <Image source={require('../../../assets/image2.png')}/>
                      <Text style={styles.categoryTitle}>Agri Moss</Text>
                      </View>
                      <View style={styles.categoryBottomContainer}>
                           <Text style={styles.categoryPrice}>
                           +Rs.230
                           </Text>
                          {/* <CheckBox center
                          checkedIcon='dot-circle-o'
                          uncheckedIcon='circle-o'
                          checked={checked1}
                          checkedColor='#34A853'
                          containerStyle={styles.container}
                          onPress={() => setChecked1(!checked1)} // Toggles the 'checked' state
                          /> */}
                      </View>
                    </View>
                  
                </View>
                <View style={styles.addbuttonContainer}>
                <TouchableOpacity style={styles.addbutton} onPress={() => handleAddToCart(data.find((cartItem:any)=>cartItem.id===id))}>
      <Text style={styles.buttonText}>Add to cart</Text>
    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
)}

export default Productdetails

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
        backgroundColor:'#fff',
        width:'100%',
       flex:1,
       marginBottom:20,
     },
     imageContainer:{
         width:'100%',
         height:responsiveHeight(25),
         justifyContent:'center',
         alignItems:'center'
     },
     image:{
          width:145,
          height:176,
          flexShrink:0
     },
     topTextContainer:{
       marginHorizontal:30,
     },
     title:{
        color: '#000',
        fontFamily: 'Alatsi',
        fontSize: 20.175,
        fontStyle: 'normal',
        fontWeight: '400',
     },
     price:{
        color: '#000',
        fontFamily: 'Alatsi',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '400',
         marginTop:10,
     },
     save:{
        color: '#000',
  fontFamily: 'Alatsi',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: '400',
   
     },
     textbuttonContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
         marginTop:10,
     },
     buttonContainer:{
      
        flexDirection:'row',
       
     },
     button:{
        width:30.598,
        height:30.598,
       
     },
     button1:{
        width:30.598,
        height:30.598,
        top:-13,
        marginRight:20,
     },
     text:{
  color: '#000',
  fontFamily: 'Average Sans',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: '400',
  marginLeft:50,
  top:10,
     },
  subText:{
 color: '#858992',
    textAlign: 'justify',
    fontFamily: 'AmstelvarAlpha',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop:30,
  },
     bottomTextContainer:{
            marginHorizontal:20,
            marginTop:40,
     },
     bottomText:{
       color: '#323643',
    fontFamily: 'Average Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
     },
     categoryContainer:{
         width:'100%',
         height:43.45,
         backgroundColor:'#fff',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between',
         marginTop:20,
     },
     categoryTopContainer:{
        flexDirection:'row',
     },
     categoryTitle:{
         color: '#000',
    fontFamily: 'AmstelvarAlpha',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft:10,
    marginTop:5,
     },
     categoryBottomContainer:{
          flexDirection:'row',
     },
     categoryPrice:{
        color: '#000',
    textAlign: 'right', // for text alignment
    fontFamily: 'AmstelvarAlpha',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop:7,
     },
        container: {
      color: '#000',
     
      paddingTop:1
    },
    addbuttonContainer:{
          justifyContent:'center',
          alignItems:'center',
          marginTop:10,
    }
    ,
    addbutton: {
      width: 167,
      height: 53,
      flexShrink: 0,
      borderRadius: 28.5,
      backgroundColor: '#34A853',
      shadowColor: 'rgba(254, 114, 76, 0.25)',
      shadowOffset: { width: 0, height: 8 },
      shadowRadius: 30,
      shadowOpacity: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontFamily: 'Alatsi',
      fontSize: 15,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 20, // You can adjust this value to match your design
      fontVariant: ['small-caps'],
    },
    toastContainer: {
      backgroundColor: '#4CAF50', // Green color for success
      padding: 16,
      borderRadius: 8,
      marginHorizontal: 16,
      marginVertical: 70,
      width:'100%'
    },
    toastText: {
      color: 'white',
    },
})
