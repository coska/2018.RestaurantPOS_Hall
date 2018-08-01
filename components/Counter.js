import React, { Component } from 'react';
import { View, Text, StyleSheet  } from 'react-native';

class Counter extends Component {

  render() {
    const count = this.props.count;

    return (
      <View>
        <Text style={styles.counter}>
          {count}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    color: "white",
    fontSize: 60,
    textAlign: "center"
  },
});

export default Counter;
