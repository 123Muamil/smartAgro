import { StyleSheet, Text, View,Image, Alert,TouchableOpacity,ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React,{useState} from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import auth from '@react-native-firebase/auth';
type AccountsProps = {
    route: RouteProp<Record<string, object | undefined>, string>;
    navigation: NavigationProp<any>;
  };
const Accounts:React.FC<AccountsProps> = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handleLogoutPress = async() => {
    
    await auth().signOut().then(() => 
    navigation.navigate('OtpLogin')
   
    ).catch(()=>Alert.alert("Error while logout"));
  };
  return (
    <ScrollView>
      <View style={styles.container}>
       <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.imageContainer}>
        <Image style={styles.image} source={ require('../../assets/profile1.png')} />
         <Text>Muzamil Iqbal</Text>
         <Text>03078761165</Text>
        </TouchableOpacity>
       </View>
        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('profile')}>
        <View style={styles.leftContainer}>
        <View style={styles.logo}>
        <Image source={require('../../assets/account.png')}/>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>My Account</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="arrow-right" size={16} color="#4BA26A" />
      </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('privacy')}>
        <View style={styles.leftContainer}>
        <View style={styles.logo}>
        <Image source={require('../../assets/privacy.png')}/>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>Privacy Policy</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="arrow-right" size={16} color="#4BA26A" />
      </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('cart')}>
        <View style={styles.leftContainer}>
        <View style={styles.logo}>
        <Image source={require('../../assets/cart1.png')}/>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>Cart Details</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="arrow-right" size={16} color="#4BA26A" />
      </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('help')}>
        <View style={styles.leftContainer}>
        <View style={styles.logo}>
        <Image source={require('../../assets/help.png')}/>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>Help & Support</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="arrow-right" size={16} color="#4BA26A" />
      </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('reviewsModal')}>
        <View style={styles.leftContainer}>
        <View style={styles.logo}>
        <Image source={require('../../assets/rateus.png')}/>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>Rate Us</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="arrow-right" size={16} color="#4BA26A" />
      </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <View style={styles.leftContainer}>
        <View style={styles.logo}>
        <Image source={require('../../assets/logout.png')}/>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <Text style={styles.text}>Logout</Text>
      </View>
      <View style={styles.rightContainer}>
        <Icon name="arrow-right" size={16} color="#4BA26A" />
      </View>
        </TouchableOpacity>
        {/* logout modal */}
        <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
        <Text style={styles.logoutText}>Logout</Text>
         <View style={styles.horizontalLine} />
        <Text style={styles.Text}>Are You Sure you want to logout? </Text>
       
         <View style={styles.buttonCotainer1}>
         <TouchableOpacity onPress={toggleModal} style={styles.button1}>
      <Text style={styles.buttonText}>Cancel</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={handleLogoutPress} style={styles.button1}>
      <Text style={styles.buttonText1}>Yes, Logout</Text>
    </TouchableOpacity>
         </View>
        </View>
      </Modal>
        {/* end of modal */}
        </View>
      </View>
    </ScrollView>
  )
}

export default Accounts

const styles = StyleSheet.create({
   container:{
    backgroundColor:'#fff',
    marginBottom:20,
   },
   
   profileContainer:{
        width:'100%',
        height:responsiveHeight(25),
        marginTop:10,
        marginBottom:-30,
   },
   imageContainer:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   }
   ,
   image: {
    width: 105.11,
    height: 98,
    padding: 10.907,
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
    elevation: 4,
},
buttonContainer:{
       width:'100%',
       height:'100%',
      backgroundColor:'#fff',
   
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
 
    marginTop:10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 42,
    height: 42,
    flexShrink: 0,
    color:'#4BA26A',
  }
  ,
  centerContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent:'center'
  },
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
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    width: '100%',
    height: 214,
    flex: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent:'center',
    alignItems:'center'
  },
  logoutText: {
    color: '#000',
    fontFamily: 'PT Sans', 
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  horizontalLine: {
    width: 370,
    height: 1,
    backgroundColor: 'rgba(152, 152, 152, 0.27)',
    marginTop:10,
  },
  Text: {
    color: 'rgba(0, 0, 0, 0.88)',
    fontFamily: 'PT Sans',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  buttonCotainer1:{
    display:'flex',
    flexDirection:'row',
    marginTop:30,
  }
  ,
  button1: {
    width: 160,
    height: 40,
    flex: 0,
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:20,
  },
  buttonText: {
    color: '#A1A1A1',
   
 
  },
  buttonText1:{
    color:'#F00',
    textAlign: 'center',
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  }
})