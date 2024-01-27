import { StyleSheet, View,SafeAreaView ,ScrollView,Text} from 'react-native'
import React from 'react'
import { RouteProp, NavigationProp } from '@react-navigation/native';
import MyHeader from '../components/TabNavigation/MyHeader'
type SearchScreenProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: NavigationProp<any>;
};
const SearchScreen:React.FC<SearchScreenProps> = ({ route, navigation }: SearchScreenProps) => {
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
      <ScrollView style={styles.contentContainer}>
       <View><Text>Muzamil Iqbal:2020-CS-108</Text></View>
      </ScrollView>
    </View>
   </SafeAreaView>
  )
}

export default SearchScreen
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
})