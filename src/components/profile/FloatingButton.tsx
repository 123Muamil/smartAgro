import { StyleSheet, TouchableOpacity, View,Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
const FloatingButton = () => {
  const initiateCall = () => {
    Linking.openURL('tel:+923078761165');
    };
      const initiateChat = () => {
        Linking.openURL('sms:+923078761165'); // Replace with the actual phone number
      };
      
  return (
    <View>
     <TouchableOpacity onPress={initiateCall} style={styles.fabContainer1}>
      <View style={styles.fab}>
        <Icon name="phone" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={initiateChat} style={styles.fabContainer}>
      <View style={styles.fab}>
        <Icon name="chat" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
    </View>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
    fabContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 10,
      },
      fabContainer1: {
        position: 'absolute',
        bottom: 90,
        right: 20,
        zIndex: 10,
      },
      
      fab: {
        backgroundColor: '#007bff',
        width: 45,
        height: 45,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
      },
})