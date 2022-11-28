import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';

import ScanScreen from '../screens/ScanScreen';
import AllScanned from '../screens/AllScanned';
import DeleteorUpdate from '../screens/DeleteorUpdate';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Scan' component={ScanScreen}/>
      <Stack.Screen name='AllScanned' component={AllScanned}/>
      <Stack.Screen name='DeleteorUpdate' component={DeleteorUpdate}/>
    </Stack.Navigator>
  );
};
