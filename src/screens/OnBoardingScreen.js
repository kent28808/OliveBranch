import { Text, Button } from "react-native";

export default function OnBoardingScreen({ navigation, route }) {
  return (
    <>
      <Text>Onboarding Screen</Text>
      <Button
        title='Next Page'
        onPress={() => navigation.navigate("CheckCommitment")}
      />
    </>
  );
}
