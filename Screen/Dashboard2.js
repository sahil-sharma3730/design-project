import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Dashboard2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.dashboard}>
        <Text style={styles.text}>DASHBOARD</Text>
        <FontAwesome
          name="user"
          color="#ccc"
          size={50}
          style={{ paddingTop: 40 }}
        />
        <Text
          style={{
            fontSize: 17,
            marginBottom: -5,
            paddingVertical: 10,
          }}
        >
          Christopher Atkins
        </Text>
        <Text style={{ fontSize: 13 }}>Los Angeles, California</Text>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: "10%" }}>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <FontAwesome
              name="user-md"
              color="#ccc"
              size={40}
              style={{ marginBottom: 10 }}
            />
            <Text style={styles.boxName}>MY DOCTORS</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Feather
              name="user"
              color="#ccc"
              size={40}
              style={{ marginBottom: 10 }}
            />
          <TouchableOpacity>
              <Text onPress={()=>navigation.navigate("profile2")}>MY PROFILE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row", paddingHorizontal: "10%" }}>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Feather
              name="message-square"
              color="#ccc"
              size={40}
              style={{ marginBottom: 10 }}
            />
            <Text style={{ textAlign: "center" }}>FEEDBACK</Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.innerBox}>
            <Feather
              name="log-out"
              color="#76DAD7"
              size={40}
              style={{ marginBottom: 10 }}
            />
            <Text>LOGOUT</Text>
          </View>
        </View>
      </View>

      <View style={{justifyContent:"center", alignItems:"center", marginTop:15  }}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/panic.png")}
          style={{ height: 100, resizeMode: "contain", marginBottom: 1 }}
        />
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
    marginVertical: 60,
  },
  text: {
    marginTop: -10,
   fontSize:16
  },
  box: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 1,
    marginRight: 1,
  },
  innerBox: {
    padding: 10,
    paddingVertical: "30%",
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  icon: {
    marginRight: 310,
    marginTop: 60,
  },
});

export default Dashboard2;
