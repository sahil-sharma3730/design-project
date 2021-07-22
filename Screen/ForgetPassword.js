import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import Toast from "react-native-toast-message";

const ForgetPassword = ({ navigation }) => {
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validate = () => {
    if (Password <= 4) {
      Toast.show({
        type:  "error",
        text2: "Password must be greater than 4",
      });
    } else if (Password !== confirmPassword) {
      Toast.show({
        type:  "error",
        text2: "password must be same",
      });
    } else {
      navigation.navigate("login");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/screenBg.png")}
        style={styles.image}
      >
        <View style={styles.innerBox}>
          <Image
            source={require("../assets/logo.png")}
            style={{ height: 70, resizeMode: "contain", marginBottom: 1 }}
          />
        </View>
        <Feather
          name="arrow-left"
          size={20}
          style={styles.icon1}
          onPress={() => navigation.navigate("login")}
        />
        <Text style={styles.text1}>RESET YOUR PASSWORD</Text>
        <Divider
          color="black"
          style={{
            padding: 10,
            width: "80%",
            justifyContent: "center",
            marginHorizontal: "10%",
          }}
        />
        <Text style={{ textAlign: "center", marginTop: 20, fontSize: 13 }}>
          Enter your new password
        </Text>
        <View style={styles.main}>
          <View style={{ marginBottom: 0 }}>
            <Feather name="lock" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              New Password
            </Text>
            <TextInput
              style={styles.input}
              placeholder="New Password"
              placeholderTextColor="black"
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <View style={{ marginTop: -30 }}>
            <Feather name="lock" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              Confirm Password
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="black"
              onChangeText={(value) => setConfirmPassword(value)}
            />
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.Btn1} onPress={() => validate()}>
            <Text style={{ color: "black", textAlign: "center", fontSize: 18 }}>
              RESET PASSWORD
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  input: {
    height: 40,
    margin: 50,
    borderRadius: 0,
    borderBottomWidth: 0.5,

    marginTop: -10,
    marginHorizontal: 35,
  },
  Btn1: {
    backgroundColor: "white",
    borderRadius: 40,
    padding: 12,
  },
  btnView: {
    marginTop: -100,
    paddingHorizontal: 40,
  },
  text: {
    textAlign: "center",
    marginTop: 30,
  },
  main: {
    marginTop: 30,
    paddingBottom: 100,
  },
  text1: {
    textAlign: "center",
    marginTop: 260,
    fontSize: 16,
  },
  icon1: {
    marginTop: -100,
    marginLeft: 20,
  },
  icon2: {
    marginTop: 5,
    marginHorizontal: 36,
    marginVertical: -6,
  },
  innerBox: {
    justifyContent: "center",
    marginHorizontal: -140,
    marginTop: 70,
  },
});

export default ForgetPassword;
