import { StyleSheet, View,SafeAreaView ,ScrollView,Text, TouchableOpacity,FlatList,TextInput,Image, Alert} from 'react-native'
import React,{useEffect, useState} from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import MyHeader from '../../../components/TabNavigation/MyHeader'
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/AntDesign'; // Import the icon library
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import { BASE_URL } from '../../../api/BaseUrl';
type sellProductsProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
type ItemData={
   id:string,
   title:string,
   description:string,
   price:number,
   quantity:number,
   image:string
}
type ItemProps = {
  item: ItemData;
};
const SellProducts:React.FC<sellProductsProps> = ({ route, navigation }:sellProductsProps,{item}: {item: ItemData}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [price,setPrice]=useState<any>()
  const [quantity,setQuantity]=useState<any>()
  const [description,setDiscription]=useState<string>()
  const [image, setImage] = useState<string | null>(null);
  const[filename,setFileName]= useState<string | null>(null);
  const [getData, setData] = useState([]);
  const updatedPrice=parseFloat(price)
  const updatedQuantiy=parseInt(quantity)
  console.log("The data is:",getData)
  const data={
    title,
    description,
    price: updatedPrice,
    quantity: updatedQuantiy,
    image
  }
  const formData = new FormData();
  formData.append("title",data.title)
  formData.append("description",data.description)
  formData.append("price",data.price)
  formData.append("quantity",quantity)
  formData.append("image",{
    uri:image,
    type:'image/jpg',
    name:filename
  })
// Object.entries(data).forEach(([key, value]) => {
//   formData.append(key, value as string | Blob | null);
// });
useEffect(()=>{
const handegetData=async()=>{
 const response=await axios.get(BASE_URL)
 console.log("The response is:",response)
 if(response.status===200)
 {
     setData(response.data)
 }
}
handegetData()
},[])
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const closeModal = () => {
  //  Alert.alert("Modal Close Successfully")
  setModalVisible(!isModalVisible);
  };
  const imagePick = () => {
    ImagePicker.openPicker({
      mediaType:'photo',
      width: 400,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
      const paths=image['path']
      const filename=paths.substring(paths.lastIndexOf('/')+1);
      setFileName(filename)
    });
  };
  
  const AddItemHandler = async () => {
    const headers={
      Accept:'application/json',
      'Content-Type':'multipart/form-data',
    }
    try {
      // Make a POST request to add an item
      const postResponse =await axios.post(BASE_URL, formData, {headers:headers})
      // console.log("The post response is:",postResponse)
      if (postResponse.status === 201) {
        // console.log('Post request successful');
        // Close the modal
        setTitle('')
        setDiscription('')
        setPrice('')
        setQuantity('')
        setImage('')
        setModalVisible(!isModalVisible);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const renderItem=({item}:ItemProps)=>{
      return   <View >
      <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('detail', { id: item.id })}>
        <View style={styles.imageContainer1}>
          <Image source={{ uri: item.image }} style={styles.image1} onError={(e) => console.log('Error loading image:', e.nativeEvent.error)}/>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    </View>
  }
  return (
    <SafeAreaView>
     <View style={styles.container}>
      <MyHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
        style={styles.headerWithShadow}
      />
      <ScrollView style={styles.contentContainer} nestedScrollEnabled={true}>
        <FlatList
        nestedScrollEnabled={true}
        data={getData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        />
       <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>ADD CROP</Text>
       </TouchableOpacity>
    
       {/* add crop model */}
       <Modal isVisible={isModalVisible} style={styles.modalContainer}>
      <View style={styles.modal}>
        <Icon
          name="close"
          size={20}
          color="#828282"
          onPress={closeModal}
          style={styles.closeIcon}
        />
        <View style={styles.inputContainer}>
        <TextInput
      placeholder='Enter item name'
      style={styles.input1}
      value={title} onChangeText={(text)=>setTitle(text)}/>
       <TextInput
      placeholder='Enter item price'
      style={styles.input1}
      value={price} onChangeText={(text)=>setPrice(text)}/>
       <TextInput
      placeholder='Enter item discription'
      style={styles.input1}
      value={description} onChangeText={(text)=>setDiscription(text)}/>
       <TextInput
      placeholder='Enter item quantity'
      
      style={styles.input1}
      value={quantity} onChangeText={(text)=>setQuantity(text)}/>
        </View>
        <TouchableOpacity onPress={imagePick}  style={styles.imageContainer}>
       {image ? (
        <Image style={styles.image} source={{ uri: image }} />
      ) : (
        <Text >Upload File</Text>
      )}
    </TouchableOpacity>
       <TouchableOpacity onPress={AddItemHandler} style={styles.button1}>
      <Text style={styles.buttonText1}>ADD ITEM</Text>
    </TouchableOpacity>
      </View>
    </Modal>
       {/* end add crop model */}
      </ScrollView>
    </View>
   </SafeAreaView>
  )
}

export default SellProducts

const styles = StyleSheet.create({
    container:{
      backgroundColor:'#fff',
      height:'100%',
  },
  headerWithShadow: {
    height:80,
    
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 1,
      shadowRadius: 4,
      elevation: 6, 
    },
    contentContainer: {
         
      paddingTop: 20, 
      marginHorizontal:20,
    },
    button: {
      width: "100%",
      height: 50,
      flexShrink: 0,
      borderRadius: 14,
      backgroundColor: '#FFF',
      borderWidth:1,
      borderColor:'green',
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      paddingHorizontal: 10,
      shadowColor: 'green',
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 4,
      elevation: 6,
      marginTop:10,
    },
    buttonText:{
      color:'green',
      textAlign: 'center',
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
      
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modal: {
      width: 355,
      height: 'auto',
      borderRadius: 15,
      backgroundColor: '#FFF',
      alignItems: 'center',
      paddingTop:50,
       paddingBottom:10,
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
    button1: {
      width: 330,
      height: 40,
      flex: 0,
      backgroundColor: '#4BA26A', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
    
    },
    buttonText1: {
      color: '#FFF', 
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
     
    },
    button2: {
      width: 330,
      height: 40,
      flex: 0,
      backgroundColor: '#FFF', 
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      borderWidth:1,
      borderColor:'green',
     
    },
    buttonText2: {
      color: 'green', 
      fontFamily: 'PT Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: '700',
     
    },
    inputContainer:{
      paddingHorizontal:20,
 },
 input1:{
  height: 40,
  borderColor: 'green',
  borderWidth: 1,
  marginBottom: 10,
  paddingHorizontal: 10,
  width: 330,
  borderRadius:15
 },
 imageContainer:{
  width:'90%',
  height:160,
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center',
  borderWidth:1,
  borderColor:'green',
  marginBottom:10,
  marginHorizontal:20,
},
image:{
  width:'100%',
  height:160,
  borderRadius:20,
  justifyContent:'center',
  alignItems:'center',
},

card: {
  width: 200,
  height:'auto', 
  margin: 10, 
  padding:10,
  borderRadius: 7.387,
   
  backgroundColor: '#fff',
 
  alignItems: 'center',
  justifyContent: 'center',
 
 

  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.2, 
  shadowRadius: 4,
  elevation: 4, 
},
imageContainer1: {
  alignItems: 'center',
  justifyContent: 'center',
  width:'100%'
},
image1: {
  width: '100%',
  height: 150,
  margin:10,


},
cardtitle: {
  fontSize: 12,
  fontWeight: 'bold',
  marginVertical: 5,
  textAlign: 'center',
  marginTop:10,
},
price: {
  fontSize: 14,
  fontWeight: 'normal',
  marginVertical: 5,
  textAlign: 'center',
  marginTop:0,
  color:'#000',
},
save: {
  fontSize: 14,
  fontWeight: 'normal',
  marginVertical: 5,
  textAlign: 'center',
},
buyButton: {
  width:200,
  backgroundColor: '#4BA26A',
  padding: 10,
  borderRadius: 5,
  marginTop: 30,
},
buyButtonText: {
  color: '#FFF',
  textAlign: 'center',
  fontWeight: 'bold',
},
title: {
  color: '#272D2F',
  fontFamily: 'Aoboshi One',
  fontSize: 20,
  fontStyle: 'normal',
  fontWeight: 'bold',
  lineHeight: 30.784,
},
  })