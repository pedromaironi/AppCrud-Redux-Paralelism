import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/colors';
import fonts from '../utils/fonts';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ProductsScreen')}>
          <Text style={styles.buttonText}>Productos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OrdersScreen')}>
          <Text style={styles.buttonText}>Órdenes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ThreadScreen')}>
          <Text style={styles.buttonText}>Uso de Threads</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 34,
    fontFamily: fonts.Medium,
    color: colors.primary,
    backgroundColor: colors.white,
    padding: 10
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.white,
  },
});
