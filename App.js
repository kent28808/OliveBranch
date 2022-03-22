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
import whynotreasons from "./src/screens/CodyB/whynotreasons";
import timer from "./src/screens/CodyB/timer";
import cStatementtemplate from "./src/screens/CodyB/cStatementtemplate";
import cStatement from "./src/screens/CodyB/cStatement";
import audioMsg from "./src/screens/CodyB/audioMsg";
import Userinfosend from "./src/screens/Userinfosend";
import finalConfirmation from "./src/screens/finalConfirmation";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Welcome" }}/>
        <Stack.Screen name='Onboarding' component={OnBoardingScreen} />
        {/* Triage Screen */}
        <Stack.Screen name='CheckCommitment' component={CheckCommitScreen} />
        <Stack.Screen name='NoStatement' component={NoStatement} />
        {/* Triage Screen */}
        <Stack.Screen name='CheckCommitmentNow'component={CheckCommitNowScreen}/>
        {/* CodyA */}
        <Stack.Screen name='CommitmentTemplate'component={CommitTemplateScreen}/>
        <Stack.Screen name='AudioRecording' component={AudioRecordScreen} />
        <Stack.Screen name='RecordingConfirmation'component={RecordingConfirmScreen}/>
        {/* CodyB */}
        <Stack.Screen name='Whynotreasons' component={whynotreasons} />
        <Stack.Screen name='Timer' component={timer} />
        <Stack.Screen name='CommitmentStatementTemplate'component={cStatementtemplate}/>
        <Stack.Screen name='Statement(Optional Audio)' component={cStatement} />
        <Stack.Screen name='AudioMessage' component={audioMsg} />
        {/* Codys End */}
        <Stack.Screen name='User Info + Send' component={Userinfosend} />
        <Stack.Screen name='Final Confirmation' component={finalConfirmation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
