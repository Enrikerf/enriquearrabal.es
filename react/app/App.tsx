import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainWrapper}>
        <View style={styles.mainText}>
          <Text>Enrique Arrabal</Text>
          <Text>Software Engineer in Marbella</Text>
        </View>
        <View style={styles.mainPhotoWrapper}>
          <Image source={require("./assets/micara.jpg")} style={styles.mainPhoto}/>
        </View>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "50px auto",
  },
  mainWrapper: {
    flex: 1,
    flexDirection:"row",
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap:"wrap"
  },
  mainText:{
    flex: 0.5,
    backgroundColor: "red"
  },
  mainPhotoWrapper:{
    flex: 0.5,
    height:"100%",
    backgroundColor: "blue"
  },
  mainPhoto:{
    flex: 1,
    borderRadius:100/2,
    height:"100px",
    width:"100px",
    backgroundColor: "blue"
  }
});
