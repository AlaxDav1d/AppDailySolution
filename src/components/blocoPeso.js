import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export function BlocoPeso(){
     return(
       <SafeAreaView>
             <ScrollView style={styles.azul}>
               <Text style={styles.title}>Dieta Para Ganhar Peso</Text>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Café da Manhã:</Text>
                    <Text style={styles.text}>Aveia com frutas e nozes
                    Um copo de iogurte desnatado
                    Chá verde ou café sem açucar</Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Lanche da Manhã:</Text>
                    <Text style={styles.text}>
                         Um punhado de amêndoas ou nozes.
                         Uma Maçã ou outra fruta fresca.
                    </Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Almoço:</Text>
                    <Text style={styles.text}>
                         Peito de frango grelhado ou peixe magro(salmão,tilápia).
                         Salada de vegetais variados com azeite de oliva e limão.
                         Quinoa ou arroz integral

                    </Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Lanche da Tarde:</Text>
                    <Text style={styles.text}>
                         Um copo de iogurte desnatado.Palitos de cenoura ou pepino.
                    </Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Jantar:</Text>
                    <Text style={styles.text}>
                         Tofu para opções vegetarianas,Brocolis ou aspargos
                         cozidos no vapor,salada de folhas verdes com um molho
                         a base de iogurte                           
                    </Text>
               </View>
               <View style={styles.cafe}>
                    <Text style={styles.textTop}>Lanche Noturno(opcional):</Text>
                    <Text style={styles.text}>
                         Um Pequeno punhado de morangos ou frutas leves
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