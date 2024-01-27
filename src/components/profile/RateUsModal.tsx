import React,{useState} from 'react';
import { View, Text, Button, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign'; // Import the icon library
import { AirbnbRating } from 'react-native-ratings';
const RateUsModal:React.FC = () => {
  const navigation = useNavigation();
  const [rating,setRating]=useState('')
  const [message, setMessage] = useState('');
  const closeModal = () => {
    console.log('Sending message:', message);
    setMessage('');
    navigation.goBack();
  };
  const handleMessageChange = (text:any) => {
    setMessage(text);
  };
const handleRating=(rating:any)=>{
           setRating(rating)
           console.warn(rating)
}
  return (
    <Modal isVisible={true} style={styles.modalContainer}>
      <View style={styles.modal}>
        <Icon
          name="close"
          size={20}
          color="#828282"
          onPress={closeModal}
          style={styles.closeIcon}
        />
        <Text style={styles.text}>Rate Us</Text>
        <AirbnbRating showRating={false} count={5} defaultRating={3} selectedColor='#FFE600'   size={25} ratingContainerStyle={{marginVertical:20}}  starContainerStyle={{marginRight:0}}
            starImage={require('../../assets/Star.png')} 
            onFinishRating={(rating)=>handleRating(rating)}
            />
            <TextInput
        style={styles.input}
        placeholder="write something here..."
        placeholderTextColor="#808080" 
        value={message}
        onChangeText={handleMessageChange}
      />
       <TouchableOpacity onPress={closeModal} style={styles.button}>
      <Text style={styles.buttonText}>Done</Text>
    </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default RateUsModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 355,
    height: 400,
    borderRadius: 15,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop:50,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  text: {
    color: '#4BA26A',
    fontFamily: 'PT Sans',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
    marginBottom:10,
  },
  input: {
    width: 255,
    height: 122,
    flex: 0,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    color: 'black', 
    fontSize: 16,
    fontFamily: 'PT Sans', 
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom:30,
  },
  button: {
    width: 185,
    height: 40,
    flex: 0,
    backgroundColor: '#4BA26A', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: '#FFF', 
    fontFamily: 'PT Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
   
  },
});
