import { CurrentRenderContext } from "@react-navigation/native";
import React  from "react";
import { StyleSheet, Text, Button, ScrollView } from "react-native";
import EstilosTextos from "../EstilosTextos";

const TelaFormulario = ({navigation}) => {
    return(
        <View>
            <Text style={EstilosTextos.tituloMenu}>Tela02</Text>
            <Button
            title="Página inicial"
            onPress={() => navigation.navigate('Home')}
            />
        </View>
    );
}


export default TelaFormulario;