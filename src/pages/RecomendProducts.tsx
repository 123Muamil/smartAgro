import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RouteProp, NavigationProp } from '@react-navigation/native';
type RecommendedProductsProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
const images = [
  require('../assets/mono.png'),
  require('../assets/pro_2.jpeg'),
  require('../assets/pro_3.jpg'),
  require('../assets/pro_4.jpeg'),
];

const data = [
  { id: '1', title: 'Aries Agro limited  Agromin Gold', description: 'Price :  Rs. 2060 .00 ', image: images[0] },
  { id: '2', title: 'Aries Agro limited  Agromin Gold', description: 'Price :  Rs. 2060 .00 ', image: images[1] },
  { id: '3', title: 'Aries Agro limited  Agromin Gold', description: 'Price :  Rs. 2060 .00 ',image: images[2] },
  { id: '4', title: 'Aries Agro limited  Agromin Gold', description: 'Price :  Rs. 2060 .00 ', image: images[3] },
  // Add more recommended products as needed
];

const MyList:React.FC<RecommendedProductsProps> = ({navigation}) => {
  return (
    <ScrollView nestedScrollEnabled={true}>
      <View style={styles.cardContainer}>
        {data.map((item) => (
          <View key={item.id}>
            <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('detail', { id: item.id })}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.title}</Text>
              <Text style={styles.text}>{item.description}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    
    padding: 20,
  },
  card: {
    width: 250, // Adjust the item width as needed
    height:300,
    padding:10,
    backgroundColor: '#fff', // Background color for the card
    borderRadius: 10,
    alignItems: 'center', // Center content horizontally

    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Adjust shadow opacity as needed
    shadowRadius: 4,
    elevation: 4, // Add elevation for Android shadow
  },
  image: {
    width: '100%', // Set the width and height of the image as per your design
    height: 100,
    resizeMode: 'contain', // Adjust the resizeMode as needed
  },
  text: {
    color: '#000',
    fontFamily: 'Alatsi',
    fontSize: 12,
    fontStyle: 'normal',
    marginTop: 20,
   
  },
});

export default MyList;
