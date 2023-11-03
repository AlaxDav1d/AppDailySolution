import * as React from 'react';
import { ImageBackground, StyleSheet, View,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Ir para login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
import Cadastro from './src/pages/cadastro/cadastro';
import Login1 from './src/pages/login/Login1';
import { Main } from './src/pages/inicio/Main';
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Login1" component={Login1}  />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyStack />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  logo:{
    backgroundColor:'#fff',
    height:100,
    width:350,
    marginTop:20,
    borderRadius:20,    
    alignItems:'center',
    justifyContent:'center',
  },
  form:{
    height:400,
    backgroundColor:'#fff',
    width:350,
    margin:40,
    borderRadius:20,
    alignItems:'center',
    padding:20
  },
  input: {
    height: 30,
    borderWidth: 1,
    borderColor:'#0046B5',
    padding: 10,
    width:250,
  },
login:{
  textAlign:'center',
  backgroundColor:'#0046B5',
  color:'#fff',
  fontWeight:'bold',
  fontSize:20,
  margin:25,
  padding:15,
  width:200,
  borderRadius:20
},
span:{
  color:'#0046B5',
  fontWeight:"bold",
  fontSize:15,
},
pergunta:{
  textAlign:'center',
  backgroundColor:'#0046B5',
  color:'#fff',
  fontWeight:'400',
  margin:20,
  padding:5,
  width:200,
  borderRadius:20
},
info:{
  backgroundColor:'#fff',
  width:350,
  height:200,
  alignItems:"center",
  justifyContent:'center',
  padding:1,
  textAlign:"center"
}
});