import { Text, Button } from "react-native";

export default function AudioMsg({ navigation, route }) {
  return (
    <>
      <Text>Premature Cody #5 Audio/message confirmation.</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate("User Info + Send")}
      />
    </>
  );
}
