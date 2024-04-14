import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import LoginScreen from './screens/Login-screen';
import Register from './Components/register';
import Login from './Components/sign-in';
import HomeScreen from './Components/home-screen';
import MyStack from './Navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const [title, setTitle] = useState('StudentIO');
  const [selected, setSelected] = useState('None');




  const onRegisterClick = () => {
    setSelected('Register');
  }

  const onLogInClick = () => {
    setSelected('Log In');
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
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
