import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
       
    <Text style={styles.titulo}>Lançamentos 2022</Text>
    <Text style={styles.subtitulo}>Smartphone, Celulares ultimos lançamento </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
      
  }
 
});