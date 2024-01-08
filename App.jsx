import React from "react";
import { View, StyleSheet } from "react-native";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/Routes/routes";
import StackRoutes from "./src/Routes/stack.routes";

const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator screenOptions={{}}>
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="NavigationBar" component={NavigationBar} />
//     </Stack.Navigator>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      {/* <MyStack /> */}
      <StackRoutes />
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "#02854F",
  },
});

export default App;
