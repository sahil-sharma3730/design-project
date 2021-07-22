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

const Edit = ({ navigation }) => {
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
              marginTop: 50,
              paddingTop: 45,
            }}
          >
            MY PROFILE EDIT
          </Text>
          <Feather
            name="arrow-left"
            style={{ marginTop: -20, paddingLeft:10 }}
            size={22}
            onPress={() => navigation.navigate("dashboard")}
          />
        </View>
        <View style={{ backgroundColor: "white", alignItems: "center"}}>
          <FontAwesome name="user" color="#ccc" size={50} />
          <Text
            style={{
              fontSize: 15,
              paddingVertical: 5,
              backgroundColor:"white"
            }}
          >
            Christopher Atkins
          </Text>
          <Divider
          width={2}
            color="#E5E5E5"
            style={{
              padding: 0,
              width: "30%",
              justifyContent: "center",
            }}
          />
        </View>
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
            />
          </View>
          <View style={{ marginBottom: -40 }}>
          <FontAwesome name="venus-mars" color="#ccc" size={15}  style={styles.icon2}/>
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              Gender
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Male"
              placeholderTextColor="black"
            />
          </View>
          <View style={{ marginBottom: -40 }}>
            <Feather name="map-pin" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              Address
            </Text>
            <TextInput
              style={styles.input}
              placeholder="112 street los angeles"
              placeholderTextColor="black"
            />
          </View>
          <View style={{ marginBottom: -40 }}>
            <Feather name="map-pin" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              City
            </Text>
            <TextInput
              style={styles.input}
              placeholder="los angeles"
              placeholderTextColor="black"
            />
          </View>
          <View style={{ marginBottom: -40 }}>
            <Feather name="map-pin" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              State
            </Text>
            <TextInput
              style={styles.input}
              placeholder="California"
              placeholderTextColor="black"
            />
          </View>
          <View style={{ marginBottom: -40 }}>
            <Feather  name="map-pin" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              Country
            </Text>
            <TextInput
              style={styles.input}
              placeholder="US"
              placeholderTextColor="black"
            />
            
          </View>
          <View style={{ marginBottom: -40 }}>
            <Feather  name="map-pin" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              Zipcode
            </Text>
            <TextInput
              style={styles.input}
              placeholder="08550"
              placeholderTextColor="black"
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
            />
          </View>
          <View style={{ marginBottom: -40 }}>
            <Feather name="phone" size={15} style={styles.icon2} />
            <Text
              style={{ marginTop: -10, marginLeft: 55, fontWeight: "bold" }}
            >
              Telephone# of next of kin
            </Text>
            <TextInput
              style={styles.input}
              placeholder="(123)456-6543"
              placeholderTextColor="black"
            />
          </View>
        </View>
        <View style={styles.btnView}>
            <TouchableOpacity style={styles.Btn1} >
              <Text
                style={{ color: "white", textAlign: "center", fontSize: 18 }}
              >
                SAVE
              </Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
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
    backgroundColor: "#8FE4E3",
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
    backgroundColor:"white"
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
  scrollView: {
    marginHorizontal: 20,
  },
});

export default Edit;
