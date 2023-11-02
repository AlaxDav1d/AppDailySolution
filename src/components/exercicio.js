import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export function Exercitar(){
     return(
       <SafeAreaView>
             <ScrollView style={styles.azul}>
               <Text style={styles.title}>Exercitar</Text>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Pela Manhã:</Text>
                    <Text style={styles.text}>Uma caminhada diária é uma excelente forma de exercício aeróbico.</Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Corridas:</Text>
                    <Text style={styles.text}>
                    Se você já estiver em boa forma, pode adicionar corridas leves ao seu programa de exercícios.
                    </Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Alongamento:</Text>
                    <Text style={styles.text}>
                    Faça exercícios de alongamento para melhorar a flexibilidade e reduzir a rigidez muscular.

                    </Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Bicicleta:</Text>
                    <Text style={styles.text}>
                    Andar de bicicleta é uma maneira divertida de fazer exercícios aeróbicos.
                    </Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Yoga:</Text>
                    <Text style={styles.text}>
                    Pratique yoga para melhorar a flexibilidade, equilíbrio e reduzir o estresse.                   
                    </Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Lembrete:</Text>
                    <Text style={styles.text}>
                    Lembre-se de começar com um nível de intensidade adequado ao seu condicionamento físico atual e, gradualmente, aumentar a dificuldade à medida que se tornar mais forte e resistente. 
                    </Text>
               </View>

          </ScrollView>
       </SafeAreaView>
     )
}
const styles = StyleSheet.create({
     azul:{
          backgroundColor:'#0046B5',
          margin:10,
          borderRadius:20,
          gap:2,
          
     },
     title:{
          color:'#fff',
          fontSize:25,
          textAlign:'center',
          fontWeight:'700'
     },
     cafe:{
          margin:10,
          width:260,
          height:100,
          alignSelf:'center',
          justifyContent:'center',
          alignItems:'center'
     },
     text:{
          fontSize:15,
          color:'#fff',
          width:260,
          textAlign:'center'
     },
     textTop:{
          color:'#fff',
          fontSize:20,
          fontWeight:'500'
     }
})