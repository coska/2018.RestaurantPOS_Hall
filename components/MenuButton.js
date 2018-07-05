import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default class MenuButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View style={{ padding: 3, alignItems: 'center'}}>
          <ImageBackground
            source={{uri: this.props.imageSource}}
            style={{width: 180, height: 180}}
            imageStyle={{resizeMode: 'stretch'}}
          >
            <View style={styles.topMargin}></View>
            <View style={styles.container}>
                <Text style={{ color: 'white', fontSize: 25, zIndex: 1 }}>{this.props.label}</Text>
                <Text style={{ color: 'white', fontWeight:'bold', fontSize: 25, zIndex: 1 }}>{this.props.price}</Text>
            </View>
            <View style={styles.blackBox}>

            </View>
            {/* <Text style={{ color: 'white', fontSize: 10 }}>{imageSource}</Text> */}
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  topMargin: {
    flex: 3
  },
  container: {
    flex: 2.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  blackBox: {
    position: 'absolute',
    marginTop: 90,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 180,
    height: 80,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  priceTag: {
    flex: 1
  }
});