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
import { FloatingAction } from "react-native-floating-action";

const Tab = createMaterialTopTabNavigator();

const Profile2 = ({navigation}) => {
  const actions = [
    {
      text: "SHARE PATIENT PROFILE",
      icon: <Feather name="share-2" color="white" size={20} />,
      position: 1,
      color: "#04BCD8",
    },
    {
      text: "ASK A QUESTION",
      icon: <Feather name="help-circle" color="white" size={20} />,
      position: 2,
      color: "#04BCD8",
    },
    {
      text: "DIAGNOSIS UPDATE REQUEST",
      icon: <Feather name="book" color="white" size={20} />,
      color: "#04BCD8",
    },
  ];
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
              paddingVertical: 5,
            }}
          >
            Christopher Atkins
          </Text>
          <Text
            style={{
              fontSize: 12,
              paddingVertical: 5,
            }}
          >
            Los Angeles, California
          </Text>
          <Divider
            width={2}
            color="grey"
            style={{
              padding: 0,
              width: "28%",
              alignItems: "center",
            }}
          />
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
            <FontAwesome
              name="venus-mars"
              size={15}
              style={{ marginLeft: -80, paddingTop: 15 }}
            />
            <View style={{ marginTop: -27 }}>
              <Text style={{ alignItems: "center", fontWeight: "bold" }}>
                Gender
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: -3 }}>
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
            <Feather
              name="user"
              size={15}
              style={{ marginLeft: -80, paddingTop: 15 }}
            />
            <View style={{ marginTop: -27, marginLeft: 14 }}>
              <Text style={{ alignItems: "center", fontWeight: "bold" }}>
                Age
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: -3 }}>
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
            <Tab.Screen name="diagnosis history" component={Diagnosis} />
            <Tab.Screen name="questions " component={Questions} />
          </Tab.Navigator>
        </View>
        <FloatingAction
          actions={actions}
          color="#04BCD8"
          textStyle={{ color: "yellow" }}
          actionsPaddingTopBottom={0}
        />
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

export default Profile2;
