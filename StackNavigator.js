
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductListScreen from './screens/ProductListScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import SubmitReviewScreen from './screens/SubmitReviewScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductListScreen} options={{ title: 'EcoFind' }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product Details' }} />
      <Stack.Screen name="SubmitReview" component={SubmitReviewScreen} options={{ title: 'Leave a Review' }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
