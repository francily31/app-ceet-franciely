import react from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import EstilosTextos from '../EstilosTextos';  



//Arrow fuction

const Tela01 = ({navigation}) => {
    
    return (
        <View>
        <Text>Tela01</Text>

        <Button
        title="Voltar"
        onPress={() => navigation.navigate('Home')}
        />
        </View>
        
    );
}

export default Tela01;

