import React,{useState} from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TouchableOpacity,SafeAreaView,StyleSheet,Image,ActivityIndicator } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-paper';
import {useAppDispatch } from '../store/hooks';
// import { facebookLogin, googleLogin } from '../store/authActions';
import auth from '@react-native-firebase/auth';
import { useToast } from "react-native-toast-notifications";
interface LoginProps {
    navigation: {
      navigate: (routeName: string) => void;
    };
  }
  const Login: React.FC<LoginProps> = (props) => {
    const [passwordVisible, setPasswordVisible] =useState(false); // State to manage password visibility
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading]=useState<boolean>(false)
    const currentUser = auth().currentUser;
    const toast = useToast();
  const dispatch=useAppDispatch()
 const LoginwithFacebook=async()=>{
  // await dispatch(facebookLogin());
 
//   if (currentUser) {
//     props.navigation.navigate('TabNavigation')
//   } else {
//     // No user is signed in
//     console.log('No user is signed in');
//   }
 
    console.warn("Login with facebook")
 }
 const LoginwithGoogle=async()=>{
//   await dispatch(googleLogin());
//   if (currentUser) {
  
//     props.navigation.navigate('TabNavigation')
//   } else {
//     // No user is signed in
//     console.log('No user is signed in');
//   }
// console.log("Login with facebook")
console.warn("Login with google")
 }
 const handleSignIn = async () => {
  // setLoading(true)
 
  // try {
  //   await auth().signInWithEmailAndPassword(name, password);
  //   if (currentUser) {
  //     setLoading(false)
  //     toast.show('user sucessfully login!', {
  //       type: 'success',
  //       placement: 'top',
  //       duration: 3000,
  //       style: styles.toastContainer,
  //       textStyle: styles.toastText,
        
  //     });
  //     props.navigation.navigate('TabNavigation')
  //   } else {
  //     setLoading(false)
  //     // console.log('No user is signed in');
  //     Alert.alert('No user is signed in')
  //   }
  // } catch (error:any) {
  //   setLoading(false)
   
  //   Alert.alert('Error', `Sign in failed: ${error.message}`);
  // }
  console.warn("Login successful")
  props.navigation.navigate('TabNavigation')
};

  return (
    <SafeAreaView>
     <ScrollView style={styles.container}>
       <View style={styles.imageContainer}>
       <Image source={require('../assets/login.png')}/>
       </View>
       <View style={styles.contentContainer}>
        <Text style={styles.accessText}>
        Log In
        </Text>
        {/* <Text style={styles.text}>
        please sign in to continue
        </Text> */}
       <View style={styles.inputContainer}>
       <TextInput
      label="Username"
      left={<TextInput.Icon icon="account" size={25} />}
      style={styles.input}
      onChangeText={(text) => setName(text)}
      value={name}
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
      onChangeText={(text) => setPassword(text)}
      value={password}
    />
       <Text style={styles.forgotText} onPress={()=>props.navigation.navigate('ForgotPassword')}>
    Forgot Password
    </Text>
    {
       loading?(  <ActivityIndicator size="large" color="#0000ff" />): <TouchableOpacity style={styles.button} onPress={handleSignIn}>
       <Text style={styles.buttonText}>Log in</Text>
     </TouchableOpacity>
    }
    
    <View style={styles.lineContainer}>
    <View style={styles.horizontalLine} />
      <Text style={styles.text1}>
      or sign in with
      </Text>
      <View style={styles.horizontalLine} />
    </View>
     <View style={styles.authContainer}>
    <TouchableOpacity onPress={LoginwithFacebook}>
    <Image source={require('../assets/facebook.png')} style={styles.image} />
    </TouchableOpacity>
    <TouchableOpacity onPress={LoginwithGoogle}>
    <Image source={require('../assets/google.png')} style={styles.image1}/>
    </TouchableOpacity>
    </View>
    <View style={styles.loginContainer}>
      <Text style={styles.text}>Don’t have an account?</Text>
      <Text style={styles.loginText} onPress={()=>props.navigation.navigate('accounts')} >Sign Up</Text>
    </View>
       </View >
      
       </View>
     </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
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
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
    marginLeft:30
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
  forgotText:{
    color: '#4BA26A',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign:'right',
    marginTop:15,
    marginBottom:20
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
