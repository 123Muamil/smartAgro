import {Alert, Animated, Image, SafeAreaView, Text,TouchableOpacity,ActivityIndicator} from 'react-native';
import { verifyOTP } from '../../store/authActions';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from '../../styles/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { startLoading, stopLoading } from '../../store/authSlice';

const {Value, Text: AnimatedText} = Animated;

const CELL_COUNT = 6; 
const source = {
  uri: 'https://user-images.githubusercontent.com/4661784/56352614-4631a680-61d8-11e9-880d-86ecb053413d.png',
};

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }: { hasValue: boolean, index: number, isFocused: boolean }) => {
    Animated.parallel([
      Animated.timing(animationsColor[index], {
        useNativeDriver: false,
        toValue: isFocused ? 1 : 0,
        duration: 250,
      }),
      Animated.spring(animationsScale[index], {
        useNativeDriver: false,
        toValue: hasValue ? 0 : 1,
        stiffness: hasValue ? 300 : 250, // Specify stiffness instead of duration
        damping: 10, // Specify damping
      }),
    ]).start();
  };  
  interface OtpLoginProps {
    navigation: {
      navigate: (routeName: string) => void;
    };
  }
const FillOtp:React.FC<OtpLoginProps> = (prop) => {
  const [value, setValue] = useState('');
  const isLoading=useAppSelector((state)=>state.posts.isLoading1)
  const confirmation=useAppSelector((state)=>state.posts.confirmation)
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const dispatch=useAppDispatch()
  const user = auth().currentUser;
//get otp value function 
const getOptValue=async()=>{
  // console.log("The confirmation code is:",confirmation)
    dispatch(startLoading());
    await dispatch(verifyOTP(value,confirmation))
    if (user) {
      dispatch(stopLoading())
      prop.navigation.navigate('TabNavigation')
      // Alert.alert('');
      console.warn('Phone number is verified!')
    } else {
      // Alert.alert('');
      console.error('Phone number is not verified.')
    }
   
}
  const renderCell = ({index, symbol, isFocused}: { index: number, symbol: string, isFocused: boolean }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };
  
    // Run animation on the next event loop tick
    // Because we need to first return a new style prop and then animate this value
    setTimeout(() => {
      animateCell({hasValue, index, isFocused});
    }, 0);
    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}>
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <Image style={styles.icon} source={source} />
      <Text style={styles.subTitle}>
        Please enter the verification code{'\n'}
        we send to your phone number
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
       {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <TouchableOpacity style={styles.nextButton} onPress={getOptValue}>
        <Text style={styles.nextButtonText}>Verify</Text>
      </TouchableOpacity>
      )}
    
    </SafeAreaView>
  );
};

export default FillOtp;