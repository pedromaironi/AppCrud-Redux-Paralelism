import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { createProduct, updateProduct } from '../actions/productActions';

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
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price.toString());
      setImage(product.image);
      setCategoryId(product.category_id.toString());
      setStock(product.stock.toString());
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
      dispatch(updateProduct({ ...newProduct, id: product.id }));
    } else {
      dispatch(createProduct(newProduct));
    }
    onCancel();
  };

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{product ? 'Actualizar Producto' : 'Crear Producto'}</Title>
      <TextInput
        label="Nombre"
        value={name}
        onChangeText={setName}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Descripción"
        value={description}
        onChangeText={setDescription}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="Precio"
        value={price}
        onChangeText={setPrice}
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Imagen"
        value={image}
        onChangeText={setImage}
        mode="outlined"
        style={styles.input}
      />
      <TextInput
        label="ID Categoría"
        value={categoryId}
        onChangeText={setCategoryId}
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        label="Stock"
        value={stock}
        onChangeText={setStock}
        mode="outlined"
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
          {product ? 'Actualizar' : 'Crear'}
        </Button>
        <Button mode="text" onPress={onCancel} style={styles.button}>
          Cancelar
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
  },
});

export default ProductForm;