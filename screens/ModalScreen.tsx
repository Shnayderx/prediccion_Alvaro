import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import NaiveBayesClassifier from 'naive-bayes-classifier';
import axios from 'axios';
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from 'react';

const URL = "http://74.208.242.153:3000";

export default function ModalScreen() {
  const [dataSource, setDataSource] = useState([]);
 
  // Invoking get method to perform a GET request
axios.get(`${URL}/sugerencias/all`).then((response) => {
  setDataSource(response.data);
  console.log(response.data[0]);
});

const FlatListSeparator = () => {
  return (
    <View style={{
      height: .5,
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.5)",
    }}
    />
  )
}

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Algoritmos ML</Text>
      
     <FlatList
        data={dataSource}
        keyExtractor={({_id}) => _id}
        renderItem={({item}) => <><Text>{item["name"]} || {item["price"]} || {item["createdAt"]}</Text></> }/>
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
