import { Text, Button } from "react-native";

export default function CStatement({ navigation, route }) {
  return (
    <>
      <Text>Premature Cody #4 Statement (optional audio)</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate("AudioMessage")}
      />
    </>
  );
}
