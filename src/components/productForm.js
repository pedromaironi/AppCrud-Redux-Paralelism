// ProductForm.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [stock, setStock] = useState('');

  const handleSubmit = () => {
    const productData = {
      name,
      description,
      price,
      image,
      categoryId,
      stock,
    };
    onSubmit(productData);
  };

  return (
    <View>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Image URL"
        value={image}
        onChangeText={setImage}
      />
      <TextInput
        placeholder="Category ID"
        value={categoryId}
        onChangeText={setCategoryId}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ProductForm;