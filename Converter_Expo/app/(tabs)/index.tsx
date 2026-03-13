import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Converter App</Text>
        <Text style={styles.subtitle}>Welcome! Let's build this.</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: '#555',
  },
});
