import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const navigator = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://10.100.102.11:3000/auth/login', {
                email: email,
                password: password
            });
            // Handle success response
            console.log('Login successful:', response.data);
            navigator.navigate('HomePage' as never);
            // You may want to navigate to another screen upon successful login
        } catch (error) {
            // Handle error
            console.error('Login failed:', error);
            Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
        }
    };

    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/STUDENTIO_ICON.png')} style={styles.icon} />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Email@address.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    textContentType="emailAddress"
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry
                    autoCapitalize="none"
                    textContentType="password"
                    onChangeText={(text) => setPassword(text)}
                />
                <Button title="Login" onPress={handleLogin} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 200,
        height: 100,
        marginBottom: 20,
    },
    form: {
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'blue',
        borderWidth: 0.3,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'lightblue',
        borderRadius: 10,
    },
});
