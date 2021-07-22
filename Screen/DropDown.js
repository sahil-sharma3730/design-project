// import React, { Component } from "react";
// import { Picker, View, Text, StyleSheet } from "react-native";

// export default class DropDown extends Component {
//   state = {
//     selectedcat: "",
//     category: [
//       {
//         itemName: "Samsung M20"
//       },
//       {
//         itemName: "Nokia"
//       },
//       {
//         itemName: "Apple"
//       },
//       {
//         itemName: "Samsung M23"
//       },
//       {
//         itemName: "Samsung M24"
//       },
//       {
//         itemName: "Samsung M25"
//       }
//     ]
//   };

//   async onValueChangeCat(value) {
//     this.setState({ selectedcat: value });
//   }

//   render() {
//     return (
//       <View style={styles.viewStyle}>
//         <View style={{ flex: 0.3 }}>
//           <Text style={styles.textStyle}>Categories</Text>
//         </View>
//         <View style={{ flex: 0.7, fontSize: 14 }}>
//           <Picker
//             itemStyle={styles.itemStyle}
//             mode="dropdown"
//             style={styles.pickerStyle}
//             selectedValue={this.state.selectedcat}
//             onValueChange={this.onValueChangeCat.bind(this)}
//           >
//             {/* {this.state.category.map((item, index) => (
//               <Picker.Item
//                 color="#0087F0"
//                 label={item.itemName}
//                 value={item.itemName}
//                 index={index}
//               />
//             ))} */}
//           </Picker>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   viewStyle: {
//     flex: 1,
//     alignSelf: "center",
//     flexDirection: "row",
//     width: "92%",
//     justifyContent: "space-between",
//     alignItems: "center"
//   },
//   itemStyle: {
//     fontSize: 10,
//     fontFamily: "Roboto-Regular",
//     color: "#007aff"
//   },
//   pickerStyle: {
//     width: "100%",
//     height: 40,
//     color: "#007aff",
//     fontSize: 14,
//     fontFamily: "Roboto-Regular"
//   },
//   textStyle: {
//     fontSize: 14,
//     fontFamily: "Roboto-Regular"
//   }
// });

import React, { Component } from "react";
import { View,StyleSheet } from "react-native";
import MultiSelect from "react-native-multiple-select";

const items = [
  {
    id: "92iijs7yta",
    name: "Ondo",
  },
  {
    id: "a0s0a8ssbsd",
    name: "Ogun",
  },
  {
    id: "16hbajsabsd",
    name: "Calabar",
  },
  {
    id: "nahs75a5sg",
    name: "Lagos",
  },
  {
    id: "667atsas",
    name: "Maiduguri",
  },
  {
    id: "hsyasajs",
    name: "Anambra",
  },
  {
    id: "djsjudksjd",
    name: "Benue",
  },
  {
    id: "sdhyaysdj",
    name: "Kaduna",
  },
  {
    id: "suudydjsjd",
    name: "Abuja",
  },
];

class DropDown extends Component {
  state = {
    selectedItems: [],
  };

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    const { selectedItems } = this.state;

    return (
      <View  style={styles.container}>
        <MultiSelect
          hideTags
          items={items}
          uniqueKey="id"
          ref={(component) => {
            this.multiSelect = component;
          }}
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={selectedItems}
          selectText="Pick Items"
          searchInputPlaceholderText="Search Items..."
          onChangeInput={(text) => console.log(text)}
          altFontFamily="ProximaNova-Light"
          tagRemoveIconColor="browns"
          tagBorderColor="#CCC"
          tagTextColor="blue"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          searchInputStyle={{ color: "#CCC" }}
          submitButtonColor="green"
          submitButtonText="Submit"
        />
        <View>
          {this.multiSelect &&
            this.multiSelect.getSelectedItemsExt(selectedItems)}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:"center"
    }
  });

export default DropDown;
