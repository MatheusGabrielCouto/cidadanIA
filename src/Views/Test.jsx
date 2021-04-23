import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Logo from '../images/cidadanIA.png';
// import { Container } from './styles';

const Test = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Desenvolvido por PI Group</Text>
      <Text style={styles.text}>2021</Text>
      <Image source={Logo} style={styles.logo} />
      <LottieView style={styles.animation} source={require('..//images/animation.json')} autoPlay loop />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D6D6D6'
  },
  text: {
    color: '#c0c0c0',

  },
  logo: {
    width: 250,
    height: 250,
    marginTop: 200,
    marginBottom: 120
  },
  animation: {
    width: 150
  }
})

export default Test;