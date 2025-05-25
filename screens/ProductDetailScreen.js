
import React from 'react';
import { View, Text, Button } from 'react-native';

const ProductDetailScreen = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>{product.name}</Text>
      <Text style={{ marginTop: 10 }}>This is a placeholder for product sustainability info, materials, etc.</Text>
      <Button title="Leave a Review" onPress={() => navigation.navigate('SubmitReview')} />
    </View>
  );
};

export default ProductDetailScreen;
