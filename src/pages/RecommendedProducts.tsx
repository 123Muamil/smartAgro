import React, { useEffect, useRef, useState } from "react";
import { View, Dimensions, Image,StyleSheet ,TouchableOpacity,Text} from "react-native";
import Carousel from "react-native-snap-carousel";
import axios from 'axios'
// interface RecommendedProduct {
//   id: string;
//   title: string;
//   description: string;
//   image: any; // Change the type of 'image' to 'any'
// }
import { RouteProp, NavigationProp } from '@react-navigation/native';
type RecommendedProductsProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
const RecommendedProducts: React.FC<RecommendedProductsProps> = ({navigation}) => {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<Carousel<any>>(null);
 
  const getId=(id:any)=>{
    console.log("The id is:",id)
  }
  const carouselData = [
    {
      id: 1,
      title: 'Triumph',
      price: 'Mono Ammonium Phosphate',
      save: 'Save : ₹ 1000.00',
      imageSource: require('../assets/mono.png'), // Provide image source 1
    },
    {
      id: 2,
      title: 'Cartap',
      price: 'Hydrochloride',
      save: 'Save : ₹ 1000.00',
      imageSource: require('../assets/pro_2.jpeg'), // Provide image source 2
    },
    {
        id: 3,
        title: 'Artal',
        price: 'Artal Arooz',
        save: 'Save : ₹ 1000.00',
        imageSource: require('../assets/pro_3.jpg'), // Provide image source 1
      },
      {
        id: 4,
        title: 'Nutri Arroz',
        price: 'Nutri Arroz Inico',
        save: 'Save : ₹ 1000.00',
        imageSource: require('../assets/pro_4.jpeg'), // Provide image source 2
      },
      {
        id: 5,
        title: 'Amino Acid',
        price: 'Amino Acid Organic Fertilizer',
        save: 'Save : ₹ 1000.00',
        imageSource: require('../assets/pro_5.png'), // Provide image source 1
      }
  ];

   
      const renderItem = ({ item, index }: { item: any; index: number }) => {
        return (
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <TouchableOpacity style={styles.card} key={index} onPress={() => navigation.navigate('detail', { id: item.id })}>
                <View style={styles.imageContainer}>
                  <Image source={item.imageSource} style={styles.image} />
                </View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
              
              </TouchableOpacity>
            </View>
          </View>
        );
      };
    
      
      
      
      
      
      
  useEffect(() => {
    // Auto-scroll every 2 seconds
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (activeIndex + 1) % carouselData.length;
        carouselRef.current.snapToItem(nextIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex, carouselData.length]);

  return (
    <View>
      <Carousel
        ref={carouselRef}
        data={carouselData}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={200}
        onSnapToItem={(index) => setActiveIndex(index)}
        
      />
      {/* <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeIndex}
        containerStyle={{ paddingTop: 20 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 6,
          backgroundColor: "green", // Active dot color
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 6,
          backgroundColor: "red", // Inactive dot color
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      /> */}
    </View>
  );
};

export default RecommendedProducts;

const styles=StyleSheet.create({
    container:{
    
    },
    // image:{
        
        
    //     borderRadius:10,
    //     transform: [{ scale: 1 }], // Add scale animation
      
    // },
    cardContainer: {
      flexDirection: 'row',
    },
    card: {
      width: '90%',
      height:'auto', 
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
      width:'100%'
    },
    image: {
      width: '100%',
      height: 150,
      margin:10,
 

    },
    cardtitle: {
      fontSize: 12,
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
      marginTop:0,
      color:'#000',
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
    title: {
      color: '#272D2F',
      fontFamily: 'Aoboshi One',
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 30.784,
    },
})