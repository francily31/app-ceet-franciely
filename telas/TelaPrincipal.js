import { CurrentRenderContext } from "@react-navigation/native";
import react from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import EstilosTextos from "../EstilosTextos";

const TelaPrincipal = ({navigation}) => {

    return(
         <View> 
             <Text>Tela Principal</Text>
             <Text>## Botão de Navegação ##</Text>
             <Button title="Vai para Tela 01" onPress={() => navigation.navigate('Tela01')}/>
             <Button title="Vai para Tela 02" onPress={() => navigation.navigate('Tela02')}/>
         </View>
    );
}

export default TelaPrincipal;