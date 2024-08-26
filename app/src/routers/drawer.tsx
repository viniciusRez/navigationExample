import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/home";
import { Profile } from "../screens/profile";

export const Drawer = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        component={Home}
        name="Home"
        initialParams={{ routerDirection: "Tab Navigation" }}
      />
      <Drawer.Screen
        component={Profile}
        name="Profile"
        initialParams={{ routerDirection: "Tab Navigation" }}
      />
    </Drawer.Navigator>
  );
};
