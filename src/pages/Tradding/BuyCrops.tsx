import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Carousal from './Carousal';
import RecomendProducts from '../RecomendProducts'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import FloatingButton1 from '../../components/profile/FloatingButton1';
type BuyCropsProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
const BuyCrops:React.FC<BuyCropsProps> = ({route,navigation}) => {
  return (
    <SafeAreaView>
      
      <View style={{ overflow: 'hidden', paddingBottom: 1 }}>
        <View style={styles.topContainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circularContainer2}></View>
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
      <View style={styles.contentContianer}>
      <ScrollView nestedScrollEnabled={true}>
        <View style={styles.carousal}>
          <Carousal />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>Categories</Text>
          <View style={styles.cardContainer}>
            {/* Card 1 */}
            <View >
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('buyProducts')}>
              <Image
                source={require('../../assets/cart.png')} // Replace with your image path
                style={styles.logo}
              />
              <Text style={styles.text1}>Shop</Text>
              </TouchableOpacity>
            </View>
            {/* Card 2 */}
            <View style={styles.card}>
            <TouchableOpacity style={styles.card}>
              <Image
                source={require('../../assets/comments.png')} // Replace with your image path
                style={styles.logo}
              />
              <Text style={styles.text1}>Community</Text>
              </TouchableOpacity>
            </View>
            {/* Card 3 */}
            <View style={styles.card}>
            <TouchableOpacity style={styles.card}>
              <Image
                source={require('../../assets/truck-delivery.png')} // Replace with your image path
                style={styles.logo}
              />
              <Text style={styles.text1}>Delivery</Text>
              </TouchableOpacity>
            </View>
            {/* Card 4 */}
            <View >
              <TouchableOpacity style={styles.card}>
              <Image
                source={require('../../assets/diamond.png')} // Replace with your image path
                style={styles.logo}
              />
              <Text style={styles.text1}>Best Offers</Text>
              </TouchableOpacity>
            </View>
            {/* Card 5 */}
            <View >
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('buyProducts')}>
              <Image
                source={require('../../assets/cart.png')} // Replace with your image path
                style={styles.logo}
              />
              <Text style={styles.text1}>Buy Products</Text>
              </TouchableOpacity>
            </View>
            {/* Card 6 */}
            <View >
            <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('SmartAgro')}>
              <Image
                source={require('../../assets/cart.png')} // Replace with your image path
                style={styles.logo}
              />
              <Text style={styles.text1}>Sell Products</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View  style={styles.newsFeedContainer}>
          <Text style={styles.newsText}>
            Recommended Products
          </Text>
        <RecomendProducts route={route} navigation={navigation}/>
        </View>
      </ScrollView>
      
      </View>
         {/* floating action Component */}
   <FloatingButton1/>
  {/* end of floating action Component */}
    </SafeAreaView>
  );
};

export default BuyCrops;

const styles = StyleSheet.create({
  contentContianer:{
   backgroundColor:'#fff',
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
  carousal: {
    width: '100%',
    height: responsiveHeight(30),
    backgroundColor: '#fff',
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
  categoryContainer: {
    width: '100%',
    backgroundColor: '#fff',

  },
  categoryText: {
    color: '#000',
    fontFamily: 'Alatsi',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 20,
    marginTop: 50,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 20,
    marginTop: 20,
    
  },
  card: {
    width: 79.391,
    height: 79.391,
    flexShrink: 0,
    aspectRatio: 1, // Ensure the aspect ratio remains 1:1
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
   
   
    padding: 20, // Add padding around elements
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Adjust shadow opacity as needed
    shadowRadius: 4,
    elevation: 4, // Add elevation for Android shadow
  },
  logo: {
    width: 30,
    height: 30,
    flexShrink: 0,
  },
  text1: {
    width: 69,
    height: 13,
    flexShrink: 0,
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Aoboshi One',
    fontSize: 8,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop:10,
  },
  newsFeedContainer:{
    marginTop:30,
    // marginLeft:10,
    paddingBottom:150,
},
newsText:{
  color: '#000',
  fontFamily: 'Alatsi',
  fontSize: 16,
  fontStyle: 'normal',
  fontWeight: '400',
    marginLeft:20,
},
});
