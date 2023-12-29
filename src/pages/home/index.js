import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import { ModalPassword } from '../../components/modal/index'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
// let charset = "abcdefghijklmnopqrstuvwxyz@-_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"



export function Home() {

  const[size, setSize] = useState(10)
  const[passwordValue, setPasswordValue] = useState("")
  const[modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    let password = ""
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Image
        style={styles.logo} 
        // source={require("./src/assets/cadeado.png")}
        source={require("../../assets/cadeado.png")}
      />
      <Text style={styles.title}>{size} : caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#6A5ACD'
          // minimumTrackTintColor='#6A5ACD'
          // thumbTintColor="#f60"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
      
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 200,
    height: 200,
    marginBottom:50
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold'
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8
  },
  button:{
    backgroundColor: "#392de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText:{
    color: "#fff",
    fontSize: 20
  },


});
