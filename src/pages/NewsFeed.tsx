import React,{useState,useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios'
interface NewsItem {
  id: string;
  title: string;
  description: string;
  image: any; // Change the type of 'image' to 'any'
}
interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}

const NewsFeed: React.FC<WeatherData> = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
  const Wheater=async()=>{
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=31.5204&lon=74.3587&appid=816a1a76601021e2a3335451468402ea');
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
}
useEffect(() => {
  Wheater()
},[])
  const images = [
    require('../assets/leave.png'),
    require('../assets/leave.png'),
    require('../assets/leave.png'),
  ];

  const data: NewsItem[] = [
    { id: '1', title: 'Disease your crop', description: 'Buy Crops', image: images[0] },
    { id: '2', title: 'Disease your crop', description: 'Buy Crops', image: images[1] },
    { id: '3', title: 'Disease your crop', description: 'Buy Crops', image: images[2] },
    // Add more news items as needed
  ];
//  if(weatherData?.weather[0].description==='smoke')
//  {
      
//  }
  const renderNewsItem = ({ item, index }: { item: NewsItem; index: number }) => (
     <TouchableOpacity >
      <View style={styles.wheatherCard}>
      <ImageBackground source={require("../assets/Rectangle.png")} style={{ height: '100%',width:'100%', }} />
      <View style={{ position: "absolute",}}>
      <Image source={require('../assets/rain.png')} style={styles.image}/>
      <Text style={styles.Title}>{weatherData?.main.temp}°C</Text>
      <View style={styles.magnitude}>
      <Text style={styles.lati}>{weatherData?.coord.lat}°</Text>
      <Text style={styles.logi}>{weatherData?.coord.lon}°</Text>
      </View>
      <Text style={styles.country}>
      {weatherData?.name}
      </Text>
      </View>
    </View>
     </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      horizontal // Set the horizontal property to true for horizontal scrolling
      showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
      keyExtractor={(item) => item.id}
      renderItem={renderNewsItem}
    />
  );
};

const styles = StyleSheet.create({
  wheatherCard: {
    width: 320, // Adjust the item width as needed
    height:170, // Adjust the item height as needed
    margin: 20,
    backgroundColor: '#fff', // Background color for the card
    borderRadius: 0,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'space-between', // Add space between elements vertically
    
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2, // Adjust shadow opacity as needed
    shadowRadius: 4,
    elevation: 4, // Add elevation for Android shadow
  },
  cardContent:{
    width: '100%',
    height: 124,
    flexShrink: 0,
    marginTop:20,
   
  }
  ,
  cardImage: {
    width: '100%', // Width of the card's individual image
    height: 80, // Height of the card's individual image
    borderRadius: 50, // Rounded corners for the image
    marginBottom: 10, // Add margin below the image
  },
  Title: {
    color: '#FFF',
    fontFamily: 'SF Pro Display',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 41,
    letterSpacing: 0.374,
  bottom:100,
  right:70,
  },
  newsDescription: {
    fontSize: 14,
    color: 'gray',
  },
  companyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image:{
      top:'-1%',
      right:'-70%',
      width:130,
      height:130,
  },
  magnitude:{
      flexDirection:'row',
      right:70,
      marginTop:40,
  },
  lati:{
    marginRight:10,
    bottom:100,
    color: '#000',
    fontFamily: 'SF Pro Text',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',
    
    letterSpacing: -0.078, // You can adjust this value
  },
  logi:{
    bottom:100,
    
    color: '#000',
    fontFamily: 'SF Pro Text',
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: '400',

    letterSpacing: -0.078, // You can adjust this value
  },
  country:{
    color: '#FFF',
    fontFamily: 'SF Pro Text',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: 'bold',
     bottom:80,
     right:70,
    letterSpacing: 0,
   marginTop:-15,
  }
});

export default NewsFeed;
