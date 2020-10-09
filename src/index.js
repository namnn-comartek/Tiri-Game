import React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Wheel from './component/Wheel'
import Wheel1 from './component/Wheel1'

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Wheel"
            component={Wheel}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="Wheel1"
            component={Wheel1}
            options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", { rootTag: document.getElementById("root") });