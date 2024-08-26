import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";
import type { Props } from "./home";

export const Profile = () => {
  const navigation = useNavigation();
  const params = navigation.getState()?.routes.find((e) => {
    return e.name == "Home";
  })?.params as Props;

  return (
    <View>
      <Text>Profile</Text>
      <Button
        title={"Go to " + params.routerDirection}
        onPress={() => {
          navigation.navigate(params.routerDirection);
        }}
      />
    </View>
  );
};
