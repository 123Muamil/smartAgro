import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity,  Linking, } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const HelpandCustomerSuport: React.FC = () => {
  const image = require('../assets/customer-service.png');
  const phoneNumber = '+923078761165';
  const message = 'smartgaro, how i can help you please ask us questions?';
  const sendWhatsAppMessage = () => {
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    Linking.openURL(url)
      .then(() => console.log('WhatsApp opened'))
      .catch((error) => console.error('Error opening WhatsApp', error));
  };
  return (
   <View style={styles.container}>
     <TouchableOpacity style={styles.card} activeOpacity={0.7}>
        <View>
          <Image style={styles.cardImage} source={require('../assets/customer-service.png')}/>
        </View>
         <View>
          <Text style={styles.cardTitle}>Help & Customer Support</Text>
          <Text style={styles.cardDescription}>Register a complaint or get quick help </Text>
          <Text style={styles.cardDescription}>on queries Related to SmartAgro</Text>
          <TouchableOpacity style={styles.button} onPress={sendWhatsAppMessage}>
            <Text style={styles.buttonText}>Get Help? </Text>
            <AntDesign name='arrowright' size={20} style={styles.icon} />
          </TouchableOpacity>
         </View>
     
    </TouchableOpacity>
   </View>
  );
};

const styles = StyleSheet.create({
  container:{
     flex:1,
     width:'90%',
     marginTop: 20,
     marginBottom:30,
  }
  ,
  card: {
   
    height: 150,
   
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection:'row',
    
   
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardImage: {
     width:70,
     height:70,
    borderRadius: 50,
    marginBottom: 10,
    marginLeft:20,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Alatsi',
    color:'#000',
    marginLeft:20,
  },
  cardDescription: {
    fontSize: 11,
    fontWeight: '300',
    fontFamily: 'Alatsi',
    color:'#000',
    marginLeft:20,
  },
  
      icon: {
        width: 16.75,
        height: 27.586,
        color: 'green',
        marginLeft: 0,
        top:5,
         
      },
      button:{
        width:150,
        
        backgroundColor: '#FFF',
        padding: 5,
        borderRadius: 100,
        borderWidth:1,
        borderColor:'#4BA26A',
        flexDirection:'row',
        marginTop: 10,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
      },
      buttonText:{
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
       
      }
});

export default HelpandCustomerSuport;
