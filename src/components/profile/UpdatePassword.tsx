import React,{useState} from 'react';
import { View, Text, TouchableOpacity,SafeAreaView,Image, Alert,StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
type UpdatePasswordProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  };
const UpdatePassword:React.FC<UpdatePasswordProps> = ({navigation}) => {
    const [passwordVisible, setPasswordVisible] =useState(true); // State to manage password visibility
    const [text, setText] = useState('');
      
  return (
    <SafeAreaView style={styles.topContainer}>
    <View style={styles.container}>
    <View style={styles.iconContainer}>
         <AntDesign name='left' size={20} style={styles.icon} onPress={() =>navigation.goBack()} />
       
       </View>
       <View style={styles.imageContainer}>
         <Image source={require('../../assets/forget.png')}/>
       </View>
       <View style={styles.contentContainer}>
         <Text style={styles.text}>
         New Password
         </Text>
         <Text style={styles.subText}>
         Enter New Password
         </Text>
         <TextInput
      label="Enter New Password"
      left={<TextInput.Icon icon={require('../../assets/lock.png')} size={20}/>}
      secureTextEntry={!passwordVisible} // Set secureTextEntry based on passwordVisible state
      right={
        <TextInput.Icon
          icon={passwordVisible ? 'eye-off' : 'eye'} // Toggle icon based on passwordVisible state
          onPress={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility on icon press
        />
      }
      style={styles.input}
    />
      <Text style={styles.subText}>
      Confirm New password
         </Text>
       <TextInput
      label="Confirm New password"
      left={<TextInput.Icon icon={require('../../assets/lock.png')} size={20}/>}
      secureTextEntry={!passwordVisible} // Set secureTextEntry based on passwordVisible state
      right={
        <TextInput.Icon
          icon={passwordVisible ? 'eye-off' : 'eye'} // Toggle icon based on passwordVisible state
          onPress={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility on icon press
        />
      }
      style={styles.input}
    />
     <TouchableOpacity style={styles.button}>
     <Text style={styles.buttonText}>Send Link</Text>
   </TouchableOpacity>
   <View style={styles.loginContainer}>
     <Text style={styles.text1}>Having a Problem?</Text>
     <Text style={styles.loginText} onPress={()=>navigation.navigate('Signup')} >Send Again</Text>
   </View>
       </View>

  </View>
 </SafeAreaView>
  )
}

export default UpdatePassword

const styles=StyleSheet.create({
    topContainer:{
      flex:1,
    },
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    iconContainer: {
      width: '100%',
      height: 58.483,
      flexDirection: 'row',
      backgroundColor: '#fff'
    },
    icon: {
      width: 16.75,
      height: 27.586,
      color: '#000000',
      marginLeft: 10,
      marginTop: 20,
    },
    imageContainer:{
      width:'100%',
      height:responsiveHeight(20),
       flex:1,
       backgroundColor:'#fff',
       justifyContent:'center',
       alignItems:'center'
    },
    contentContainer:{
         flex:1,
         paddingHorizontal:20,
    },
    text: {
      color: '#000',
      fontFamily: 'PT Sans',
      fontSize: 24,
      fontStyle: 'normal',
      fontWeight: '700',
     
     
    },
    subText: {
      color: '#9A9595',
      textAlign: 'justify',
      fontFamily: 'PT Sans',
      fontSize: 18,
      fontStyle: 'normal',
      fontWeight: '400',
       marginTop:10,
    },
    input:{
      backgroundColor:'#fff',
      marginTop:20,
  },
  button: {
    width: '100%',
    height: 40,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#4BA26A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:50,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  
  },
  loginContainer:{
    flexDirection:'row',
    marginTop:30,
  }
  ,
  loginText: {
    color: '#4BA26A',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft:10,
    marginTop:4,
  },
  text1: {
    color: '#B0ABAB',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft:50,
    marginTop:5,
  },
  })