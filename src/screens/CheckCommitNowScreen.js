import { Text, Button } from "react-native";

export default function CheckCommitNowScreen({ navigation, route }) {
  return (
    <>
      <Text>CheckCommitNow Screen</Text>
      <Button
        title='Next Page'
        onPress={() => navigation.navigate("CommitmentTemplate")}
      />
    </>
  );
}
