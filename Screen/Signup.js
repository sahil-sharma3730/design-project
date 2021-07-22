import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Divider } from "react-native-elements";
import Modal from "react-native-modal";
import Toast from "react-native-toast-message";

const Signup = ({ navigation }) => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [gender, setGender] = useState("");
  const [nextkin, setNextkin] = useState("");
  const [phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  const validate = () => {
    if (fname <= 6) {
      Toast.show({
        type:  "error",
        text2: "first Name should be greater than 6",
      });
    } else if (lname <= 6) {
      Toast.show({
        type:  "error",
        text2: "Last Name should be greater than 6",
      });
    } else if (dob==="") {
      Toast.show({
        type:  "error",
        text2: "Date Of Birth is required",
      });
    } else if (email === "") {
      Toast.show({
        type:  "error",
        text2: "Email must required",
      });
    } else if (reg.test(email) === false) {
      Toast.show({
        type:  "error",
        text2: "Email format is not valid",
      });
    } else if (tel.length !== 10) {
      Toast.show({
        type:  "error",
        text2: "telephone no should be equal to 10",
      });
    } else if (gender==="") {
      Toast.show({
        type:  "error",
        text2: "gender is required",
      });
    } else if (nextkin <= 10) {
      Toast.show({
        type:  "error",
        text2: "Nextkin is required",
      });
    } else if (phone.length !== 10) {
      Toast.show({
        type:  "error",
        text2: "phone no should be equal to 10",
      });
    } else if (Password <= 6) {
      Toast.show({
        type:  "error",
        text2: "password must be required",
      });
    } else {
      toggleModal();
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(
      fname,
      lname,
      dob,
      email,
      tel,
      gender,
      nextkin,
      phone,
      Password
    );
  };

  const closeModal = () => {
    toggleModal(), navigation.navigate("signup2");
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ImageBackground
          source={require("../assets/screenBg.png")}
          style={styles.image}
        >
          <ScrollView>
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
            <Divider
              color="black"
              style={{
                padding: 10,
                width: "80%",
                justifyContent: "center",
                marginHorizontal: "10%",
              }}
            />

            <View style={styles.main}>
              <View style={{ marginBottom: -50 }}>
                <Feather name="user" size={15} style={styles.icon2} />
                <Text
                  style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
                >
                  First Name
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Robert"
                  placeholderTextColor="black"
                  onChangeText={(value) => setFname(value)}
                />
              </View>
              <View style={{ marginBottom: -40 }}>
                <Feather name="user" size={15} style={styles.icon2} />
                <Text
                  style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
                >
                  Last Name
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Jackson"
                  placeholderTextColor="black"
                  onChangeText={(value) => setLname(value)}
                />
              </View>
              <View style={{ marginBottom: -40 }}>
                <Feather name="calendar" size={15} style={styles.icon2} />
                <Text
                  style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
                >
                  Date of Birth
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="03/19/1986"
                  placeholderTextColor="black"
                  onChangeText={(value) => setDob(value)}
                />
              </View>
              <View style={{ marginBottom: -40 }}>
                <Feather name="mail" size={15} style={styles.icon2} />
                <Text
                  style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
                >
                  Email
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="robert@gmail.com"
                  placeholderTextColor="black"
                  onChangeText={(value) => setEmail(value)}
                />
              </View>
              <View style={{ marginBottom: -40 }}>
                <Feather name="phone" size={15} style={styles.icon2} />
                <Text
                  style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
                >
                  Telephone number
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="(123)456-6543"
                  placeholderTextColor="black"
                  onChangeText={(value) => setTel(value)}
                  keyboardType={"numeric"}
                />
              </View>
              <View style={{ marginBottom: -40 }}>
                <Feather name="user" size={15} style={styles.icon2} />
                <Text
                  style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
                >
                  Gender
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Male"
                  placeholderTextColor="black"
                  onChangeText={(value) => setGender(value)}
                />
              </View>
              <View style={{ marginBottom: -40 }}>
                <Feather name="user" size={15} style={styles.icon2} />
                <Text
                  style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
                >
                  Name of next of kin
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Jackson Sam"
                  placeholderTextColor="black"
                  onChangeText={(value) => setNextkin(value)}
                />
              </View>
              <View style={{ marginBottom: -40 }}>
                <Feather name="user" size={15} style={styles.icon2} />
                <Text
                  style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
                >
                  Telephone# of next of kin
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="(123)456-6543"
                  placeholderTextColor="black"
                  onChangeText={(value) => setPhone(value)}
                  keyboardType={"numeric"}
                />
              </View>
              <View style={{ marginBottom: -40 }}>
                <Feather name="lock" size={15} style={styles.icon2} />
                <Text
                  style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
                >
                  Password
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="*********"
                  placeholderTextColor="black"
                  onChangeText={(value) => setPassword(value)}
                />
              </View>
            </View>

            <View style={styles.btnView}>
              <TouchableOpacity style={styles.Btn1} onPress={validate}>
                <Text
                  style={{ color: "black", textAlign: "center", fontSize: 18 }}
                >
                  SIGN UP
                </Text>
              </TouchableOpacity>

              <Modal isVisible={isModalVisible}>
                <View
                  style={{
                    marginTop: 0,
                    backgroundColor: "white",
                    borderRadius: 20,
                    alignItems:"center"
                  }}
                >
                  <Image
                    style={styles.tinyLogo}
                    source={require("../assets/notification.png")}
                    style={{
                      height: 90,
                      resizeMode: "contain",
                      paddingBottom: 30,
                      marginTop: -40,
                    }}
                  />
                  <View style={{ height: 90 }}>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 18,
                        paddingHorizontal: 20,
                        paddingTop: 20,
                      }}
                    >
                      A verification code has been sent to your mail
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                      <Text
                        onPress={closeModal}
                        style={{
                          textAlign: "center",
                          borderBottomRightRadius: 20,
                          borderBottomLeftRadius: 20,
                          paddingVertical: 10,
                          color: "#8FE4E3",
                          fontSize: 20,
                        }}
                      >
                        OK
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
            </View>
          </ScrollView>
        </ImageBackground>
      </KeyboardAvoidingView>
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
    fontWeight: "100",
    marginTop: -10,
    marginHorizontal: 35,
  },
  Btn1: {
    backgroundColor: "white",
    borderRadius: 40,
    padding: 10,
  },
  btnView: {
    marginTop: -80,
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  text: {
    textAlign: "center",
    marginTop: 30,
  },
  main: {
    marginTop: 20,
    paddingBottom: 100,
  },
  text1: {
    textAlign: "center",
    marginTop: 60,
    fontWeight: "bold",
  },
  icon1: {
    marginTop: -60,
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
    marginTop: 35,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default Signup;
