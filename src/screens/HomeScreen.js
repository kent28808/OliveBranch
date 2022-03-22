import { Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <>
      <Text>Home Screen/Splash Screen</Text>
      <Button
        title='Next Page'
        onPress={() => navigation.navigate("Onboarding")}
      />
    </>
  );
}
