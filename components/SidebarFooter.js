import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

const SidebarFooter = ({
  buttonInfo = [{ name: "default", onPress: () => {} }]
}) => (
  <View style={styles.buttonWrapper}>
    {buttonInfo.map(singleButton => {
      const { name, onPress } = singleButton;
      return (
        <TouchableOpacity onPress={onPress} style={styles.button} key={name}>
          <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default SidebarFooter;

const styles = StyleSheet.create({
  buttonWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    backgroundColor: "#2f2f2f",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5
  },
  text: {
    color: "#eee",
    fontSize: 26
  }
});
