import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CoskaButton from '../components/CoskaButton';
import CoskaInput from '../components/CoskaInput';
import Sidebar from '../components/Sidebar';
//import { LinearGradient } from 'expo';

export default class TableScreen extends React.Component {
  render() {
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
            <Text style={{ 
            color: 'white', 
            fontWeight: 'bold', 
            fontSize: 24
            }}>COSKA SUSHI</Text>
          </View>
        </Sidebar>
        <View style={styles.main}>
          <View style={{ flex: 3, justifyContent: 'space-between', flexDirection: 'row',  paddingLeft: 20 }}>
            <View style={{ marginTop: 200 }}>
              <Text style={{ color: 'white', fontSize: 14 }}>Table No.</Text>
                <View style={{ flexDirection: 'row'}}>
                  <CoskaButton 
                    label="1"
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}
                  />
                  <CoskaButton
                    label="2"
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}
                  />
                  <CoskaButton
                    label="3"
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}
                  />
                   <CoskaButton
                    label="4"
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}
                  />
                </View>
                <View style={{flexDirection: 'row'}}>
                   <CoskaButton
                    label="5"
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}
                  />
                   <CoskaButton
                    label="6"
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}
                  />
                  <CoskaButton
                    label="7"
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}
                  />
                  <CoskaButton
                    label="8"
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}
                  />
                </View>
                <View>
                   <CoskaButton
                    label="TakeOut"
                    onPress={() => {
                      this.props.navigation.navigate('Home');
                    }}
                  />
                </View>
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
