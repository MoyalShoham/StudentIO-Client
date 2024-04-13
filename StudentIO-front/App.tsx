import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [title, setTitle] = useState('StudentIO');


  const onImageClick = () => {
    setTitle("Hello");
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onImageClick}>
        <Image source={require('./assets/images/STUDENTIO_ICON.png')} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
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
