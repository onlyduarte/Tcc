import { createStackNavigator } from "@react-navigation/stack";
import Routes from "./routes";
import Login from "../pages/Login";
import TypeAccount from "../pages/TypeAccount";
import RegisterCliente from "../pages/RegisterCliente";
import RegisterColab from "../pages/RegisterColab";
import RegisterColab2 from "../pages/RegisterColab2";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { height: 85, backgroundColor: "#06121E" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TabBar"
        component={Routes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TypeAccount"
        component={TypeAccount}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="RegisterCliente"
        component={RegisterCliente}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="RegisterColab"
        component={RegisterColab}
        options={{ headerTitle: "" }}
      />
      <Stack.Screen
        name="RegisterColab2"
        component={RegisterColab2}
        options={{ headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}
