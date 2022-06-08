import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tela01 from './telas/Tela01';
import Tela02 from './telas/Tela02';
import TelaPrincipal from './telas/TelaPrincipal';
import TelaFormulario from './telas/TelaFormulario';

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={TelaPrincipal}/>
        <Stack.Screen name="Tela02" component={Tela02}/>
        <Stack.Screen name="Tela01" component={Tela01}/>
        <Stack.Screen name="TelaFormulario" component={TelaFormulario}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
