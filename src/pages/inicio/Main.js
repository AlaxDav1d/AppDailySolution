import { ImageBackground, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import backImage from '../../../assets/backGround.png';
import { useState } from "react";
import { Quadro } from "../../components/quadro";
import { BlocoPeso } from "../../components/blocoPeso";
import { Exercitar } from "../../components/exercicio";
import * as Animatable from 'react-native-animatable';

export function Main({route}){
     const[nova,setNova] = useState();
     console.log(route.params.nova);
     let muito = route.params.nova;
     return(
          <SafeAreaView>
               <StatusBar ></StatusBar>
               <ScrollView>
               <Animatable.View style={estilos.container}  animation='fadeInUpBig'  delay={600}>

               <ImageBackground source={backImage} style={estilos.back}>
                    <Text style={estilos.title}>Olá Usuario</Text>
                    <Text style={{color:"#fff",fontSize:23,textAlign:"center"}}>Preparamos essa pagina para te ajudar a manter </Text>
                    <Text style={{color:"#fff",fontSize:23,textAlign:"center"}}>hábitos saudáveis.Com tudo isso montamos uma dieta</Text>
                    <Text style={{color:"#fff",fontSize:23,textAlign:"center"}}> para você com base nas informações preenchidas no </Text>
                    <Text style={{color:"#fff",fontSize:23,textAlign:"center"}}>formulario</Text>
                    <TouchableOpacity>
                    <Text style={estilos.login}>Aproveite</Text>
                    </TouchableOpacity>
               </ImageBackground>
               
               {muito == 'ganhar'?(<BlocoPeso/>
               ):muito == 'perder'?(<Quadro/>
               ):(<Exercitar/>)}

               
          </Animatable.View>
               </ScrollView>
          </SafeAreaView>
     )
}
const estilos = StyleSheet.create({
     container:{
          flex:1,
     },
     back:{
          flex:0.4,
          justifyContent:"center",
          alignContent:'center',
          padding:15,
     },
     title:{
          fontSize:30,
          color:"#fff",
          textAlign:'center',
          margin:15
     },
     login:{
          alignSelf:'center',
          textAlign:'center',
          backgroundColor:'#0046B5',
          color:'#fff',
          fontWeight:'bold',
          fontSize:20,
          margin:20,
          padding:15,
          width:200,
          borderRadius:20
        },
})