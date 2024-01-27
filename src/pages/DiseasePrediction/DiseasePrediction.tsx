import { StyleSheet, Text, View,ScrollView,Image,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import MyHeader from '../../components/TabNavigation/MyHeader'
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'
type DiseasePredictionProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  };
const DiseasePrediction:React.FC<DiseasePredictionProps> = ({ route, navigation }) => {
  const [image, setImage] = useState<string | null>(null);
 
  
  const Wheater=async()=>{
       const response= await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=31.5204&lon=74.3587&appid=816a1a76601021e2a3335451468402ea')
       console.log("The response is:",response.data)
  }
  const imagePick = () => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
    });
  };
  return (
    <View style={styles.conatiner}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => navigation.navigate('profile')}
        style={styles.headerWithShadow}
      />
      <ScrollView>
      <View style={styles.contentContainer}>
         <TouchableOpacity onPress={imagePick}>
         <Image style={styles.image} source={image ? { uri: image } : require('../../assets/wheat.jpg')}/>
         </TouchableOpacity>

       <View style={styles.buyNowbuttonContainer}>
         <TouchableOpacity style={styles.buyNowbutton} onPress={Wheater}>
      <Text style={styles.buynowbuttonText}>Predict Disease</Text>
    </TouchableOpacity>

         </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default DiseasePrediction

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor:'#fff',
        height:'100%',
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
        elevation: 6, 
      },
      contentContainer: {
       
        paddingTop: 20, 
        marginHorizontal:20,
      },
      image:{
        width:'100%',
        height:200,
        borderRadius:20,
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
})