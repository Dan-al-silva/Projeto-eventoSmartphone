import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Api from '../pages/Api';

export default function Celular() {

const [dadosCelular,setdadosCelular] = useState([]);

async function getCelular(){
  try{
    const resultado = await Api.get(`/dataC`);
    return resultado.data
  }catch(error){
    console.log(error)
    return []
  }
}

useEffect(async() => {
  const resp = await getCelular()
  setdadosCelular(resp);
},[]);

  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}>Lista dos Celulares 2022</Text>

      <FlatList
        data={dadosCelular}
        keyExtractor={dadosCelular => dadosCelular.uid}
        renderItem={({ item }) =>
          <TouchableOpacity>
            <View style={estilo.grupoCelular}>

              <Text style={estilo.txtCel1}>{item.uid}</Text>
              <Text style={estilo.txtCel2}>{item.marca}</Text>
              <Text style={estilo.txtCel3}>{item.modelo}</Text>
              <Text style={estilo.txtCel4}>{item.sistema}</Text>
              <Text style={estilo.txtCel5}>{item.lancamento}</Text>

            </View>
          </TouchableOpacity>

        }

      />
      <StatusBar style="auto"/>
    </View>
  );
}


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#643A8F',
  },
  titulo: {
    fontSize: 30,
    color: "white",
    textAlign: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  grupoCelular: {
    backgroundColor: '#8B0E32A3',
    margin: 15,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  txtCel1: {
    fontSize: 20,
    backgroundColor:'white',
    padding:5,
    borderRadius:20,
    width:'50%',
    marginBottom:7,
  },
  txtCel2: {
    fontSize: 15,
    backgroundColor:'#076AD9',
    color:'white',
    padding:5,
    borderRadius:20,
    width:'50%',
    marginBottom:7,
  },
  txtCel3: {
    fontSize: 15,
    backgroundColor:'white',
    padding:5,
    borderRadius:20,
    width:'50%',
    marginBottom:7,
  },
  txtCel4: {
    fontSize: 15,
    backgroundColor:'#01898B',
    color:'white',
    padding:5,
    borderRadius:20,
    width:'50%',
    marginBottom:7,
  },
  txtCel5: {
    fontSize: 15,
    backgroundColor:'white',
    padding:5,
    borderRadius:20,
    width:'50%',
  },
});