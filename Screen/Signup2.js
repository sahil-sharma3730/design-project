import React from "react";
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

const Signup2 = ({navigation}) => {
  

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
        <Text style={styles.text1}>SIGN UP</Text>
        <Text style={{textAlign:"center", marginTop:40, fontSize:13}} >please enter the inviter code sent to your mail</Text>
        <View style={styles.main}>
          <View style={{ marginTop: -10 }}>
            <Feather name="user" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              Inviter Code
            </Text>
            <TextInput
              style={styles.input}
              placeholder="User Name"
              placeholderTextColor="black"
            />
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.Btn1} onPress={()=>navigation.navigate("dashboard2")} >
            <Text style={{ color: "black", textAlign: "center", fontSize: 18 }}>
              CONTINUE
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
    marginTop: 30,
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
    marginTop: 210,
    fontSize:16
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

export default Signup2;
