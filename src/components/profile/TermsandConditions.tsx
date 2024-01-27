import { Image, SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RouteProp, NavigationProp } from '@react-navigation/native';

type TermsandConditions = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};

const TermsandConditions:React.FC<TermsandConditions> = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name='left' size={20} style={styles.icon} onPress={() => navigation.goBack()} />
        <Image source={require('../../assets/about.png')} style={styles.logo} />
        <Text style={styles.privacyText}>
        Terms & Conditions
        </Text>
      </View>
      <ScrollView style={styles.textContainer}>
        <Text style={styles.text}>By accessing and using our agriculture trading app, you agree to comply with our terms and conditions. Our app provides a platform for users to trade agricultural products, connecting buyers and sellers. We strive to maintain accurate listings, but transactions are the sole responsibility of the parties involved. Please use our app responsibly and refrain from engaging in prohibited activities.</Text>
       
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

export default TermsandConditions

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
    },
    
  });