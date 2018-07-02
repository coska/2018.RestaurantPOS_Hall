import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CoskaButton from '../components/CoskaButton';
import CoskaInput from '../components/CoskaInput';
import Sidebar from '../components/Sidebar';

export default class TableScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Sidebar>
          <View style={{
            backgroundColor: 'green',
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
              <Text style={{ color: 'white', fontSize: 20 }}>Table No.</Text>
              <CoskaButton
                label="Take Out"
                onPress={() => {
                  this.props.navigation.navigate('Home');
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
  }
});
