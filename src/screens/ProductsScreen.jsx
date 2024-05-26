import React, { useEffect, useState, useCallback  } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator  } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../actions/productActions';
import ProductForm from '../components/ProductForm';
import { Button, Card, Title, Paragraph, FAB } from 'react-native-paper';

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      await dispatch(fetchProducts());
      setLoading(false);
    };
    loadProducts();
  }, [dispatch]);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    setLoading(true);
    await dispatch(deleteProduct(id));
    await dispatch(fetchProducts());
    setLoading(false);
  };

  const handleAdd = () => {
    setSelectedProduct(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedProduct(null);
  };

  const renderItem = useCallback(({ item }) => (
    <MemoizedProductCard item={item} onEdit={handleEdit} onDelete={handleDelete} />
  ), [handleEdit, handleDelete]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) :showForm ? (
        <ProductForm product={selectedProduct} onCancel={handleCancel} />
      ) : (
        <>
          <FlatList
            data={products}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
          <FAB
            style={styles.fab}
            icon="plus"
            onPress={handleAdd}
          />
        </>
      )}
    </View>
  );
};

const ProductCard = ({ item, onEdit, onDelete }) => (
  <Card style={styles.card}>
    <Card.Content>
      <Title>{item.name}</Title>
      <Paragraph>{item.description}</Paragraph>
      <Paragraph>${item.price}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => onEdit(item)}>Editar</Button>
      <Button onPress={() => onDelete(item.id)}>Eliminar</Button>
    </Card.Actions>
  </Card>
);

const MemoizedProductCard = React.memo(ProductCard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default ProductsScreen;