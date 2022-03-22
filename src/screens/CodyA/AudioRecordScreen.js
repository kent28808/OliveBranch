import { Text, Button } from "react-native";

export default function AudioRecordScreen({ navigation, route }) {
  return (
    <>
      <Text>Committed Cody #2 User can record audio message screen.</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate("RecordingConfirmation")}
      />
    </>
  );
}
