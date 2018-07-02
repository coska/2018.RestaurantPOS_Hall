import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Sidebar extends React.Component {
  render() {
    return (
      <View style={styles.sidebar}>
        <View style={{ flex: 1 }}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sidebar: {
    flex: 2
  }
});
