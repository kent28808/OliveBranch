import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import CheckCommitScreen from "./src/screens/CheckCommitScreen";
import NoStatement from "./src/screens/NoStatementScreen";
import CheckCommitNowScreen from "./src/screens/CheckCommitNowScreen";
import CommitTemplateScreen from "./src/screens/CodyA/CommitTemplateScreen";
import AudioRecordScreen from "./src/screens/CodyA/AudioRecordScreen";
import RecordingConfirmScreen from "./src/screens/CodyA/RecordingConfirmScreen";
import WhyNotReasons from "./src/screens/CodyB/WhyNotReasons";
import Timer from "./src/screens/CodyB/Timer";
import CStatementTemplate from "./src/screens/CodyB/CStatementTemplate";
import CStatement from "./src/screens/CodyB/CStatement";
import AudioMsg from "./src/screens/CodyB/AudioMsg";
import Userinfosend from "./src/screens/Userinfosend";
import FinalConfirmation from "./src/screens/FinalConfirmation";

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
        {/* Triage Screen */}
        <Stack.Screen name='CheckCommitment' component={CheckCommitScreen} />
        <Stack.Screen name='NoStatement' component={NoStatement} />
        {/* Triage Screen */}
        <Stack.Screen
          name='CheckCommitmentNow'
          component={CheckCommitNowScreen}
        />
        {/* CodyA */}
        <Stack.Screen
          name='CommitmentTemplate'
          component={CommitTemplateScreen}
        />
        <Stack.Screen name='AudioRecording' component={AudioRecordScreen} />
        <Stack.Screen
          name='RecordingConfirmation'
          component={RecordingConfirmScreen}
        />
        {/* CodyB */}
        <Stack.Screen name='WhyNotReasons' component={WhyNotReasons} />
        <Stack.Screen name='Timer' component={Timer} />
        <Stack.Screen
          name='CommitmentStatementTemplate'
          component={CStatementTemplate}
        />
        <Stack.Screen name='Statement(Optional Audio)' component={CStatement} />
        <Stack.Screen name='AudioMessage' component={AudioMsg} />
        {/* Codys End */}
        <Stack.Screen name='User Info + Send' component={Userinfosend} />
        <Stack.Screen name='Final Confirmation' component={FinalConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
