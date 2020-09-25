import * as React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/HomeScreen'
import ProfileScreen from './screens/ProfileScreen'
import SettingScreen from './screens/SettingScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStrack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#3498DB'},
      headerTintColor: 'white',
      headerTitleStyle: {fontWeight: 'bold'}
    }}>
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  )
}

function ProfileStrack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#3498DB'},
      headerTintColor: 'white',
      headerTitleStyle: {fontWeight: 'bold'}
    }}>
      <Stack.Screen name='Profile' component={ProfileScreen} />
    </Stack.Navigator>
  )
}

function SettingStrack(){
  return(
    <Stack.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#3498DB'},
      headerTintColor: 'white',
      headerTitleStyle: {fontWeight: 'bold'}
    }}>
      <Stack.Screen name='Setting' component={SettingScreen} />    
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeStrack} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          )
        }} />
        <Tab.Screen name='Profile' component={ProfileStrack} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' color={color} size={size} />
          )
        }} />
        <Tab.Screen name='Setting' component={SettingStrack} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='tune' color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
