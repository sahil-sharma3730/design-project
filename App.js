import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./Screen/Welcome"
import Login from "./Screen/Login";
import Signup from "./Screen/Signup"
import Signup2 from "./Screen/Signup2"
import Dashboard from "./Screen/Dashboard";
import Dashboard2 from "./Screen/Dashboard2";
import {LogBox} from "react-native"
import ForgetPassword from "./Screen/ForgetPassword"
import Edit from "./Screen/Edit";
import Tabs from "./Screen/Tabs";
import Diagnosis from "./Screen/Diagnosis";
import Questions from "./Screen/Questions";
import Profile2 from "./Screen/Profile2";
import Toast from 'react-native-toast-message';

LogBox.ignoreAllLogs()
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Login">
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="signup2" component={Signup2} />
        <Stack.Screen name="forget" component={ForgetPassword} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="dashboard2" component={Dashboard2} />
        <Stack.Screen name="edit" component={Edit} />
        <Stack.Screen name="tabs" component={Tabs} />
        <Stack.Screen name="diagnosis" component={Diagnosis} />
        <Stack.Screen name="question" component={Questions} />
        <Stack.Screen name="profile2" component={Profile2} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>

  );
}
