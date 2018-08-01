import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default class CoskaInput extends React.Component {

    state = {
      text: ''
    }

  render() {
    const staff = this.state.text;
    return (
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {    
    fontSize: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 50,
    color: '#09736f'
  }
});
