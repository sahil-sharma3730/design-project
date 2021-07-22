import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import Toast from "react-native-toast-message";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (reg.test(user) === false) {
      Toast.show({
        type: "error",
        text2: "Please Provide email ",
      });
    } else if (password.length <= 4) {
      Toast.show({
        type: "error",
        text2: "Please Provide password ",
      });
    } else {
      navigation.navigate("dashboard");
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
          onPress={() => navigation.navigate("welcome")}
        />
        <Text style={styles.text1}>LOGIN</Text>

        <View style={styles.main}>
          <View style={{ marginBottom: 0 }}>
            <Feather name="user" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              User Name
            </Text>
            <TextInput
              style={styles.input}
              placeholder="User Name"
              placeholderTextColor="black"
              onChangeText={(value) => setUser(value)}
            />
          </View>

          <View style={{ marginTop: -30 }}>
            <Feather name="lock" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              Password
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="black"
              onChangeText={(value) => setPassword(value)}
            />
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.Btn1} onPress={() => validate()}>
            <Text style={{ color: "black", textAlign: "center", fontSize: 18 }}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("forget")}>
          <Text style={styles.text}>Forgot Password?</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 40,
  },
  text: {
    textAlign: "center",
    marginTop: 30,
  },
  main: {
    marginTop: 50,
    paddingBottom: 100,
  },
  text1: {
    textAlign: "center",
    marginTop: 190,
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

export default Login;
