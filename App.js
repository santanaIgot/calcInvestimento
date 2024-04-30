import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home} from './src/Components/Home/Home';
import { Formulario } from './src/Components/Home/Formulario/Formulario';
import { Resultado } from './src/Components/Home/Resultado/Resultado';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{title:'Tela inicial'}}/>
        <Stack.Screen name='Formulario' component={Formulario} options={{title:'Formulario'}}/>
        <Stack.Screen name='Resultado' component={Resultado} options={{title:'Resultado'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
});
