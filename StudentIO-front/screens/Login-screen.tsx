import React, { useState } from 'react';
import {View, Text, Button, Image, StyleSheet, TextInput} from 'react-native';


export default function LoginScreen() {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    console.log("LoginScreen");


    return (

        
        <View style={styles.container}>
            <Image source={require('../assets/images/STUDENTIO_ICON.png')} style={styles.image} />
            <TextInput></TextInput>            
            <Button title="Log In" onPress={() => console.log("Log In")} />
            <Button title="Register" onPress={() => console.log("Register")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        width: 305,
        height: 159,
        marginBottom: 10,
        // borderRadius: 10,
    }, 
});