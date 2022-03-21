import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name='Onboarding' component={OnBoardingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
