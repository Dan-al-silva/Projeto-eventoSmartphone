import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Alert} from 'react-native';
import { Touchable } from 'react-native-web';


export default function Pesquisa() {
  function pesquisarCelular(){
    Alert.alert('Atenção','Estamos fora do ar ')
  }
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Qual celular Você quer?</Text>
          <TextInput style={styles.txtInput}
          placeholder='Digite algum celular.'/>

          <TouchableOpacity style={styles.botao} onPress={()=>pesquisarCelular()}>
              <Text style={styles.txtbotao}>Pesquisar</Text>
          
          </TouchableOpacity>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'orange',
  },
  txtInput:{
    padding:5,
    marginBottom:25,
    fontSize:20,

  },
  botao:{
    backgroundColor:'#5E5200',
    padding:5,
    borderRadius:10,
    width:'70%',
    

  },
  txtbotao:{
    color:'white',
     fontSize:20,
     textAlign:'center',
  },
  titulo:{
    backgroundColor:'#447814',
    padding:5,
    color:'white',
    marginBottom:100,
    fontSize:30,
    borderRadius:10,
  }
});