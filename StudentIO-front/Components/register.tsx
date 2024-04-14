import React, { useState } from 'react';
import { View, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';


export default function Register() {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [selectedGender, setSelectedGender] = useState('');
    const [year, setYear] = useState(0);
    const navigator = useNavigation();
    const handleRegister = async () => {
        try {
            const response = await axios.post('http://10.100.102.11:3000/auth/register', {
                email: email,
                name: fullName,
                password: password,
                gender: selectedGender,
                year: year
            });
            console.log('Registration successful:', response.data);
            navigator.navigate('Login' as never);
            // You may want to navigate to another screen upon successful registration
        } catch (error) {
            console.error('Registration failed:', error);
            // Handle error, show error message to user, etc.
        }
    };
    

    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/STUDENTIO_ICON.png')} style={styles.icon} />
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Your Full Name"
                    keyboardType="default"
                    autoCapitalize="none"
                    onChangeText={(text) => setFullName(text)}
                />
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
                <View style={styles.gender}>
                    <TouchableOpacity
                        style={[styles.genderOption, selectedGender === 'Female' && styles.selectedGender]}
                        onPress={() => setSelectedGender('Female')}>
                        <Image source={require('../assets/images/STUDENT_FE.png')} style={styles.genderIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.genderOption, selectedGender === 'Male' && styles.selectedGender]}
                        onPress={() => setSelectedGender('Male')}>
                        <Image source={require('../assets/images/STUDENT_MALE.png')} style={styles.genderIcon} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Year of Studies"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    onChangeText={(text: any) => setYear(text)}

                />
                <Button title="Register" onPress={handleRegister} />
            </View>
        </View>
);
    
};

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
    gender: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        alignItems: 'center',
    },
    genderOption: {
        borderWidth: 2,
        borderRadius: 10,
        padding: 5,
    },
    selectedGender: {
        borderColor: 'blue',
    },
    genderIcon: {
        alignItems: 'center',
        width: 50,
        height: 50,
    },
});

