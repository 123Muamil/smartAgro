import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { responsiveHeight } from 'react-native-responsive-dimensions'
interface AccountCreationProps{
    navigation:{
          navigate:(routeName:string)=>void
    }
}
const AccountCreation:React.FC<AccountCreationProps> = ({navigation}) => {
    const handleBuyerAccount=()=>{
          navigation.navigate('buyeraccount')
    }
    const handleSellerAccount=()=>{
         navigation.navigate('selleraccount')
    }
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.barContainer}>
          <TouchableOpacity>
          <Text style={styles.text} >SmartAgro</Text>
          </TouchableOpacity>
        </View>
       <TouchableOpacity style={styles.imageContainer}>
       <View >
        <Image source={require('../assets/accounts.jpg')} style={styles.image}/>
        </View>
       </TouchableOpacity>
     <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleBuyerAccount}>
        <Text style={styles.buttonText}>Create Simple Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSellerAccount}>
        <Text style={styles.buttonText}>Create Seller Account</Text>
      </TouchableOpacity>
     </View>
   {/* <TouchableOpacity style={styles.imageContainer1}>
     <View >
        <Image source={require('../assets/water_leaf.jpg')} style={styles.image1}/>
     </View>
   </TouchableOpacity> */}
    </SafeAreaView>
  )
}

export default AccountCreation

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    barContainer:{
        width:'100%',
        height:responsiveHeight(8),
        backgroundColor:'#FFF',
        elevation:4,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:50,
    }
    ,
    text:{
      color: 'green',
      fontWeight: 'bold',
    }
    ,
    imageContainer:{
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'#FFFFF',
     flex:1,
     marginBottom:50,
    },
    imageContainer1:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFF',
        flex:1,
     
       },
    image:{
        width:200,
        height:200,
       borderRadius:100
    },
    image1:{
        width:100,
        height:100,
       borderRadius:100,
    },
    buttonContainer:{
        padding:20,
        flex:1,
    },
    button: {
        backgroundColor: 'green',
        borderRadius: 5,
        width: '100%',
        height: responsiveHeight(6),
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
      },
      buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
      },
   
      
})