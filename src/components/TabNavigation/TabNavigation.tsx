import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon, { Icons } from '../TabNavigation/Icons';
import Screen from '../TabNavigation/Screen';
import Colors from '../TabNavigation/Colors';
import { RouteProp } from '@react-navigation/native';
import HomeScreen from '../../pages/HomeScreen';
import BuyCrops from '../../pages/Tradding/BuyCrops';
import Accounts from '../profile/Accounts';
import AddtoCart from '../../pages/Tradding/BuyProducts/AddtoCart';
import DiseasePrediction from '../../pages/DiseasePrediction/DiseasePrediction';
import { useAppSelector } from '../../store/hooks';
import SearchScreen from '../../pages/SearchScreen';
const Tab = createMaterialBottomTabNavigator();
interface TabItem {
  route: string;
  label: string;
  type: keyof typeof Icons;
  icon: string;
  component: React.ComponentType<any>;
  tabBarColor: string;
}

const TabArr: TabItem[] = [
  { route: 'Home', label: 'SmartAgro', type: 'Feather', icon: 'home', component: HomeScreen, tabBarColor: Colors.primary },
  { route: 'Trading', label: 'Add', type: 'Feather', icon: 'shopping-cart', component: BuyCrops, tabBarColor: Colors.red },
  { route: 'Disease', label: 'Disease Diagnosis', type: 'FontAwesome', icon: 'leaf', component: DiseasePrediction, tabBarColor: Colors.yellow },
  { route: 'Search', label: 'Search', type: 'Feather', icon: 'search', component: SearchScreen, tabBarColor: Colors.green },
  { route: 'Cart', label: 'Cart', type: 'AntDesign', icon: 'shoppingcart', component: AddtoCart, tabBarColor: Colors.green },
  { route: 'Account', label: 'Account', type: 'FontAwesome', icon: 'user-circle-o', component: Accounts, tabBarColor: Colors.purple },
];

type Tab4Props = {
  route: RouteProp<Record<string, object | undefined>, string>;
};

export default function Tab4({ route }: Tab4Props) {
  const cart = useAppSelector((state) => state.cart)
  const getTotalQuantity = () => {
    let total = 0
    cart.forEach((item:any) => {
      total += item.quantity
    })
    return total
  }
  return (
    <Tab.Navigator  barStyle={{ backgroundColor: '#fff' }}  activeColor='#4BA26A'>
      {TabArr.map<React.JSX.Element>((item, index) => {
        return (
          <Tab.Screen  key={index} name={item.route} component={item.component}
            options={{
              tabBarColor: item.tabBarColor,
              tabBarIcon: ({ color }) => (
                <Icon name={item.icon} type={item.type} size={24} color={color} />
              ),
              tabBarBadge: item.route === 'Cart' ? getTotalQuantity() || 0: undefined,
            }}
          />
        )
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'red',
    color: '#fff',
  }
});
