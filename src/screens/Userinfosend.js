import { Text, Button } from "react-native";

export default function Userinfosend({ navigation, route }) {
  return (
    <>
      <Text>User Info + Send.</Text>
      <Button
        title='Next'
        onPress={() => navigation.navigate("Final Confirmation")}
      />
    </>
  );
}