import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { signOut } from 'firebase/auth';

import { auth } from '../config';

export const HomeScreen = ({navigation}) => {
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };
  return (
    <View style={styles.container}>
      <Button title='Sign Out' onPress={handleLogout} />
      <Button title="View all scanned items" onPress={()=> navigation.navigate('AllScanned')}/>
      <Button title="Open camera"onPress={()=> navigation.navigate('Scan')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
