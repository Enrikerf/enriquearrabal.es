import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Button,
  Linking,
} from "react-native";

export default function App() {
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <h1>Enrique Arrabal</h1>
          <h2>Software Engineer in Marbella</h2>
        </View>
        <View style={styles.headerPhotoWrapper}>
          <Image
            source={require("./assets/micara.jpg")}
            style={styles.headerPhoto}
          />
        </View>
      </View>
      <View style={styles.links}>
        <Text
          onPress={() => Linking.openURL("https://twitter.com/enrikerf")}
          style={styles.link}
        >
          twitter
        </Text>
        <Text
          onPress={() => Linking.openURL("https://twitter.com/enrikerf")}
          style={styles.link}
        >
          twitter
        </Text>
        <Text
          onPress={() => Linking.openURL("https://twitter.com/enrikerf")}
          style={styles.link}
        >
          twitter
        </Text>
        <Text
          onPress={() => Linking.openURL("https://twitter.com/enrikerf")}
          style={styles.link}
        >
          twitter
        </Text>
      </View>
      <View style={styles.switcher}>
        <Button
          title="Me"
          onPress={() => alert("Left button pressed")}
        ></Button>
        <Button
          title="More Me"
          onPress={() => alert("Left button pressed")}
        ></Button>
        <Button
          title="Elevator pitch"
          onPress={() => alert("Left button pressed")}
        ></Button>
      </View>
      <View>
        {0 ? <Text>ME</Text> : null}

        <Text>MORE ME</Text>
        <Text>ELEVATOR PITCH</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: "50px",
    marginHorizontal: "auto",
    maxWidth: "650px",
    padding: "5px",
    display: "flex",
  },
  header: {
    marginVertical: "50px",
    marginHorizontal: "auto",
    maxWidth: "650px",
    padding: "5px",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    maxWidth: "350px",
    backgroundColor: "red",
  },
  headerPhotoWrapper: {
    position: "relative",
    width: "300px",
    height: "300px",
    margin: "0 0 10px 0",
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  headerPhoto: {
    flex: 1,
    borderRadius: 100 / 2,
    height: "100px",
    width: "100px",
    backgroundColor: "blue",
  },
  links: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  link: {
    color: "red",
    textDecorationLine: "underline",
  },
  switcher: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
