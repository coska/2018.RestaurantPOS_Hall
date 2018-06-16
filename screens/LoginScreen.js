import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{backgroundColor: 'skyblue'}}>
          <Text>Login</Text>
          <Button
            title="Home"
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
