import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/home";
import { Profile } from "../screens/profile";
import AntDesign from "@expo/vector-icons/AntDesign";

export const Tab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            <AntDesign
              name={route.name.toLowerCase()}
              size={size}
              color={color}
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        component={Home}
        name="Home"
        initialParams={{ routerDirection: "Drawer Navigation" }}
      />
      <Tab.Screen
        component={Profile}
        name="Profile"
        initialParams={{ routerDirection: "Drawer Navigation" }}
      />
    </Tab.Navigator>
  );
};
