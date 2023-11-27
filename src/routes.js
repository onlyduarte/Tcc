import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import TypeAccount from "./pages/TypeAccount";
import RegisterColab from "./pages/RegisterColab";
import RegisterCliente from "./pages/RegisterCliente";
import Reservation from "./pages/Reservation";
import Perfil from "./pages/Perfil";

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarStyle: {
          position: "absolute",
          paddingBottom: 6,
          backgroundColor: "#D9D9D9",
          border: "none",
          borderRadius: 4,
        },
      }}
    >
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="chatbubbles" color={color} size={size} />;
            }
            return (
              <Ionicons name="chatbubbles-outline" color={color} size={size} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color={color} size={size} />;
            }
            return <Ionicons name="home-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Cardapio"
        component={Cardapio}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="apps" color={color} size={size} />;
            }
            return <Ionicons name="apps-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="TypeAccount"
        component={TypeAccount}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="albums" color={color} size={size} />;
            }
            return <Ionicons name="albums-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen 
      name="RegisterCliente"
      component={RegisterCliente}
      options={{
        headerShown: false,
        tabBarIcon: null
      }}
      />
      <Tab.Screen 
      name="RegisterColab"
      component={RegisterColab}
      options={{
        headerShown: false,
        tabBarIcon: null
      }}
      />
      <Tab.Screen
      name="Reservation"
      component={Reservation}
      options={{
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => {
          if(focused){
            return <Ionicons name="today" color={color} size={size}/>
          }
          return <Ionicons name="today-outline" color={color} size={size}/>
        }
      }}
      />
      <Tab.Screen name="Perfil"
      component={Perfil}
      options={{headerShown: false,
      tabBarIcon: ({color, size, focused}) => {
        if (focused) {
          return <Ionicons name="person" color={color} size={size}/>
        }
        return <Ionicons name="person-outline" color={color} size={size}/>
      }
      }}/>
    </Tab.Navigator>
  );
};

export default Routes;
