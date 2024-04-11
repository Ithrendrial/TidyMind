import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/Home';
import SecondScreen from './screens/Second';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarStyle: {
        display: route.name === 'Second Page' ? 'none' : 'flex',
      },
    })}
      >
      <Tab.Screen name="Home Page" component={HomeScreen} />
      <Tab.Screen name="Second Page" component={SecondScreen}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}