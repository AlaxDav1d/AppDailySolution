import { ImageBackground, StyleSheet, Text, View } from "react-native";
import backImage from '../../../assets/backGround.jpg';
export function Main(){
     return(
          <View style={estilos.container}>
               <View style={estilos.topo}></View>
               <ImageBackground source={backImage} style={estilos.back}>
                    <Text style={estilos.title}>Ola Usuario</Text>
                    <Text style={{color:"#fff",fontSize:23,textAlign:"center"}}>Preparamos essa pagina para te ajudar a manter </Text>
                    <Text style={{color:"#fff",fontSize:23,textAlign:"center"}}>hábitos saudáveis.Com tudo isso montamos uma dieta</Text>
                    <Text style={{color:"#fff",fontSize:23,textAlign:"center"}}> para você com base nas informações preenchidas no </Text>
                    <Text style={{color:"#fff",fontSize:23,textAlign:"center"}}>formulario</Text>
                    <Text style={estilos.login}>Aproveite</Text>
               </ImageBackground>
          </View>
     )
}
const estilos = StyleSheet.create({
     container:{
          flex:1,
     },topo:{
          flex:0.1,
          backgroundColor:'#fff'
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
})