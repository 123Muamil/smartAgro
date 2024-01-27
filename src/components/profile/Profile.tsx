import React, { useState,useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text,TextInput, View, TouchableOpacity, Image,ScrollView, Alert } from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import ImagePicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo'
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
const Profile: React.FC = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [displayName, setDisplayName] = useState<any>();
  const [email, setEmail] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<any>();
  const [password, setPassword] = useState<string>('');
  const [photoURL, setPhotoURL] = useState<string>('');
  const data={
    displayName,
    email,
    phoneNumber,
    password,
    photoURL
  }
 
 
  const imagePick = () => {
    ImagePicker.openPicker({
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setPhotoURL(image.path);
    });
  };
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
        setDisplayName(authUser.displayName || '');
        setEmail(authUser.email || '');
        setPhoneNumber(authUser.phoneNumber || '');
        setPhotoURL(authUser.photoURL || '');
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const updateProfile = async () => {
    if (user) {
      // console.log("The data is:",data)
      // console.log("The data is:",user)
      try {
      // Update display name and photo URL
      // await user.updateProfile({
      //   displayName: displayName || user.displayName || undefined,
      //   photoURL: photoURL || user.photoURL || undefined,
      // });

      // Update email (requires re-authentication)
      if (email  ) {
        console.log("The email is:",email)
        // console.log("The password is:",password)
        try {
          // You can use any valid password for reauthentication
          // const credential = auth.EmailAuthProvider.credential(user.email || '', password);
          // console.log("The credential:",credential)
          // const response=await user.reauthenticateWithCredential(credential);
          // console.log("The response is:",response)
          const response=await user.updateEmail(email || '');
          console.log("The response is:",response)
      
          console.log('Email updated successfully!');
          Alert.alert('Email updated successfully!')
        } catch (error) {
          console.error('Error updating email:', error);
        }
      }

      // Update phone number (requires re-authentication)
      // if (phoneNumber) {
      //   const credential = auth.PhoneAuthProvider.credential(user.uid, password);
      //   await user.reauthenticateWithCredential(credential);
      //   await user.updatePhoneNumber(phoneNumber);
      // }

      // Update password (requires re-authentication)
      // if (password) {
      //   const credential = auth.EmailAuthProvider.credential(user.email || '', password);
      //   await user.reauthenticateWithCredential(credential);
      //   await user.updatePassword(password);
      // }

      console.log('User profile updated successfully!');
    } catch (error:any) {
      console.error('Error updating user profile:', error);
    }
    }
    else
    {
      console.error('User not authenticated.');
      return; 
    }

    
  };
  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.imgContainer}>
            <Image style={styles.image}  source={photoURL ? { uri: photoURL } : require('../../assets/profile1.png')} />
            <TouchableOpacity onPress={imagePick} style={{ alignItems: 'flex-end', top: -19,right:5, }}>
              <Entypo name="camera" size={20} color={'green'} />
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Change Profile</Text>
          </View>
        </View>
        <View style={styles.textInputContainer}>
           <Text style={styles.inputText}>
            Username
           </Text>
           <TextInput  placeholder="Muzamil Iqbal" style={styles.input}   value={displayName}
        onChangeText={(text) => setDisplayName(text)}/>
            <Text style={styles.inputText}>
            Email
           </Text>
           <TextInput  placeholder="123muzamil.iqbal@gmail.com" style={styles.input}   value={email}
        onChangeText={(text) => setEmail(text)}/>
           <Text style={styles.inputText}>
            Phone Number
           </Text>
           <TextInput  placeholder="03078761165" style={styles.input}   value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}/>
           <Text style={styles.inputText}>
            Password
           </Text>
           <TextInput secureTextEntry={true} placeholder="R@mzaann" style={styles.input}
           value={password}
           onChangeText={(text) => setPassword(text)}/>
           <TouchableOpacity style={styles.button} onPress={updateProfile}>
      <Text style={styles.buttonText}>Update</Text>
    </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#fff',
    height: '100%',
    marginBottom:20,
    
  },
  profileContainer: {
    alignItems: 'center',
    height:responsiveHeight(30),
   
  },
  imgContainer: {
     marginTop:50,
  },
  textContainer: {
    alignItems: 'center',
  },
  text:{
    color: '#000',
    fontFamily: 'PT Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    marginTop:-15,
    marginLeft:0,
  }
  ,
  image: {
    display: 'flex',
    width: 105.11,
    height: 98,
    padding: 10.907,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    borderRadius: 100,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(63, 76, 95, 0.12)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
   
},
textInputContainer:{
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:10,
},
inputText:{
    marginLeft:0,
    color: '#000',
    fontFamily: 'PT Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '700',
},
input: {
    width: 420,
    height: 50,
    flexShrink: 0,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A9A9A9',
    backgroundColor: 'rgba(196, 196, 196, 0.00)',
  
    marginTop:10,
    marginBottom:20,
  
  },
  button: {
    width: 420,
    height: 50,
    flexShrink: 0,
    backgroundColor: '#4BA26A', 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  
    marginTop:0,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16, 
    fontWeight: '700', 
    fontStyle:'normal',
    alignItems:'center',
    justifyContent:'center',
   
  },

});
