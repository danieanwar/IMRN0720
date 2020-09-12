import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import 'react-native-gesture-handler';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import Register from './Register';
import Login from './Login';
import Home from './Home';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
/*      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" >
          <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={HomeScreen} options={{ headerTitle: 'Daftar Barang' }} />
        </Stack.Navigator>
      </NavigationContainer>
*/
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Register" >
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
