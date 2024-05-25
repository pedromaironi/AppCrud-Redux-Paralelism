import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, deleteProduct } from '../actions/productActions';
import ProductForm from '../components/ProductForm';
import { Button, Card, Title, Paragraph, FAB } from 'react-native-paper';

const ProductsScreen = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleAdd = () => {
    setSelectedProduct(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedProduct(null);
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>${item.price}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button onPress={() => handleEdit(item)}>Editar</Button>
        <Button onPress={() => handleDelete(item.id)}>Eliminar</Button>
      </Card.Actions>
    </Card>
  );

  return (
    <View style={styles.container}>
      {showForm ? (
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