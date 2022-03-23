import { Text, Button } from "react-native";

export default function WhyNotReasons({ navigation, route }) {
  return (
    <>
      <Text>Premature Cody #1 Why not reasons.</Text>
      <Button title='Next' onPress={() => navigation.navigate("Timer")} />
    </>
  );
}
