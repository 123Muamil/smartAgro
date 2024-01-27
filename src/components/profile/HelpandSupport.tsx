import { SafeAreaView,StyleSheet, Text,TouchableOpacity,Image, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
type HelpandSupportProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  };
const HelpandSupport:React.FC<HelpandSupportProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <AntDesign name='left' size={20} style={styles.icon} onPress={() => navigation.goBack()} />
          <Image source={require('../../assets/help1.png')} style={styles.logo} />
          <Text style={styles.privacyText}>
          Help & Support
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('about')}>
        <View style={styles.leftContainer}>
        <View style={styles.logo}>
        <Image source={require('../../assets/about1.png')}/>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>About Us</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="right" size={20} color="#4BA26A" />
      </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('term')}>
        <View style={styles.leftContainer}>
        <View style={styles.logo}>
        <Image source={require('../../assets/term.png')}/>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>Terms and condition</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="right" size={20} color="#4BA26A" />
      </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HelpandSupport

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    iconContainer: {
      width: '100%',
      height: 58.483,
      flexDirection: 'row',
      backgroundColor: '#BEE3CB',
      marginBottom:30,
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
    text1: {
      color: '#000',
      fontFamily: "PT Sans",
      fontSize: 18,
      marginBottom: 10,
      marginTop:50,
    },
    text2: {
      color: '#000',
      fontFamily: "PT Sans",
      fontSize: 18,
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
    button: {
      width: 440,
      height: 70,
      flexShrink: 0,
      borderRadius: 14,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      shadowColor: 'rgba(63, 76, 95, 0.12)',
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      elevation: 6,
      marginLeft:0,
      marginTop:10,
    },
    leftContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    centerContainer: {
      flex: 1,
      marginLeft: 10,
      justifyContent:'center'
    }
    ,
  text: {
    color: '#000',
    fontFamily: 'PT Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 12,
    letterSpacing: 1,
  },
  rightContainer: {
    marginLeft: 20,
  },
  });
  