import React from "react";
import { View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Test from "./Test";
import LatestReading from "./LatestReading";
import AverageReading from "./AverageReading";

const Tab = createMaterialTopTabNavigator();
export default function Diagnosis() {
  return (
    <View>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "black",
          labelStyle: { fontSize: 12, fontWeight: "300" },
          pressColor: "#8FE4E3",
          indicatorStyle: {
            backgroundColor: "white",
          },
        }}
      >
        <Tab.Screen  name="Test" component={Test} />
        <Tab.Screen name="latest Reading" component={LatestReading} />
        <Tab.Screen name="average Reading" component={AverageReading} />
      </Tab.Navigator>
    </View>
  );
}
