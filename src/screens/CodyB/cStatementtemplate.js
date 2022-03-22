import { Text, Button } from "react-native";

export default function cStatementtemplate({ navigation, route }) {
  return (
    <>
      <Text>Premature Cody #3 Committment Statement Template</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate("Statement(Optional Audio)")}
      />
    </>
  );
}