import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors';
import fonts from '../utils/fonts';
import ProductViewModel from '../view/productViewModel';
import OrderViewModel from '../view/orderViewModel';
import ProductForm from '../components/productForm';

const DashboardScreen = () => {
  const { products } = ProductViewModel();
  const { orders } = OrderViewModel();

  const renderItem = ({ item }) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderName}>{item.name}</Text>
      <Text style={styles.orderPrice}>{item.price}</Text>
    </View>
  );

  const renderOrder = ({ item }) => (
    <View style={styles.order}>
      <Text style={styles.orderName}>{item.date}</Text>
      <Text style={styles.orderPrice}>{item.total}</Text>
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Productos</Text>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Lista de Ordenes</Text>
        <FlatList
          data={orders}
          renderItem={renderOrder}
          keyExtractor={order => order.id.toString()}
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
