
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const dummyProducts = [
  { id: '1', name: 'Bamboo Toothbrush' },
  { id: '2', name: 'Reusable Cotton Rounds' },
  { id: '3', name: 'Compostable Phone Case' },
];

const ProductListScreen = ({ navigation }) => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Eco-Friendly Products</Text>
      <FlatList
        data={dummyProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button title={item.name} onPress={() => navigation.navigate('ProductDetail', { product: item })} />
        )}
      />
    </View>
  );
};

export default ProductListScreen;
