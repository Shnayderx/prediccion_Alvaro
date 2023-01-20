import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import NaiveBayesClassifier from 'naive-bayes-classifier';

export default function ModalScreen() {
  let nb = new NaiveBayesClassifier();
  // test dataset

  const data = [
    { product: "Camara", quality: "Alta" },
    { product: "Camara", quality: "Media" },
    { product: "Alarma", quality: "Alarma" },
    { product: "Alarma", quality: "Media" },
    { product: "Biometrico", quality: "Alta" },
    { product: "Biometrico", quality: "Media" },
  ];

  let testData = [{
    product: "Camara",
    quality: "Baja"
},{
    product: "Alarma",
    quality: "Media"
}];

  nb.train(data);
  nb.test(data, testData); 
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Algoritmos ML</Text>
      

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
