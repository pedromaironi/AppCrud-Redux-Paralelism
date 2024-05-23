import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors} from '../utils/colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/man.png')} style={styles.logo} />
      <Text style={styles.title}>Crud App</Text>
      <Text style={styles.subtitle}>
        App en android o ios con React-Native en la que tenga lo siguiente:
        Login, Consulta a una Api-Rest (Desarrollada en Springboot Java)
      </Text>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    marginVertical: 80,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
  },
  subTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
