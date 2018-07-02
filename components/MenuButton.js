import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';

export default class MenuButton extends React.Component {
  render() {
    const imageSource = this.props.imageSource;

    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View style={{ backgroundColor: 'white', padding: 3, alignItems: 'center'}}>
          <ImageBackground
            source={require('../assets/images/avocado.png')}
            style={{width: 180, height: 180}}
            imageStyle={{resizeMode: 'stretch'}}
          >
            <Text style={{ color: 'white', fontSize: 30 }}>{this.props.price}</Text>
            <Text style={{ color: 'white', fontSize: 30 }}>{this.props.label}</Text>
            {/* <Text style={{ color: 'white', fontSize: 10 }}>{imageSource}</Text> */}
          </ImageBackground>
          
        </View>
      </TouchableOpacity>
    );
  }
}
