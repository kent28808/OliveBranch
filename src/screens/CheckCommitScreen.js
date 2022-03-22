import { Text, Button } from "react-native";

export default function CheckCommitScreen({ navigation, route }) {
  return (
    <>
      <Text>CheckCommitScreen Screen</Text>
      <Button
        title='Next Page'
        onPress={() => navigation.navigate("CheckCommitmentNow")}
      />
    </>
  );
}
