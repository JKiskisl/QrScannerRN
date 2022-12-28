import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens';

import ScanScreen from '../screens/ScanScreen';
import AcceptedOrders from '../screens/AcceptedOrders';
import CompletedOrders from '../screens/CompletedOrders';

const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Scan' component={ScanScreen}/>
      <Stack.Screen name='AcceptedOrders' component={AcceptedOrders}/>
      <Stack.Screen name='CompletedOrders' component={CompletedOrders}/>
    </Stack.Navigator>
  );
};
