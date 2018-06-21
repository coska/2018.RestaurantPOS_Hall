import React from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {

  state = {
    text: ''
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <View style={{ flex: 1 }}>
            <View style={{
              backgroundColor: 'green',
              marginTop: 100,
              paddingVertical: 20,
              paddingRight: 30,
              alignItems: 'flex-end'
            }}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24}}>COSKA SUSHI</Text>
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ width: 400 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Staff Name</Text>
              <TextInput
                style={{height: 40, borderColor: '#e5e5e5', borderWidth: 1, marginBottom: 50, color: '#09736f'}}
                underlineColorAndroid="#222"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Home');
                }}
              >
                <View style={{ backgroundColor: '#09736f', paddingVertical: 20, paddingHorizontal: 30, alignItems: 'center' }}>
                  <Text style={{ color: 'white', fontSize: 24 }}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d0d0d',
    flexDirection: 'row'
  },
  sidebar: {
    flex: 2
  },
  main: {
    flex: 3
  }
});
