// store/actions/authActio
import auth from '@react-native-firebase/auth';
import { sendOTPSuccess, sendOTPFailure, verifyOTPSuccess, verifyOTPFailure, setAccessToken, setError } from '../store/authSlice';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: '559936227189-3bec9f5amme434k4gmac5nuvv19cjab7.apps.googleusercontent.com',
});
export const sendOTP = (phoneNumber: string) => {
   
  return async (dispatch: any) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      dispatch(sendOTPSuccess(confirmation));
    } catch (error:any) {
      dispatch(sendOTPFailure(error));
    }
  };
};

export const verifyOTP = (code: string,confirmation:any) => {
  return async (dispatch: any) => {
    try {
      await confirmation.confirm(code);
      dispatch(verifyOTPSuccess());
    } catch (error) {
      console.log('Invalid code.');
    }
  };
};



export const facebookLogin = () => {
  return async (dispatch:any) => {
    try {
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        dispatch(setError('Login was canceled'));
      } else {
        const data = await AccessToken.getCurrentAccessToken();
       if (!data) {
    throw 'Something went wrong obtaining access token';
   
  }
  // Create a Firebase credential with the AccessToken
     const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      await auth().signInWithCredential(facebookCredential);
      dispatch(verifyOTPSuccess());
      }
    } catch (error) {
      dispatch(setError(`Error logging in: ${error}`));
    }
  };
};
export const googleLogin = () => {
  return async (dispatch:any) => {
    try {
    // Check if your device supports Google Play
  await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();
  // Create a Google credential with the token
  const googleCredential =await auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  await auth().signInWithCredential(googleCredential);
  dispatch(verifyOTPSuccess());
    } catch (error) {
      console.error("Error logging in with Google:", error);
    }
  };
};
