import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import IconLibary from 'react-native-vector-icons/MaterialIcons';

import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoggingScreen';
import ProfileScreen from './screens/ProfileScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator initialRouteName="Connecting to User">
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Logging In" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AppTabs() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';

            if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            } else if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // Return the icon component
            return <IconLibary name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
};

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connecting to User">
        <Stack.Screen name="Login" component={LoginStack} options={{ headerShown: false }} />
        <Stack.Screen name="Apps" component={AppTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default AppNavigator;
