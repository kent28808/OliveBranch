import { Text, Button } from "react-native";

export default function Timer({ navigation, route }) {
  return (
    <>
      <Text>Premature Cody #2 Timer</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate("CommitmentStatementTemplate")}
      />
    </>
  );
}
