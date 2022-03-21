import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text } from "react-native";
const Stack = createNativeStackNavigator();

const App = () => {
  // return <NavigationContainer>{MyStack}</NavigationContainer>;
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

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title='Hello'
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  );
};

const OnBoardingScreen = ({ navigation, route }) => {
  return <Text>Onboarding Screen</Text>;
};

export default App;
