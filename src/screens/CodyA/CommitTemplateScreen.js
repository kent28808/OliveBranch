import { Text, Button } from "react-native";

export default function CommitTemplateScreen({ navigation, route }) {
  return (
    <>
      <Text>Committed Cody #1 Commitment Statement Template</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate("AudioRecording")}
      />
    </>
  );
}

