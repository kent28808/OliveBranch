import { Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <Button
      title='Hello'
      onPress={() => navigation.navigate("Onboarding", { name: "Jane" })}
    />
  );
}
