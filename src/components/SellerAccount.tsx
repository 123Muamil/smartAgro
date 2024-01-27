import React,{useState} from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TouchableOpacity, Alert,SafeAreaView,StyleSheet,Image,ActivityIndicator } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
// import auth from '@react-native-firebase/auth';
import { useToast } from "react-native-toast-notifications";
interface SignupProps {
    navigation: {
      navigate: (routeName: string) => void;
    };
  }

const SellerAccount:React.FC<SignupProps> = (props) => {
    const [passwordVisible, setPasswordVisible] =useState(false); // State to manage password visibility
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [bussinessName,setBussinessName]=useState('')
    const [bussinessAddress,setBussinessAddress]=useState('')
    const [cnicNumber,setCnicNumber]=useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword,setConfirmPassword]=useState('')
    const [loading,setLoading]=useState<boolean>(false)
    const toast = useToast();
    const data={
      userName,
      phoneNumber,
      email,
      password,
    
    }
    const handleRegistration = async () => {
    //   if(userName.length===0)
    //   {
    //     toast.show('Please enter the first name!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,
          
    //     });
    //   }
    //   else if(phoneNumber.length===0)
    //   {
    //     toast.show('Please enter the last name!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,
          
    //     });
    //   }
    //   else if(email.length===0)
    //   {
    //     toast.show('Please enter the email!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,
          
    //     });
    //   }
    //   else if(password.length===0)
    //   {
    //     toast.show('Please enter the password!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,
          
    //     });
    //   }
    //   else if(confirmPassword.length===0)
    //   {
    //     toast.show('Please enter the confirm password!', {
    //       type: 'success',
    //       placement: 'top',
    //       duration: 3000,
    //       style: styles.toastContainer,
    //       textStyle: styles.toastText,
          
    //     });
    //   }
    //   // else if(password.length===confirmPassword.length)
    //   // {
    //   //   toast.show('password and confirm password must match!', {
    //   //     type: 'success',
    //   //     placement: 'top',
    //   //     duration: 3000,
    //   //     style: styles.toastContainer,
    //   //     textStyle: styles.toastText,
          
    //   //   });
    //   // }
    //   else 
    //   {
    //     // setLoading(true)
    //     // try {
        
    //     //   // Create a new user with email and password
    //     //   const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    
    //     //   // Update the user profile with additional information
    //     //   await userCredential.user?.updateProfile({
    //     //     displayName: `${userName} ${lastName}`,
    //     //   });
    //     //  setLoading(false)
    //     //  props.navigation.navigate('Login')
    //     // } catch (error:any) {
    //     //   setLoading(false)
    //     //   Alert.alert('Registration Error:', error.message)
    //     //   console.error('Registration Error:', error.message);
    //     // }
    //   }
     console.warn("Seller account created successfuly")
    };
  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
      <Image source={require('../assets/login.png')}/>
      </View>
      <View style={styles.contentContainer}>
       <Text style={styles.accessText}>
       Sign Up
       </Text>
      <View style={styles.inputContainer}>
    
      <TextInput
     label="Username"
     left={<TextInput.Icon icon="account" size={25} />}
     style={styles.input}
     value={userName} onChangeText={setUserName}
   />
    <TextInput
      label="email"
     left={<TextInput.Icon icon="email" size={25}/>}
     style={styles.input}
     value={email} onChangeText={setEmail}
   />
      <TextInput
      label="Phone Number"
     left={<TextInput.Icon icon="phone" size={25}/>}
     style={styles.input}
     value={phoneNumber} onChangeText={setPhoneNumber}
   />
    <TextInput
     label="Bussiness Name"
     left={<TextInput.Icon icon="account-circle" size={25}/>}
     style={styles.input}
     value={bussinessName} onChangeText={setBussinessName}
   />
    <TextInput
     label="Bussiness Address"
     left={<TextInput.Icon icon="map-marker" size={25}/>}
     style={styles.input}
     value={bussinessAddress} onChangeText={setBussinessAddress}
   />
    <TextInput
     label="CNIC Number"
     left={<TextInput.Icon icon="card-account-details" size={25}/>}
     style={styles.input}
     value={cnicNumber} onChangeText={setCnicNumber}
   />
    <TextInput
     label="Password"
     left={<TextInput.Icon icon={require('../assets/lock.png')} size={20}/>}
     secureTextEntry={!passwordVisible} // Set secureTextEntry based on passwordVisible state
     right={
       <TextInput.Icon
         icon={passwordVisible ? 'eye' : 'eye-off'} // Toggle icon based on passwordVisible state
         onPress={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility on icon press
       />
     }
     style={styles.input}
     value={password} onChangeText={setPassword}
   />
    <TextInput
     label="Confirm password"
     left={<TextInput.Icon icon={require('../assets/lock.png')} size={20}/>}
     secureTextEntry={!passwordVisible} // Set secureTextEntry based on passwordVisible state
     right={
       <TextInput.Icon
         icon={passwordVisible ? 'eye' : 'eye-off'} // Toggle icon based on passwordVisible state
         onPress={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility on icon press
       />
     }
     style={styles.input}
     value={confirmPassword} onChangeText={setConfirmPassword}
   />
   {
      loading?(  <ActivityIndicator size="large" color="#0000ff" />):<TouchableOpacity style={styles.button} onPress={handleRegistration}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
   }
   <View style={styles.loginContainer}>
     <Text style={styles.text}>Already have an account?</Text>
     <Text style={styles.loginText} onPress={()=>props.navigation.navigate('Login')} >Log in</Text>
   </View>
      </View >
     
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default SellerAccount

const styles=StyleSheet.create({
    container:{
      width:'100%',
      height:'100%',
      backgroundColor:'#fff',
    },
    imageContainer:{
         justifyContent:'center',
         alignItems:'center',
         height:responsiveHeight(30),
    },
    contentContainer:{
      backgroundColor:'#fff',
    },
    accessText:{
      color: '#000',
      fontFamily: 'PT Sans',
      fontSize: 32,
      fontStyle: 'normal',
      fontWeight: '700',
      marginLeft:30,
      marginTop:20,
    },
    text: {
      color: '#B0ABAB',
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      marginLeft:50,
      marginTop:5,
    },
    inputContainer:{
         paddingHorizontal:20,
    },
    input:{
         backgroundColor:'#fff',
         marginTop:10,
    },
    button: {
      width: '100%',
      height: 40,
      flexShrink: 0,
      borderRadius: 10,
      backgroundColor: '#4BA26A',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:20,
    },
    buttonText: {
      color: '#FFF',
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
      
    },
    lineContainer:{
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      marginTop:20,
    }
    ,
    text1: {
      color: '#262626',
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '400',
      marginRight:10,
      marginLeft:10,
    },
    horizontalLine: {
      width: 100,
      height: 1,
      backgroundColor: '#B0ABAB',
      marginTop:15,
      
    },
    authContainer: {
      display: 'flex',
      width: '100%',
      height: 87.569,
      padding: 2,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row', 
      flexShrink: 0,
    },
    image:{
       width:45.87,
       height:45,
       flexShrink:0,
       marginRight:20,
    },
    image1:{
      width:45.87,
      height:45,
      flexShrink:0,
      marginLeft:40,
   },
    loginContainer:{
      flexDirection:'row',
      marginTop:20,
      marginBottom:20,
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
    toastContainer: {
      backgroundColor: '#4CAF50', // Green color for success
      padding: 16,
      borderRadius: 8,
      marginHorizontal: 16,
      marginVertical: 70,
      width:'100%'
    },
    toastText: {
      color: 'white',
    },
})
