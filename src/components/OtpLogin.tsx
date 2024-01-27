import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Alert
} from "react-native";
import React, { useState, useRef } from "react";
import { responsiveHeight } from 'react-native-responsive-dimensions'
import PhoneInput from "react-native-phone-number-input";
import { useAppSelector, useAppDispatch } from '../store/hooks'
import { sendOTP } from "../store/authActions";
import { startLoading, stopLoading } from '../store/authSlice';
interface OtpLoginProps {
  navigation: {
    navigate: (routeName: string) => void;
  };
}
const OtpLogin: React.FC<OtpLoginProps> = (props) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);
  const isError = useAppSelector((state) => state.posts.error);
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) =>state.posts.isLoading );
  
  // const confirmation=useAppSelector((state)=>state.posts.confirmationData)
  const handleOtp=async()=>{
      try {
        if(formattedValue.length===0)
        {
             Alert.alert("please fill the input field")
        }
        else
        {
          dispatch(startLoading());
          const reuslt=await dispatch(sendOTP(formattedValue));
           dispatch(stopLoading());
          props.navigation.navigate('fillOtp')
        }
      } catch (error) {
        console.log(isError)
      }
  }
  
  return (
    <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
        <Image source={require('../assets/otp_page.png')} style={styles.banner}/>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.textContainer}>
          <Text style={styles.agriAppText1}> SmartAgro </Text>
          <Text style={styles.agriAppText}>An AI based system for Disease Diagnostic  </Text>
          <Text style={styles.agriAppText}>and Crop Prediction </Text>
        </View>
        <StatusBar barStyle="dark-content" />
        {/* {showMessage && (
            <View >
              <Text>Value : {value}</Text>
              <Text>Formatted Value : {formattedValue}</Text>
              <Text>Valid : {valid ? "true" : "false"}</Text>
            </View>
          )} */}
        <View style={styles.wrapper}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="PK"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
            containerStyle={styles.phone}
          />
        
        <View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
              const checkValid = phoneInput.current?.isValidNumber(value);
              setShowMessage(true);
              setValid(checkValid ? checkValid : false);
              handleOtp()
            }}
          >
            <Text style={styles.buttonText}>Get OTP</Text>
          </TouchableOpacity>
      )}
    </View>
        
          
         
        </View>
       <View style={styles.tryContainer}>
       <Text onPress={()=>props.navigation.navigate('accounts')} style={styles.tryText}>Try another way</Text>
       </View>
      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  Container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  indicator:{
   flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  topView: {
    width:'100%',
    height: responsiveHeight(40),
    backgroundColor: '#fff',
    padding:'15%',
  },
  banner: {
    width: "100%",
    height: '100%',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
   
  },
  bottomView: {
    flex: 1, // Use flex: 1 to take remaining space
    backgroundColor: '#fff',
  },
  textContainer: {
    alignItems: 'center',
  },
  agriAppText: {
    color: '#000',
  },
  agriAppText1: {
    color: '#000',
    fontSize:25,
    fontWeight: "bold",
    marginBottom: 15
  },

  wrapper: {
    paddingHorizontal: 20, 
    marginTop:50,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 5,
    width: '100%',
    height: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    width: '100%',
  
    alignItems: 'center',
    borderRadius:10,
    marginBottom:60,
   
  },
  tryContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  tryText:{
     marginTop:20,
     color:'#000',
     textAlign:'center',
     justifyContent:'center',
     alignItems:'center'
  }
});

export default OtpLogin;
