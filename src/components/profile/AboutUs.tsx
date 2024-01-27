import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RouteProp, NavigationProp } from '@react-navigation/native';
type AboutUsProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  };
  
const AboutUs:React.FC<AboutUsProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name='left' size={20} style={styles.icon} onPress={() => navigation.goBack()} />
          <Image source={require('../../assets/about.png')} style={styles.logo} />
          <Text style={styles.privacyText}>
          About us
          </Text>
        </View>
        <ScrollView style={styles.textContainer}>
          <Text style={styles.text}>SmartAgro is focused on trading of crops and other agriculture goods and crop disease that could tackle both of the aforementioned problems. This project could focus on improving the trading of crops and other goods (farming equipment and fertilizers) specifically by creating a platform that connects buyers and sellers in a more efficient and transparent way. This platform could incorporate features such as quality control measures, real-time price tracking, and logistics management to help ensure that crops are traded fairly and efficiently. It could also incorporate information about crop diseases, allowing buyers to make more informed decisions about the crops they purchase</Text>
        </ScrollView>
        <View style={styles.bottomContainer}>
            <Image source={require('../../assets/atrate.png')}/>
          <Text style={styles.bottomText}>
           copyright smartAgro team 
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default AboutUs

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    iconContainer: {
      width: '100%',
      height: 58.483,
      flexDirection: 'row',
      backgroundColor: '#BEE3CB'
    },
    icon: {
      width: 16.75,
      height: 27.586,
      color: '#FFFFFF',
      marginLeft: 10,
      marginTop: 20,
    },
    logo: {
      width: 36.432,
      height: 36.414,
      flexShrink: 0,
      marginLeft: 20,
      marginTop: 15,
    },
    privacyText: {
      color: '#FFFFFF',
      fontFamily: "PT Sans",
      fontSize: 24,
      marginLeft: 10,
      marginTop: 15,
    },
    textContainer: {
      flex: 1,
      paddingHorizontal: 20,
    
  
  
    },
    text: {
      color: '#000',
      fontFamily: "PT Sans",
      fontSize: 18,
      marginBottom: 10,
      marginTop:50,
    },
  
    bottomContainer: {
      flexDirection:'row',
      backgroundColor: '#fff',
      justifyContent:'center'
    },
    bottomText: {
      textAlign: 'center',
      color: '#000',
      marginTop:15,
    }
  });