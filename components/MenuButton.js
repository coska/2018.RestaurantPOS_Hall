import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class CoskaButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View style={{ backgroundColor: '#09736f', paddingVertical: 20, paddingHorizontal: 30, alignItems: 'center'}}>
          <Text style={{ color: 'white', fontSize: 24 }}>{this.props.label}</Text>
          <Text style={{ color: 'white', fontSize: 24 }}>{this.props.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
