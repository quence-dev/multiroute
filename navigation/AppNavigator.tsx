import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import PlannerScreen from '../screens/PlannerScreen';
import type { RootStackParamList } from '../types';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Planner" component={PlannerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}