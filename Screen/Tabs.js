import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Diagnosis from "./Diagnosis";
import Questions from "./Questions";

const Tab = createMaterialTopTabNavigator();

const Tabs = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#8FE4E3",
            paddingBottom: 25,
            marginTop: -50,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              marginTop: 62,
              paddingTop: 45,
            }}
          >
            MY PROFILE
          </Text>
          <Feather
            name="arrow-left"
            style={{ marginTop: -20, paddingLeft: 10 }}
            size={22}
            onPress={() => navigation.navigate("dashboard")}
          />
        </View>
        <View style={{ backgroundColor: "white", alignItems: "center" }}>
          <FontAwesome name="user" color="#ccc" size={50} />
          <Text
            style={{
              fontSize: 15,
              paddingVertical: 10,
            }}
          >
            Christopher Atkins
          </Text>
          <Text
            style={{
              fontSize: 12,
              paddingVertical: 5,
              marginTop:-12
            }}
          >
            Los Angeles, California
          </Text>
          <Divider
            width={2}
            color="#E5E5E5"
            style={{
              padding: 0,
              width: "28%",
              alignItems: "center",
            }}
          />
          <View
            style={{
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "#8FE4E3",
              borderRadius: 15,
              marginTop: 20,
              paddingHorizontal: 20,
              paddingVertical: 5,
            }}
          >
            <TouchableOpacity style={styles.Btn1}>
              <Text
                style={{ color: "#8FE4E3", textAlign: "center", fontSize: 12 }}
              >
                EDIT PROFILE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            backgroundColor: "white",
          }}
        >
          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              paddingVertical: 10,
              borderWidth: 0.2,
              borderLeftWidth: 0,
            }}
          >
            <FontAwesome name="venus-mars" color="#ccc" size={15} style={{ marginLeft: -80, paddingTop: 15 }} />
            <View style={{ marginTop: -27 }}>
              <Text style={{ alignItems: "center", fontWeight: "bold" }}>
                Gender
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: -3 }}>
                Male
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 0.5,
              alignItems: "center",
              paddingVertical: 10,
              borderWidth: 0.2,
              borderRightWidth: 0,
            }}
          >
          <FontAwesome name="user" color="#ccc" size={15} style={{ marginLeft: -80, paddingTop: 15 }} />
            <View style={{ marginTop: -27, marginLeft: 14 }}>
              <Text style={{ alignItems: "center", fontWeight: "bold" }}>
                Age
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "bold", marginTop: -3 }}>
                36 years
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: "black",
              labelStyle: { fontSize: 12, fontWeight: "300" },
              pressColor: "#8FE4E3",
              indicatorStyle: {
                backgroundColor: "#8FE4E3",
              },
            }}
          >
            <Tab.Screen  name="diagnosis history" component={Diagnosis} />
            <Tab.Screen name="questions and answer " component={Questions} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  scrollView: {
    marginHorizontal: 20,
  },
});

export default Tabs;
