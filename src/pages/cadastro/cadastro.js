import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import backImage from '../../../assets/backGround.png';
import logo from '../../../assets/logo.png';
import * as Animatable from 'react-native-animatable';
import { useState } from "react";


export default function Cadastro({ navigation }){
     const[usuario,setUsuario]= useState();
     const[email,setEmail]= useState();
     const[senha,setSenha]= useState();
     const[confSenha,setConfSenha]= useState();
     const [valor,setValor] = useState(0);
     const API_URL = 'https://dailysolution.000webhostapp.com//cadastro.php';


     async function cadastro(){
          if(senha === confSenha){
               if(valor == 1){
                    meta = 'ganhar'
               }else if(valor == 2){
                    meta = 'perder'
               }else{
                    meta = 'exercitar'
               }

               const config={ 
                    method:'post',
                   headers:{ 'Accept': 'application/json', 
                               'Content-Type' : 'application/json'},
                   body:JSON.stringify({
                       nome: usuario,
                       email: email, 
                       senha: senha,
                       foco: meta
                   })               
               }
               const enviado =await fetch(`${API_URL}`,config);
               const require =await enviado.json();
               let nova = meta;
               if(meta == 'ganhar'){
                    alert("Cadastro realizado com sucesso");
                    navigation.navigate('Main',{nova});
               }else if(meta == 'perder'){
                    alert("Cadastro realizado com sucesso");
                    navigation.navigate('Main',{nova});
               }else{
                    alert("Cadastro realizado com sucesso");
                    navigation.navigate('Main',{nova});
               }

          }else{
               alert('As senhas não coincidem');
          }

     }

     return(
          <View style={styles.container}>
              <ImageBackground source={backImage} style={styles.background}>
                    <Animatable.View style={styles.logo}  animation='fadeInUpBig'>
                         <Image source={logo} style={{height:100,width:100}}/>
                    </Animatable.View>
                    <Animatable.View style={styles.form} animation='fadeInUpBig' delay={600}>
                         <View style={{gap:10}}>
                              <Text style={styles.span}>Nome Completo</Text>
                              <TextInput style={styles.input} onChangeText={(text)=>setUsuario(text)}/>
                              <Text style={styles.span}>E-mail</Text>
                              <TextInput style={styles.input}onChangeText={(emailTxt)=>setEmail(emailTxt)} />
                              <Text style={styles.span}>Senha</Text>
                              <TextInput style={styles.input}onChangeText={(senhaTxt)=>setSenha(senhaTxt)} />
                              <Text style={styles.span}>Confirmar Senha</Text>
                              <TextInput style={styles.input}onChangeText={(senhaTxt)=>setConfSenha(senhaTxt)} />
                              <Text style={{color:'#0046B5',fontWeight:"bold",fontSize:20,alignSelf:"center"}}>Qual o Seu Objetivo?</Text>
                             <View style={{flexDirection:'row',gap:20,alignSelf:'center',width:"100%"}}>
                             <TouchableOpacity onPress={()=>setValor(1)}>
                                   <View style={{alignItems:'center'}}>
                                        <Text style={styles.text}>Ganhar Peso</Text>
                                        <View style={styles.botao}>
                                             {valor===1?<View style={styles.lilBall}></View>:null}
                                        </View>
                                        
                                   </View>
                              </TouchableOpacity>
                             <TouchableOpacity onPress={()=>setValor(2)}>
                                   <View style={{alignItems:'center'}}>
                                        <Text style={styles.text}>Perder Peso</Text>
                                        <View style={styles.botao}>
                                             {valor===2?<View style={styles.lilBall}></View>:null}
                                        </View>
                                        
                                   </View>
                              </TouchableOpacity>
                             <TouchableOpacity onPress={()=>setValor(3)}>
                                   <View style={{alignItems:'center'}}>
                                        <Text style={styles.text}>Exercitar</Text>
                                        <View style={styles.botao}>
                                             {valor===3?<View style={styles.lilBall}></View>:null}
                                        </View>
                                       
                                   </View>
                              </TouchableOpacity>
                             </View>
                             < TouchableOpacity style={{alignSelf:"center"}} onPress={cadastro} >
                                   <Text style={styles.login}>Inscrever-se</Text>
                              </TouchableOpacity>
                         </View>
                    </Animatable.View>
               </ImageBackground>
          </View>
     )
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
       height:500,
       backgroundColor:'#fff',
       width:350,
       margin:40,
       borderRadius:20,
       alignItems:'center',
       justifyContent:"center",
       padding:20
     },
     input: {
       height: 30,
       borderWidth: 1,
       borderColor:'#0046B5',
       paddingLeft: 4,
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
   },     botao:{
     borderWidth:2,
     height:25,
     width:25,
     borderRadius:20,
     alignItems:'center',
     justifyContent:"center",
},
lilBall:{
     backgroundColor:'blue',
     height:15,
     width:15,
     borderRadius:20,
     padding:5,
},
text:{
     color:'#0046B5',
     fontWeight:"400",
     fontSize:15,
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

   });