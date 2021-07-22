import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Dashboard = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Icon name="menu" color="white" style={styles.icon} />
      </View>
      <View style={styles.dashboard}>
        <Text style={styles.text}>DASHBOARD</Text>
        <FontAwesome
          name="user"
          color="#ccc"
          size={50}
          style={{ paddingVertical: 10 }}
        />
        <Text
          style={{
            fontSize: 16,
            marginBottom: 20,
            paddingVertical: 10,
            fontWeight: "bold",
          }}
        >
          Travis Nunnaly
        </Text>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: "14%" }}>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <FontAwesome
              name="user-md"
              color="#ccc"
              size={25}
              style={{ marginBottom: 10 }}
            />
          <TouchableOpacity>
              <Text onPress={()=>navigation.navigate("tabs")}>MY DOCTORS</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Feather
              name="user"
              color="#ccc"
              size={25}
              style={{ marginBottom: 10 }}
            />
            <TouchableOpacity>
              <Text onPress={()=>navigation.navigate("edit")}>MY PROFILE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: "14%" }}>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Feather
              name="message-square"
              color="#ccc"
              size={25}
              style={{ marginBottom: 10 }}
            />
            <Text style={{ textAlign: "center" }}>INFORMATION REQUEST</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Image
              style={styles.tinyLogo}
              source={require("../assets/panic.png")}
              style={{ height: 70, resizeMode: "contain", marginBottom: 1 }}
            />
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: "14%" }}>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Feather
              name="bell"
              color="#ccc"
              size={25}
              style={{ marginBottom: 10 }}
            />
            <Text>NOTIFICATIONS</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Feather
              name="log-out"
              color="#76DAD7"
              size={25}
              style={{ marginBottom: 10 }}
            />
            <Text>LOGOUT</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#77EAE6",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  dashboard: {
    alignItems: "center",
    marginVertical: -10,
  },
  text: {
    marginTop: -10,
    fontWeight: "bold",
  },
  box: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 1,
    marginRight: 1,
  },
  innerBox: {
    padding: 10,
    paddingVertical: "40%",
    borderRadius: 12,
    backgroundColor: "#F7F5FD",
    alignItems: "center",
  },
  icon: {
    marginRight: 310,
    marginTop: 60,
  },
});

export default Dashboard;
