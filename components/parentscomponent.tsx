import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ChildComponent from './childscomponent';// Importation du composant enfant

const ParentComponent: React.FC = () => {
  const items = [
    { name: 'Article 1', price: '$10' },
    { name: 'Article 2', price: '$20' },
    { name: 'Article 3', price: '$30' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste des Articles</Text>
      {items.map((item, index) => (
        <ChildComponent key={index} name={item.name} price={item.price} />
      ))}
    </View>
  );
};

export default ParentComponent;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
});
