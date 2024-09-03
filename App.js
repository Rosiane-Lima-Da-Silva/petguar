import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Index} from './src/telas/Index';
import {Login} from './src/telas/Login';
import {Cadastro} from './src/telas/Cadastro';
import {Itens} from './src/telas/Itens';


const Stack = createNativeStackNavigator();






export default function App()  {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Index'>
          <Stack.Screen  name='Index' component={Index}></Stack.Screen>
          <Stack.Screen  name='Login' component={Login}></Stack.Screen>
          <Stack.Screen  name='Cadastro' component={Cadastro}></Stack.Screen>
          <Stack.Screen  name='Itens' component={Itens}></Stack.Screen>  
        </Stack.Navigator>
      </NavigationContainer>
 
 );
}
