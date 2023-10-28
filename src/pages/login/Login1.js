import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View,Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import backImage from '../../../assets/backGround.jpg';
import logo from '../../../assets/logo.png';


export default function Login1({ navigation }){
     return (
       <View style={styles.container} >
         <ImageBackground source={backImage} style={styles.background}>
         <StatusBar />
           <View style={styles.logo}>
             <Image source={logo} style={{height:100,width:100}}/>
           </View>
           <View style={styles.form}>
            <Text style={styles.login}>Login</Text>
             <View style={{gap:10}}>
               <Text style={styles.span}>E-mail</Text>
               <TextInput style={styles.input} onChangeText={(text)=>setUsuario(text)}/>
               <Text style={styles.span}>Senha</Text>
               <TextInput style={styles.input}onChangeText={(senhaTxt)=>setSenha(senhaTxt)} />
               <TouchableOpacity><Text style={styles.button}>Realizar Login</Text></TouchableOpacity>
             </View>
             <Text style={styles.pergunta}>Não é registrado ainda?</Text>
   
             <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
               <Text style={{fontSize:30,color:'#0046B5',fontWeight:'900'}  }>Cadastre-se</Text>
             </TouchableOpacity>
           </View>
           <View style={styles.info}>
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
           </View>
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
       padding: 10,
       width:250,
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