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
import Sidebar from '../components/Sidebar';
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
    const color = {
      '0':'#993333',
      '1':'#134385',
      '2':'#b68A31'
    }
    return (
      <View style={styles.container}>
        <Sidebar>
          <Text style={{color: 'white', fontSize: 50}}>Sidebar</Text>
        </Sidebar>
        <View style={styles.main}>
          <View style={{flex: 1}}>
            <FlatList
              initialNumToRender={6}
              data={this.props.categories}
              numColumns={3}
              renderItem={({ item, index }) => {
                return (
                  <View style={{flex: 1, flexDirection: 'row' }}>
                    <TouchableOpacity                
                      onPress={() => {
                        this.props.navigation.navigate('Home');
                       }} 
                      style={{flex: 1, margin: 5, paddingVertical: 15, paddingHorizontal: 20, alignItems: 'center', backgroundColor: color[index]}}>
                        <Text style={{ padding:10, fontSize:24, color:'white' }}>{item.name}</Text>
                    </TouchableOpacity>
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
