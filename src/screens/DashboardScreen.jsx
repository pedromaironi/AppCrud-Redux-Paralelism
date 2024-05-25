import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import fonts from '../utils/fonts';

const DashboardScreen = () => {
  // Ejemplo de datos de órdenes o productos
  const orders = [
    {id: '1', name: 'Orden 1', totalPrice: '$50.00'},
    {id: '2', name: 'Orden 2', totalPrice: '$75.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    {id: '3', name: 'Orden 3', totalPrice: '$100.00'},
    // Agrega más datos de órdenes o productos según sea necesario
  ];

  // Renderizar cada elemento de la lista de órdenes o productos
  const renderItem = ({item}) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderName}>{item.name}</Text>
      <Text style={styles.orderPrice}>{item.totalPrice}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Órdenes</Text>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Productos</Text>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.Bold,
    color: colors.primary,
    marginBottom: 20,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
    paddingVertical: 10,
  },
  orderName: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.primary,
  },
  orderPrice: {
    fontFamily: fonts.Regular,
    fontSize: 16,
    color: colors.secondary,
  },
});
