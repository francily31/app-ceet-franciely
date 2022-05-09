import { CurrentRenderContext } from "@react-navigation/native";
import React  from "react";
import { StyleSheet, Text, Button, ScrollView } from "react-native";
import EstilosTextos from "../EstilosTextos";

const TelaPrincipal = ({navigation}) => {

    return(
         <ScrollView> 
             <Text>Tela Principal</Text>
             <Text>## Botão de Navegação ##</Text>
             <Button title="Vai para Tela 01" onPress={() => navigation.navigate('Tela01')}/>
             <Button title="Vai para Tela 02" onPress={() => navigation.navigate('Tela02')}/>
             <Button title="Entre aqui" onPress={() => navigation.navigate('')}></Button>
         </ScrollView>
    );
}

export default TelaPrincipal;