import react from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import EstilosTextos from "../EstilosTextos";

const Tela02 = ({navigation}) => {
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


export default Tela02;

//Arrow fuction

//const Tela01 = () => {

    //const Tela02 = () => {

        //class Tela02 extends React.Component {