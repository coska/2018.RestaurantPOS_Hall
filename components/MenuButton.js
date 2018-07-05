import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default class MenuButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View style={{ margin: 3 }}>
          <ImageBackground
            source={{uri: this.props.imageSource}}
            style={{width: 180, height: 180, justifyContent: 'flex-end' }}
            imageStyle={{resizeMode: 'stretch'}}
          >
            <View style={styles.blackBox}>
              <Text style={{ color: 'white', fontSize: 22 }}>{this.props.label}</Text>
              <Text style={{ color: 'white', fontWeight:'bold', fontSize: 22 }}>${this.props.price.toFixed(2)}</Text>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackBox: {
    height: '45%',
    backgroundColor: 'rgba(0,0,0,0.5)',    
    justifyContent: 'center',
    alignItems: 'center', 
  },
  priceTag: {
    flex: 1
  }
});