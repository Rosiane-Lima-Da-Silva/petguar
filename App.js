import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Index} from './src/telas/Index';
import {Login} from './src/telas/Login';
import {Cadastro} from './src/telas/Cadastro';


const Stack = createNativeStackNavigator();






export default function App()  {
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Index'>
          <Stack.Screen  name='Index' component={Index}></Stack.Screen>
          <Stack.Screen  name='Login' component={Login}></Stack.Screen>
          <Stack.Screen  name='Cadastro' component={Cadastro}></Stack.Screen>  
        </Stack.Navigator>
      </NavigationContainer>
 
 );
}
