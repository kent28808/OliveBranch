import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import CheckCommitScreen from "./src/screens/CheckCommitScreen";
import CheckCommitNowScreen from "./src/screens/CheckCommitNowScreen";
import CommitTemplateScreen from "./src/screens/CodyA/CommitTemplateScreen";
import AudioRecordScreen from "./src/screens/CodyA/AudioRecordScreen";
import RecordingConfirmScreen from "./src/screens/CodyA/RecordingConfirmScreen";
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
        <Stack.Screen name='CheckCommitment' component={CheckCommitScreen} />
        <Stack.Screen
          name='CheckCommitmentNow'
          component={CheckCommitNowScreen}
        />
        <Stack.Screen
          name='CommitmentTemplate'
          component={CommitTemplateScreen}
        />
        <Stack.Screen name='AudioRecording' component={AudioRecordScreen} />
        <Stack.Screen
          name='RecordingConfirmation'
          component={RecordingConfirmScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
