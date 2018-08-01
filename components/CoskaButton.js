import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class CoskaButton extends React.Component {
  render() {
    const { label } = this.props;

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View style={{ 
          backgroundColor: '#225447', 
          margin:5, 
          paddingVertical: 20, 
          paddingHorizontal: 20, 
          alignItems: 'center'
        }}>
          <Text style={{ color: 'white', fontSize: 20 }}>{label}</Text>
        </View>

      </TouchableOpacity>
    );
  }
}
