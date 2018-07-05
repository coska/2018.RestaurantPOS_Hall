import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

export default class CoskaSearch extends React.Component {

  state = {
    search: ''
  };

  render() {
    return (
      <TextInput
        style={styles.textInputS}
        placeholder="Search..."
        underlineColorAndroid="transparent"
        onChangeText={(search) => this.setState({search})}
        value={this.state.search}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInputS: {
    fontSize: 20,    
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5, 
    borderColor: '#ddd',
    borderWidth: 1,
    color: '#09736f'
  }
});
