import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,Button, Image } from 'react-native';

import * as Animatable from 'react-native-animatable';
import backImage from '../../../assets/backGround.jpg';
import logo from '../../../assets/logo.png';
import { useState } from "react";


export default  function Login1({ navigation }){

    const[password,setPassword] = useState();
    const[username,setUsername]=useState();
    const[nova,setNova] = useState();   
    
    const API_URL = 'https://dailysolution.000webhostapp.com//classLogin.php';
    const API_LINK = 'https://dailysolution.000webhostapp.com//confEmailTel.php';
    const onPressHandler = async()=>{
      const headers ={
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
        'Acess-Control-Allow-Origin':'*',
      }
      const response = await fetch(`${API_LINK}`,{
            method: "POST",
            headers,
            body: JSON.stringify({
              user: username,
            })
      });
      const recebido = await response.json();
      console.log(recebido.status);
      if(recebido.status == 1){
        alert('Email ou Senha invalidos');
      }else{

                
      const headers ={
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
        'Acess-Control-Allow-Origin':'*',
      }
      const response = await fetch(`${API_URL}`,{
            method: "POST",
            headers,
            body: JSON.stringify({
              senha:password,
              user: username,
            })
      });     
    let require = await response.json();
    let nova = require.meta;
    let nova2 = require.status;

    console.log(nova);
    if(nova2 == 2){
      alert('Email ou Senha invalidos');
    }else{
    if(nova == '"cardio"'){
      nova = 'exercitar';
    }else if(nova == '"musculo"'){
      nova = 'ganhar';
    }else if(nova == '"resistencia"'){
      nova = 'perder';
    }else{
      nova = nova;
    }
    switch(nova){
      case'ganhar':
      alert('Login Realizado com Sucesso');
      navigation.navigate('Main',{nova});
      break;
      case 'perder':
        alert('Login Realizado com Sucesso');
        navigation.navigate('Main',{nova});
        break;
      case 'exercitar':
        alert('Login Realizado com Sucesso');
        navigation.navigate('Main',{nova});
        break;
    }}


      }

    }
    return (
       <View style={styles.container} >
         <ImageBackground source={backImage} style={styles.background}>
         <StatusBar />
           <Animatable.View animation='fadeInUpBig'  style={styles.logo}>
             <Image source={logo} style={{height:100,width:100}}/>
           </Animatable.View>
           <Animatable.View animation='fadeInUpBig' delay={300} style={styles.form} >
            <Text style={styles.login}>Login</Text>
             <View style={{gap:10}}>
               <Text style={styles.span}>E-mail</Text>
               <TextInput style={styles.input} onChangeText={(text)=>setUsername(text)}/>
               <Text style={styles.span}>Senha</Text>
               <TextInput style={styles.input}onChangeText={(senhaTxt)=>setPassword(senhaTxt)} />
               <TouchableOpacity onPress={onPressHandler}><Text style={styles.button}>Realizar Login</Text></TouchableOpacity>
             </View>
             <Text style={styles.pergunta}>Não é registrado ainda?</Text>
   
             <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
               <Text style={{fontSize:30,color:'#0046B5',fontWeight:'900'}}>Cadastre-se</Text>
             </TouchableOpacity>
           </Animatable.View>
           <Animatable.View animation='fadeInUpBig' delay={600} style={styles.info}>
             <Text style={{width:280,textAlign:'center'}}>
              <Text style= {{textAlign:'center',color:'#0046B5',letterSpacing:1,fontWeight:400}}> O aplicativo <Text style={{fontWeight:700}}>Daily Solution</Text> é uma </Text>
               <Text style={{textAlign:'center',color:'#0046B5',letterSpacing:1,fontWeight:400}}>ferramenta de saúde que ajuda os </Text>
               <Text style={{textAlign:'center',color:'#0046B5',letterSpacing:1,fontWeight:400}}>usúarios a atingir metas de peso</Text>
               <Text style={{textAlign:'center',color:'#0046B5',letterSpacing:1,fontWeight:400}}>(perder,ganhar ou manter) de forma </Text>
               <Text style={{textAlign:'center',color:'#0046B5',letterSpacing:1,fontWeight:400}}>simples.Ele cria planos alimentares </Text>
               <Text style={{textAlign:'center',color:'#0046B5',letterSpacing:1,fontWeight:400}}>personalizados com base em </Text>
               <Text style={{textAlign:'center',color:'#0046B5',letterSpacing:1,fontWeight:400}}>informações do usúario e fornece dicas</Text>
               <Text style={{textAlign:'center',color:'#0046B5',letterSpacing:1,fontWeight:400}}>saudáveis,receitas,notificações e </Text>
               <Text style={{textAlign:'center',color:'#0046B5',letterSpacing:1,fontWeight:400}}>suporte para uma vida mais saudável.</Text>
             </Text>
           </Animatable.View>
         </ImageBackground>
       </View>
     );
   }const styles = StyleSheet.create({
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
       width:250,
       paddingLeft:4,
     },
     button:{
      textAlign:"center",
      backgroundColor:'#0046B5',
      color:'#fff',
      fontWeight:'400',
      padding:5,
      fontSize:12,
      width:110,
      borderRadius:20
     },
   login:{
     textAlign:'center',
     backgroundColor:'#0046B5',
     color:'#fff',
     fontWeight:'bold',
     fontSize:20,
     marginBottom:25,
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
     marginTop:40,
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