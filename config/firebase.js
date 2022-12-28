import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAOBISq_tI3Yl9A-8_vexGIiK6Qo8zfI34",
  authDomain: "finalproj-aecf9.firebaseapp.com",
  databaseURL: "https://finalproj-aecf9-default-rtdb.firebaseio.com",
  projectId: "finalproj-aecf9",
  storageBucket: "finalproj-aecf9.appspot.com",
  messagingSenderId: "208383206617",
  appId: "1:208383206617:web:1a61a436ac745c254c8ac8"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
