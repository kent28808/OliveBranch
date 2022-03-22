import { Text, Button } from "react-native";

export default function CheckCommitScreen({ navigation, route }) {
  return (
    <>
      <Text>CheckCommitScreen Screen</Text>
      <Button
        title='Yep'
        onPress={() => navigation.navigate("CheckCommitmentNow")}
      />
       <Button
        title='Nahh'
        onPress={() => navigation.navigate("NoStatement")}
      />
    </>
  );
}
