import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Icon } from "react-native-elements";
const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/screenBg.png")}
        style={styles.image}
      >
        <View>
          <Icon name="menu" style={styles.icon} />
        </View>

        <View>
          <Text style={styles.text}>Welcome to</Text>
        </View>
        <View style={styles.innerBox}>
          <Image
            source={require("../assets/logo.png")}
            style={{ height: 70, resizeMode: "contain", marginBottom: 1 }}
          />
        </View>
        <View style={styles.btnView}>
          <View>
            <TouchableOpacity
              style={styles.Btn1}
              onPress={() => navigation.navigate("login")}
            >
              <Text
                style={{ color: "black", fontSize: 18, textAlign: "center" }}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.Btn2}>
              <Text
                style={{ color: "white", fontSize: 18, textAlign: "center" }}
                onPress={() => navigation.navigate("signup")}
              >
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },

  btnView: {
    marginTop: 200,
    paddingHorizontal: 40,
  },

  Btn1: {
    backgroundColor: "white",
    borderRadius: 40,
    paddingVertical: 12,
  },
  Btn2: {
    backgroundColor: "#30CECD",
    borderRadius: 40,
    paddingVertical: 12,
    marginTop: 30,
  },

  text: {
    textAlign: "center",
    marginTop: 170,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 310,
    marginTop: 40,
  },
  innerBox: {
    justifyContent: "center",
    marginHorizontal: -140,
    marginTop: 20,
  },
});

export default Welcome;
