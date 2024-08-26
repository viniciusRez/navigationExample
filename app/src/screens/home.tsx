import { useNavigation } from "@react-navigation/native";
import { Alert, Button, Text, View } from "react-native";
export interface Props {
  routerDirection: string;
}
export const Home = () => {
  const navigation = useNavigation();

  const params = navigation.getState()?.routes.find((e) => {
    return e.name == "Home";
  })?.params as Props;

  return (
    <View>
      <Text>Home</Text>
      <Button
        title={"Go to " + params.routerDirection}
        onPress={() => {
          navigation.navigate(params.routerDirection);
        }}
      />
    </View>
  );
};
