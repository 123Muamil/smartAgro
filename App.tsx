import React,{useEffect} from 'react'
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/components/Login';
import OtpLogin from './src/components/OtpLogin';
import Signup from './src/components/Signup';
import ForgotPassword from './src/components/ForgotPassword';
import TabNavigation from './src/components/TabNavigation/TabNavigation';
import Profile from './src/components/profile/Profile';
import PrivacyPolicy from './src/components/profile/PrivacyPolicy';
import HelpandSupport from './src/components/profile/HelpandSupport';
import AboutUs from './src/components/profile/AboutUs';
import TermsandConditions from './src/components/profile/TermsandConditions';
import RateUsModal from './src/components/profile/RateUsModal';
import UpdatePassword from './src/components/profile/UpdatePassword';
import BuyProducts from './src/pages/Tradding/BuyProducts/BuyProducts';
import Productdetails from './src/pages/Tradding/BuyProducts/Productdetails';
import AddtoCart from './src/pages/Tradding/BuyProducts/AddtoCart';
import DiseasePrediction from './src/pages/DiseasePrediction/DiseasePrediction';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import FillOtp from './src/components/TabNavigation/FillOtp';
// import auth from '@react-native-firebase/auth';
import { ToastProvider } from 'react-native-toast-notifications'
import SellProducts from './src/pages/Tradding/SellProducts/SellProducts';
import AccountCreation from './src/components/AccountCreation';
import BuyerAccount from './src/components/BuyerAccount';
import SellerAccount from './src/components/SellerAccount';
const Stack = createNativeStackNavigator();

const App: React.FC = () =>  {

  useEffect(() => {
    SplashScreen.hide();
}, []);

  return (
    
     <Provider store={store}>
      {/* auth().currentUser?'TabNavigation': */}
      <ToastProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Login'}>
      <Stack.Screen name='TabNavigation' component={TabNavigation}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='OtpLogin' component={OtpLogin}/>
      <Stack.Screen name='fillOtp' component={FillOtp}/>
      <Stack.Screen name='Signup' component={Signup}/>
      <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
      <Stack.Screen name='profile' component={Profile}/>
      <Stack.Screen name='privacy' component={PrivacyPolicy}/>
      <Stack.Screen name='help' component={HelpandSupport}/>
      <Stack.Screen name='about' component={AboutUs}/>
      <Stack.Screen name='term' component={TermsandConditions}/>
      <Stack.Screen name='reviewsModal' component={RateUsModal}/>
      <Stack.Screen name='updatePassword' component={UpdatePassword}/>
      <Stack.Screen name='buyProducts' component={BuyProducts}/>
      <Stack.Screen name='detail' component={Productdetails}/>
      <Stack.Screen name='cart' component={AddtoCart}/>
      <Stack.Screen name='disease-prediction' component={DiseasePrediction}/>
      <Stack.Screen name='SmartAgro' component={SellProducts}/>
      <Stack.Screen name='accounts' component={AccountCreation}/>
      <Stack.Screen name='buyeraccount' component={BuyerAccount}/>
      <Stack.Screen name='selleraccount' component={SellerAccount}/>
    </Stack.Navigator>
   </NavigationContainer>
   </ToastProvider>
     </Provider>
    
  )
}

export default App
