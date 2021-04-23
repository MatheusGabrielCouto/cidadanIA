import React from 'react';
import { View, Image, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import IconLock from 'react-native-vector-icons/SimpleLineIcons';

import Background from '../images/background.png'
import Logo from '../images/cidadanIA.png'

// import { Container } from './styles';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground source={Background} style={{
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}>
        <View style={{ margin: 0, padding: 0 }}>
          <Image source={Logo} style={styles.logo} />
        </View>
        <View style={styles.textInput}>
          <Icon style={{ margin: 10 }} name="user-o" size={30} color="#000" />
          <TextInput style={styles.input} placeholder="Usuário" >
          </TextInput>
        </View>
        <View style={styles.textInput}>
          <IconLock style={{ margin: 8 }} name="lock" size={30} color="#000" />
          <TextInput style={styles.input} placeholder="Senha" >
          </TextInput>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => navigation.navigate('Test')}>
            <Text style={styles.textButton}>Esqueci a senha</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textButton}>Registrar-se</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      alignItems: 'center',
      flex: 1,
      backgroundColor: '#EBEBEB'
    },
    logo: {
      width: 250,
      height: 250,
      marginTop: 200,
      marginBottom: 120
    },
    textInput: {
      width: 320,
      height: 50,
      backgroundColor: '#B0B2B7',
      borderRadius: 10,
      flexDirection: 'row',
      marginTop: 30
    },
    input: {
      width: '80%',
      textAlign: 'center',
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 100
    },
    textButton: {
      fontSize: 16,
      fontWeight: 'bold'
    }
  }
)