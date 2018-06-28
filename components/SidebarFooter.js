import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SidebarFooter = ({
  buttonInfo = [{ name: 'default', onPress: () => {} }]
}) => (
  <View style={styles.buttonWrapper}>
    {buttonInfo.map(singleButton => {
      const { name, onPress } = singleButton;
      return (
        <TouchableOpacity onPress={onPress} style={{flex: 1}} key={name}>
          <View style={styles.button} >
            <Text style={styles.text}>{name}</Text>
          </View>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default SidebarFooter;

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#2f2f2f',
    justifyContent: 'center',
    alignItems: 'center',    
    paddingVertical: 20,
    margin: 5
  },
  text: {
    color: '#eee',
    fontSize: 20
  }
});
