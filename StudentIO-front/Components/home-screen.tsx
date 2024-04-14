import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import Register from './register';
import Login from './sign-in';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const [title, setTitle] = useState('StudentIO');
  const [selected, setSelected] = useState('None');

  const onRegisterClick = () => {
    navigation.navigate('Register' as never);
  }

  const onLogInClick = () => {
    navigation.navigate('Login' as never);
  }

  return (
    
    <View style={styles.container}>
      
      <Image source={require('../assets/images/STUDENTIO_ICON.png')} style={styles.image} />
   
      <Text style={styles.title}>{title}</Text>
      <Button title="Register" onPress={onRegisterClick} />
      <Button title="Log In" onPress={onLogInClick} />
      {/* <Login /> */}

      {/* {selected === 'Register' ? <Register /> : <Login />} */}
      <StatusBar style="dark" />

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
