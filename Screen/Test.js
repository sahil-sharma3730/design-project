import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";

export default function Test() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {
            title: "Endoscopy",
            description:
              "A viewing tube(endoscope) is used to directly observe the inside of body organs or spaces(cavities)",
            date: "03-37-2017 friday",
          },
          {
            title: "Analysis of Genetic Material",
            description:
              "Often, body funcions are measured by recording and analyzing the activity of various organs",
            date: "03-37-2017 friday",
          },
          {
            title: "Analysis of Body Fluids",
            description:
              "Often, body funcions are measured by recording and analyzing the activity of various organs",
            date: "03-37-2017 friday",
          },
          {
            title: "Measurement of Body Functions",
            description:
              "Often, body funcions are measured by recording and analyzing the activity of various organs",
            date: "03-37-2017 friday",
          },
        ]}
        renderItem={({ item }) => (
          <View style={{paddingHorizontal:15,paddingVertical:6}} >
            <Text style={{fontWeight:"bold"}}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
            <Divider
              width={1}
              color="grey"
              style={{
                padding: 0,
                width: "100%",
                justifyContent: "center",
                paddingTop:10
              }}
            />
          </View>
        )}
      />
    </View>
  );
}
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

  scrollView: {
    marginHorizontal: 20,
  },
});
