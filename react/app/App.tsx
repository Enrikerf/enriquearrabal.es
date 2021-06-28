import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.mainText}>
                <h1>Enrique Arrabal</h1>
                <h2>Software Engineer in Marbella</h2>
            </View>
            <View style={styles.mainPhotoWrapper}>
                <Image source={require("./assets/micara.jpg")} style={styles.mainPhoto}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: "50px",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "50px",
        maxWidth: "650px",
        padding: "5px",
        display: "flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems:"center"
    },
    mainText: {
        maxWidth:"350px",
        backgroundColor: "red"
    },
    mainPhotoWrapper: {
        position: "relative",
        width: "300px",
        height: "300px",
        margin: "0 0 10px 0",
        borderRadius: 50,
        overflow: "hidden",
        backgroundColor: "blue",
        display: "flex",
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent: "center",
        alignItems:"center"

    },
    mainPhoto: {
        flex: 1,
        borderRadius: 100 / 2,
        height: "100px",
        width: "100px",
        backgroundColor: "blue"
    }
});
