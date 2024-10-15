import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ChildProps {
  name: string;
  price: string;
}

const ChildComponent: React.FC<ChildProps> = ({ name, price }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Nom : {name}</Text>
      <Text style={styles.itemText}>Prix : {price}</Text>
    </View>
  );
};

export default ChildComponent;

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    backgroundColor: '#fff', // Fond blanc pour bien contraster avec l'image de fond
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Effet d'ombre sur Android
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
