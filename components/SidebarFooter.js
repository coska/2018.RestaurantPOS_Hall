import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const SidebarFooter = ({
  onCancel = () => {},
  onOrder = () => {},
  onPrintBill = () => {}
}) => (
  <View style={styles.buttonContainer}>
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={onCancel}
        style={{
          backgroundColor: "#2f2f2f",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
          marginRight: 10
        }}
      >
        <Text style={{ color: "#eee", fontSize: 26 }}>Cancel</Text>
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={onOrder}
        style={{
          backgroundColor: "#2f2f2f",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 10
        }}
      >
        <Text style={{ color: "#eee", fontSize: 26 }}>Order</Text>
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={onPrintBill}
        style={{
          backgroundColor: "#2f2f2f",
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={{ color: "#eee", fontSize: 26 }}>Print Bill</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default SidebarFooter;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: 500,
    height: 80,
    justifyContent: "center",
    alignItems: "stretch",
    marginBottom: 10
  }
});
