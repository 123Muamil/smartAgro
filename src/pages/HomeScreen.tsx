import React,{useState} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView,Linking } from 'react-native';
import Styles from '../components/TabNavigation/Styles';
import MyHeader from '../components/TabNavigation/MyHeader';
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Carousel from './Carousal';
import NewsFeed from './NewsFeed';
import RecommendedProducts from './RecommendedProducts';
import HelpandCustomerSuport from './HelpandCustomerSuport';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FloatingButton from '../components/profile/FloatingButton';
type HomeScreenProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};


const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
  
   return(
    <View style={Styles.container}>
    <MyHeader
     back
     onPressBack={() => navigation.goBack()}
     title={route.name}
     right="more-vertical"
     onRightPress={() => navigation.navigate('profile')}
     style={styles.headerWithShadow}
   />
   <ScrollView >
  <View style={styles.contentContainer}>
 <View style={styles.carousal}>
   <Carousel />
   
 </View>
 <View style={styles.mainFeatureContainer}>
   <Text style={styles.mainText}>Main Features</Text>
 </View>
 <View style={styles.allcardContainer}>
   {/* First Row */}
   <View style={styles.cardRow}>
     {/* Card1 */}
     <View style={styles.cardContainer}>
       <View style={styles.logoContainer}>
         <Image
           source={require('../assets/Group.png')} // Replace with your logo image source
           style={styles.logo}
         />
       </View>
       <Text style={styles.text} >Diagnose your crop</Text>
       <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('disease-prediction')}>
         <Text style={styles.buttonText}>Diagnose Diseases</Text>
         <AntDesign name='right' size={16} style={styles.icon}/>
       </TouchableOpacity>
     </View>

     {/* Card2 */}
     <View style={styles.cardContainer}>
       <View style={styles.logoContainer}>
         <Image
           source={require('../assets/Group1.png')} // Replace with your logo image source
           style={styles.logo}
         />
       </View>
       <Text style={styles.text}>Buy Crops or other goods</Text>
       <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('buyProducts')}>
         <Text style={styles.buttonText}>Buy Goods</Text>
         <AntDesign name='right' size={16} style={styles.icon}/>
       </TouchableOpacity>
     </View>
   </View>

   {/* Second Row */}
   <View style={styles.cardRow}>
     {/* Third Card */}
     <View style={styles.cardContainer}>
       <View style={styles.logoContainer}>
         <Image
           source={require('../assets/Group.png')} // Replace with your logo image source
           style={styles.logo}
         />
       </View>
       <Text style={styles.text}>Diagnose your crop</Text>
       <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>Diagnose Diseases</Text>
         <AntDesign name='right' size={16} style={styles.icon}/>
       </TouchableOpacity>
     </View>

     {/* Fourth Card */}
     <View style={styles.cardContainer}>
       <View style={styles.logoContainer}>
         <Image
           source={require('../assets/Group.png')} // Replace with your logo image source
           style={styles.logo}
         />
       </View>
       <Text style={styles.text}>Diagnose your crop</Text>
       <TouchableOpacity style={styles.button}>
         <Text style={styles.buttonText}>Diagnose Diseases</Text>
         <AntDesign name='right' size={16} style={styles.icon}/>
       </TouchableOpacity>
     </View>
   </View>
   
   {/* Add more card rows here */}
   {/* <View style={styles.cardRow}>
     {/* Fifth Card */}
   {/* ... Your card code */}
   {/* </View> */}
 </View>
 {/* News Feed Component */}
   <View style={styles.newsFeedContainer}>
     <Text style={styles.newsText}>
       News Feed
     </Text>
   <NewsFeed base={''} clouds={{
         all: 0
       }} cod={0} coord={{
         lat: 0,
         lon: 0
       }} dt={0} id={0} main={{
         feels_like: 0,
         humidity: 0,
         pressure: 0,
         temp: 0,
         temp_max: 0,
         temp_min: 0
       }} name={''} sys={{
         country: '',
         id: 0,
         sunrise: 0,
         sunset: 0,
         type: 0
       }} timezone={0} visibility={0} weather={[]} wind={{
         deg: 0,
         speed: 0
       }}  />
   </View>
   {/* News Recommended Product Component */}
   <View style={styles.newsFeedContainer}>
     <Text style={styles.newsText}>
     Recommended Products
     </Text>
   <RecommendedProducts route={route} navigation={navigation}/>
   </View>
    {/* News Help and Customer Suport Component */}
    <View style={styles.newsFeedContainer}>
     <Text style={styles.newsText}>
     Help & Customer Support
     </Text>
    <View style={styles.HelpContainer}>
    <HelpandCustomerSuport/>
    </View>
   </View>
  
 </View>
 
</ScrollView>
   {/* floating action Component */}
   <FloatingButton/>
  {/* end of floating action Component */}
</View>
   )
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerContainer: {
    
  },
  headerWithShadow: {
    height:80,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 6, // Add elevation for Android shadow
  },
  contentContainer: {
    paddingTop: 5, // Add top padding to start content below the header
  },
  carousal: {
    width: '100%',
    height: responsiveHeight(30),
    backgroundColor: '#fff',
  },
  allcardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  cardRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  cardContainer: {
    width: 150,
    height: 165,
    flexShrink: 0,
    borderRadius: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 10, 
   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, 
    shadowRadius: 4,
    elevation: 4, 
  },
  logoContainer: {
    width: 80,
    height: 75,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // Adjust the spacing as needed
  },
  logo: {
    width: 41, // Width of the image
    height: 41, // Height of the image
    flexShrink: 0, // Prevent image from shrinking
    tintColor: '#4BA26A', // Color of the image
  },
  text: {
    width: 111,
    height: 11,
    flexShrink: 0,
    color: '#4BA26A',
    textAlign: 'center',
    fontFamily: 'PT Sans',
    fontSize: 9,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
    marginTop: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent:'space-between',
    height: 30,
    flexShrink: 0,
    backgroundColor: '#4BA26A',
    marginTop: 10, // Adjust the spacing as needed
    borderRadius: 5,
   
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontFamily: 'PT Sans',
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: '700',
    letterSpacing: 1,
    marginLeft:5,
  },
  rectangle: {
    width: 24,
    height: 18,
    flexShrink: 0,

    marginRight:5,
 
  },
  mainFeatureContainer: {
    width: '100%',
    height: 30,
    flexShrink: 0,
    marginLeft: 0,
    marginTop: '7%',
    marginBottom:'3%'
  },
  mainText: {
    color: '#000',
    fontFamily: 'PT Sans',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
     marginLeft:"10%",

  },
  newsFeedContainer:{
      marginTop:30,
      // marginLeft:10,
  },
  newsText:{
    color: '#000',
    fontFamily: 'Alatsi',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'bold',
      marginLeft:20,

  },
  HelpContainer:{
       display:"flex",
       justifyContent:'center',
       alignItems:'center',
  },
  icon: {
    width: 16.75,
    height: 27.586,
    color: '#FFF',
    marginRight:0,
    marginTop:10,
      marginLeft:10,
  },
  
});
