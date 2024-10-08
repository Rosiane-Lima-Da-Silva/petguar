import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Index} from './src/telas/Index';
import {Login} from './src/telas/Login';
import {Cadastro} from './src/telas/Cadastro';
import {Itens} from './src/telas/Itens';
import { Comida } from './src/telas/Comida';
import { Agua } from './src/telas/Agua';
import { Monitoramento } from './src/telas/Monitoramento';
import {Porta} from './src/telas/Porta';
import { Horario } from './src/telas/Horario';
import { Menu } from './src/telas/Menu';
import { ResgateSenha } from './src/telas/ResgateSenha';
import { HorarioAgua } from './src/telas/HorarioAgua';
import {Dashboard} from './src/telas/Dashboard';


const Stack = createNativeStackNavigator();






export default function App()  {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Index'>
          <Stack.Screen  name='Index' component={Index}></Stack.Screen>
          <Stack.Screen  name='Login' component={Login}></Stack.Screen>
          <Stack.Screen  name='Cadastro' component={Cadastro}></Stack.Screen>
          <Stack.Screen  name='Itens' component={Itens}></Stack.Screen>  
          <Stack.Screen  name='Comida' component={Comida}></Stack.Screen> 
          <Stack.Screen  name='Agua' component={Agua}></Stack.Screen> 
          <Stack.Screen  name='Monitoramento' component={Monitoramento}></Stack.Screen>
          <Stack.Screen  name='Porta' component={Porta}></Stack.Screen> 
          <Stack.Screen  name='Horario' component={Horario}></Stack.Screen>  
          <Stack.Screen  name='Menu' component={Menu}></Stack.Screen> 
          <Stack.Screen  name='ResgateSenha' component={ResgateSenha}></Stack.Screen>
          <Stack.Screen  name='HorarioAgua' component={HorarioAgua}></Stack.Screen>
          <Stack.Screen  name='Dashboard' component={Dashboard}></Stack.Screen>

        </Stack.Navigator>
      </NavigationContainer>
 
 );
}