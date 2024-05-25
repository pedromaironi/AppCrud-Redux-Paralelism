import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {colors} from '../utils/colors';
import fonts from '../utils/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {ThreadsActions} from '../actions/ThreadsActions';

const ThreadScreen = () => {
  const dispatch = useDispatch();
  const { products, orders } = useSelector(state => ({
    products: state.products,
    orders: state.orders
  }));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(ThreadsActions())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const renderItem = ({item}) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderName}>{item.name}</Text>
      <Text style={styles.orderPrice}>{item.price}</Text>
    </View>
  );

  const renderOrder = ({item}) => (
    <View style={styles.orderItem}>
      <Text style={styles.orderName}>{item.date}</Text>
      <Text style={styles.orderPrice}>{item.total}</Text>
    </View>
  );

  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      ) : (
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
      )}
    </>
  );
};

export default ThreadScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
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
