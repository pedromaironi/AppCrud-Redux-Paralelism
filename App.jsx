import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import DashboardScreen from './src/screens/DashboardScreen';
import ThreadScreen from './src/screens/ThreadScreen';
import ProductsScreen from './src/screens/ProductsScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({});

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
          <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
          <Stack.Screen name={'DashboardScreen'} component={DashboardScreen} />
          <Stack.Screen name={'ThreadScreen'} component={ThreadScreen} />
          <Stack.Screen name={'OrdersScreen'} component={OrdersScreen} />
          <Stack.Screen name={'ProductsScreen'} component={ProductsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
