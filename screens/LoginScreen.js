import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CoskaButton from '../components/CoskaButton';
//import CoskaInput from '../components/CoskaInput';
import Sidebar from '../components/Sidebar';

export default class LoginScreen extends React.Component {
  state={
    text:""
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Sidebar>
          <View style={{
            backgroundColor: '#225447',
            marginTop: 100,
            paddingVertical: 20,
            paddingRight: 30,
            alignItems: 'flex-end'
          }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 24}}>COSKA SUSHI</Text>
          </View>
        </Sidebar>
        <View style={styles.main}>
          <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 20 }}>
            <View style={{ width: 400, marginTop: 200 }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Staff Name</Text>
              
              <TextInput
                style={styles.textInput}
                underlineColorAndroid="transparent"
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
              />
              <CoskaButton
                label="Login"
                onPress={() => { 
                  this.props.navigation.navigate('Table',{staff: this.state.text}); 
                }}
              />
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
  main: {
    flex: 3
  },
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
