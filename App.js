import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

/* Importando telas */
import TelaInicial from './src/screens/TelaInicial';
import SegundaTela from './src/screens/SegundaTela';
import CodeScanner from './src/screens/CodeScanner';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicial'>
            <Stack.Screen name='Inicial' component={TelaInicial} />
            <Stack.Screen name='Segunda' component={SegundaTela} />
            <Stack.Screen name='CodeScanner' component={CodeScanner} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App