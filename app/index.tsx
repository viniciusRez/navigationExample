import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tab } from "./src/routers/Tab";
import { Drawer } from "./src/routers/drawer";

export default function RootLayout() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Tab Navigation"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tab Navigation" component={Tab} />
      <Stack.Screen name="Drawer Navigation" component={Drawer} />
    </Stack.Navigator>
  );
}
