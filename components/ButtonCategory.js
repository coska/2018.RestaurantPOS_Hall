import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

export default class ButtonCategory extends React.Component {
  render() {
    return (
      <TouchableOpacity                
        onPress={this.props.onPress} 
        style={{flex: 1, margin: 5, paddingVertical: 15, alignItems: 'center', backgroundColor: this.props.color}}>
          <Text style={{ padding:10, fontSize:20, color:'white' }}>{this.props.label}</Text>
      </TouchableOpacity>
    );
  }
}
