import { StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import React, {useState} from 'react';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import axios from 'axios';

const URL = "http://74.208.242.153:3000";

export default function TabTwoScreen() {

  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");
  const [quality, setQuality] = useState("");
  const [price, setPrice] = useState("");
  const [result, setResult] = useState("");

  const printAdvise = () => {
    if(product == "Camara" && quality == "Alta"){
      setName("Camara");
      setQuality("Alta");
      setProduct("Camara Dahua");
      setPrice("550Bs");
      setResult("Camara Dahua 550Bs");
    }
    if(product == "Camara" && quality == "Media"){
      setName("Camara");
      setQuality("Media");
      setProduct("Camara Hikvision");
      setPrice("450Bs");
      setResult("Camara Hikvision 450Bs");
    }
    if(product == "Alarma" && quality == "Alta"){
      setName("Alarma");
      setQuality("Alta");
      setProduct("alarma Dahua");
      setPrice("750Bs");
      setResult("Alarma Dahua 750Bs");
    }
    if(product == "Alarma" && quality == "Media"){
      setName("Alarma");
      setQuality("Media");
      setProduct("Alarma Paradox");
      setPrice("650Bs");
      setResult("Alarma Paradox 650Bs");
    }
    if(product == "Biometrico" && quality == "Alta"){
      setName("Biometrico");
      setQuality("Alta");
      setProduct("Biometrico Dahua");
      setPrice("420Bs");
      setResult("Biometrico Dahua 420Bs");
    }
    if(product == "Biometrico" && quality == "Media"){
      setName("Biometrico");
      setQuality("Media");
      setProduct("Biometrico Hikvision");
      setPrice("330Bs");
      setResult("Biometrico Hikvision 330Bs");
    }

  }


async function registerBuy(name: string, quality: string,product:string,price:string) {
  const response = await axios.post(`${URL}/sugerencias/create`,{
    name:name,
    quality:quality,
    product:product,
    price:price
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
   Alert.alert('AVISO','Compra registrada!!!')
  }
}
  

  const data = [
    { key: "Camara", value: "Camara" },
    { key: "Alarma", value: "Alarma" },
    { key: "Biometrico", value: "Biometrico" },
  ];

  const dataQuality = [
    { key: "Alta", value: "Alta" },
    { key: "Media", value: "Media" },
    { key: "Baja", value: "Baja" },
  ];

  return (
    <View style={styles.container}>
     <View style={styles.dropdownCompany}>
        <Text style={styles.label}>Producto</Text>
        <SelectList
          setSelected={(val: React.SetStateAction<string>)=> setProduct(val)}
          placeholder={"Seleccionar"}
          data={data}
          save="value"
        />
          </View>
          
          <View style={styles.dropdownCompany}>
            <Text style={styles.label}>Calidad</Text>
        <SelectList 
          setSelected={(val: React.SetStateAction<string>)=> setQuality(val)}
          placeholder={"Seleccionar"}
          data={dataQuality}
          save="value"
        />
          </View>
          <View style={styles.dropdownCompany}>
          <TouchableOpacity style={styles.btnCircleNext} onPress={()=> {
            printAdvise();
      //  navigation.navigate('Main')
      }}>
        <Text style={styles.clickText}>SUGERIR</Text>
      </TouchableOpacity>
          </View>
          <View style={styles.dropdownCompany}>
          <TouchableOpacity style={styles.btnCircleNext} onPress={()=> {
    //    navigation.navigate('Main')
            registerBuy(name,quality,product,price);
      }}>
        <Text style={styles.clickText}>COMPRAR</Text>
      </TouchableOpacity>
          </View>

          <View style={styles.dropdownCompany}>
          <TextInput
          style={styles.input}
          multiline={true}
          value={result}
          placeholder="RESULTADO"
          numberOfLines={5}
        />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:100,
    padding:20
  },
  clickText:{
    alignSelf:"center",
    color:"#fff",
    fontWeight:"bold",
    fontSize:16,
    marginBottom:5
  }
  ,
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    borderStyle: "solid",
    borderColor: "blue",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 100,
    width:300,
    backgroundColor:'white',
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  }, textBtn:{
    color:"#ffffff",
    fontWeight:"bold",
    padding:10
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
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdownGender: {
    marginHorizontal: 10,
    width: "50%",
    marginBottom: 15,
  },
  dropdownCompany: {
    marginHorizontal: 10,
    width:200,
    marginBottom: 15,
    borderColor:"#ff0083",
    backgroundColor:'white',
    borderRadius:10
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 130,
    backgroundColor:'white'
  },
  getStarted: {
    backgroundColor: "#5188E3",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
});
