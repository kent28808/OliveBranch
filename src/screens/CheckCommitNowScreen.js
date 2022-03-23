import { Text, Button } from "react-native";

export default function CheckCommitNowScreen({ navigation, route }) {
  return (
    <>
      <Text>CheckCommitNow Screen</Text>
      <Button
        title='Yes'
        onPress={() => navigation.navigate("CommitmentTemplate")}
      />
      <Button
        title='Nahh'
        onPress={() => navigation.navigate("WhyNotReasons")}
      />
    </>
  );
}
