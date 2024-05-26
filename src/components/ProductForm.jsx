import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, useTheme, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { createProduct, fetchProducts, updateProduct } from '../actions/productActions';

const ProductForm = ({ product, onCancel }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [stock, setStock] = useState('');

  const dispatch = useDispatch();
  const { colors } = useTheme();

  useEffect(() => {
    console.log(product);
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price ? product.price.toString() : '');
      setImage(product.image);
      setCategoryId(product.category_id ? product.category_id.toString() : '');
      setStock(product.stock ? product.stock.toString() : '');
    }
  }, [product]);

  const handleSubmit = () => {
    const newProduct = {
      name,
      description,
      price: parseFloat(price),
      image,
      category_id: parseInt(categoryId),
      stock: parseInt(stock),
    };
    if (product) {
      dispatch(updateProduct(product.id, newProduct ));
      dispatch(fetchProducts());
    } else {
      dispatch(createProduct(newProduct));
    }
    onCancel();
  };

  return (
    <View style={styles.container}>
      <Title style={[styles.title, { color: colors.primary }]}>{product ? 'Editar Producto' : 'Crear Producto'}</Title>
      <TextInput
        label="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Descripción"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Precio"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
      />
      <TextInput
        label="Imagen"
        value={image}
        onChangeText={setImage}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="ID Categoría"
        value={categoryId}
        onChangeText={setCategoryId}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
      />
      <TextInput
        label="Stock"
        value={stock}
        onChangeText={setStock}
        style={styles.input}
        keyboardType="numeric"
        mode="outlined"
      />
      <Button
        mode="contained"
        onPress={handleSubmit}
        style={styles.button}
      >
        {product ? 'Actualizar' : 'Crear'}
      </Button>
      <Button
        mode="text"
        onPress={onCancel}
        style={styles.button}
      >
        Cancelar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 10,
  },
});

export default ProductForm;