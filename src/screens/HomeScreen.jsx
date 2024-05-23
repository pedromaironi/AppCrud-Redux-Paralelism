import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {colors} from '../utils/colors';
import fonts from '../utils/fonts';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/man.png')} style={styles.logo} />
      <Text style={styles.title}>Crud App</Text>
      <Text style={styles.subTitle}>
        App en android o ios con React-Native en la que tenga lo siguiente:
        Login, Consulta a una Api-Rest (Desarrollada en Springboot Java)
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButtonWrapper}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    fontFamily: fonts.Bold,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: fonts.light,
    color: colors.black,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    width: '90%',
    height: 60,
    borderRadius: 100,
    marginTop: 40,
  },
  loginButtonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 100,
    backgroundColor: '#45484A',
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.Bold,
  },
});
