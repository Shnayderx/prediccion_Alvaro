import { StyleSheet, TouchableOpacity, Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import axios from 'axios';


const baseURL = "http://74.208.242.153:3000";

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

async function registerPref(pref: string) {
  const response = await axios.post(`${baseURL}/preferencias/create`,{
    preferencia:pref
  })
  if(response.status === 200){
//    setName('');
 //   setCurp('');
 //   setNSS('');
 //   setEmail('');
 //   setPhone('');
 //   setAfore('');
 //   setSemanas('');
 //   setMonto('');
 //   setEstatus('');
 //   setModalVisible(false);
    //setModalPayload(true);
   Alert.alert('AVISO','Preferencia registrada!!!')
  }
}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnCircleNext} onPress={()=> {
        registerPref('Novedad')
      }}>
        <Text style={styles.clickText}>NOVEDADES</Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity style={styles.btnCircleNext} onPress={()=> {
       registerPref('Oferta')
      }}>
        <Text style={styles.clickText}>OFERTAS</Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity style={styles.btnCircleNext} onPress={()=> {
        registerPref('Calidad')
      }}>
        <Text style={styles.clickText}>CALIDAD</Text>
      </TouchableOpacity>
      <View style={styles.separator}></View>
      <TouchableOpacity style={styles.btnCircleNext} onPress={()=> {
        registerPref('Recomendacion')
      }}>
        <Text style={styles.clickText}>RECOMENDACIONES</Text>
      </TouchableOpacity>
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
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  btnCircleNext:{
    alignSelf:"center",
    width:200,
    borderRadius:10,
    backgroundColor:"#AA076B",
    borderColor:"#c71bb2",
    borderWidth:2,
    paddingTop:10,
    textAlignVertical:"center"
  },
  clickText:{
    alignSelf:"center",
    color:"#fff",
    fontWeight:"bold",
    fontSize:16,
    marginBottom:5
  }
});
