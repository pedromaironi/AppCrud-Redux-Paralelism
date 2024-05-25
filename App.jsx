import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import {Provider} from 'react-redux';
import store from './src/store';

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
          <Stack.Screen name={'DashboardScreen'} component={DashboardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
