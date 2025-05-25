
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const SubmitReviewScreen = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>Leave a Review</Text>
      <TextInput placeholder="Your review..." style={{ borderWidth: 1, marginVertical: 10, padding: 10 }} />
      <Button title="Submit" onPress={() => alert('Review submitted!')} />
    </View>
  );
};

export default SubmitReviewScreen;
