import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { getCategories, getProducts } from '../store/home/actions';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    isFetchingMore: false
  };

  componentWillMount() {
    this.setState({ isFetchingMore: true });
    this.props.getCategories().then(() => {
      this.setState({ isFetchingMore: false });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.sidebar}>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.main}>
          <View style={{flex: 1}}>
            <FlatList
              initialNumToRender={6}
              data={this.props.categories}
              numColumns={3}
              renderItem={({ item }) => {
                return (
                  <View style={{ flex: 1 }}>
                    <View style={{ margin: 5, borderColor: '#ddd', backgroundColor: '#fff' }}>
                      <Text>{item.name}</Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
              ListFooterComponent={() => {
                return (
                  this.state.isFetchingMore ?
                    <ActivityIndicator /> : null
                );
              }}
            />
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

const mapStateToProps = (state) => {
  return {
    categories: state.home.categories,
    products: state.home.products
  };
};

export default connect(mapStateToProps, { getCategories, getProducts })(HomeScreen);
