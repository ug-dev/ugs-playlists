import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import HomeScreen from '../screens/home-screen/home-screen';

export type AppStackParamList = {
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={observer(HomeScreen)} />
    </Stack.Navigator>
  );
}
