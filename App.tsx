import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, Platform } from 'react-native';
import ParentComponent from './components/parentscomponent'; 

export default function App() {
  console.log("App rendu");
  return (
    <ImageBackground
      source={require('./assets/background.jpg')} // Chemin vers  l'image
      style={styles.background}
      resizeMode="cover" // S'assure que l'image couvre l'écran
    >
      <SafeAreaView style={styles.container}>
        <ParentComponent />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%', // Occupe toute la largeur
    height: '100%', // Occupe toute la hauteur
    justifyContent: 'center', // Centre verticalement le contenu
    alignItems: 'center', // Centre horizontalement le contenu
  },
  container: {
    width: '90%', // Largeur du composant parent (pour éviter qu'il ne prenne toute la largeur)
    maxWidth: 500, // Largeur maximale sur les grands écrans
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fond semi-transparent pour voir l'image derrière
    borderRadius: 10,
    alignItems: 'center', // Centrage horizontal des éléments
    justifyContent: 'center', // Centrage vertical des éléments
  },
});
