import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDa1E20dgGAYeB8akYnhXdrkhF1pTLzGQ8",
  authDomain: "fir-expo-32994.firebaseapp.com",
  databaseURL: "https://fir-expo-32994-default-rtdb.firebaseio.com",
  projectId: "fir-expo-32994",
  storageBucket: "fir-expo-32994.appspot.com",
  messagingSenderId: "275530945181",
  appId: "1:275530945181:web:4b1f321752efb804273a74"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
