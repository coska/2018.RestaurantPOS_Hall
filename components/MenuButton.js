import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default class MenuButton extends React.Component {
  state = {
    selected: false,
    count: 0,
    selectedItems: [],

  }
  render() {
    const selected = this.state.selected;
    const count = this.state.count;
    const label = this.props.label;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.onPress;
          this.setState({ 
            selected: true,
            count: this.state.count + 1,
            selectedItems: [...this.state.selectedItems, label]
          });
        }}
      >
        <View style={{ margin: 3 }}>
          <ImageBackground
            source={{uri: this.props.imageSource}}
            style={{width: 180, height: 180, justifyContent: 'flex-end' }}
            imageStyle={{resizeMode: 'stretch'}}
          > 
            { selected
              ? <View style={styles.selectedStyle} />
              : <Text></Text>
            }
            <Text style={styles.count}>
              {count}
              {/* {this.props.selectedItems} */}
            </Text>
            <View style={styles.container}>
              <Text style={{ color: 'white', fontSize: 22 }}>{label}</Text>
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
    height: '45%',
    backgroundColor: 'rgba(0,0,0,0.5)',    
    justifyContent: 'center',
    alignItems: 'center', 
  },
  selectedStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 180,
    height: 180,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  count: {
    color: "white",
    fontSize: 60,
    textAlign: "center"
  }
});