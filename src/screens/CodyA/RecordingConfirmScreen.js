import { Text, Button } from "react-native";

export default function RecordingConfirmScreen({ navigation, route }) {
  return (
    <>
      <Text>Committed Cody #3 User able to review audio recording before sending screen.</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate("User Info + Send")}
      />
    </>
  );
}
