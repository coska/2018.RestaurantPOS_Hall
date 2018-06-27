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

var itemdata =[ 
  { item: "Avocado Roll",
    qty: 1,
    price: 14
  },
  { item: "Beef Teriyaki",
    qty: 1,
    price: 25
  },
  { item: "Asahi Beer",
    qty: 1,
    price: 5
  },
  { item: "Green Tea",
    qty: 2,
    price: 1
  }
]

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
          <View style={{flex: 1}}>
          <FlatList
              initialNumToRender={3}
              ListHeaderComponent={()=>{
                return (
                  <View style={{flex:1, flexDirection:'row', borderColor: '#0000', backgroundColor: '#aaa', marginTop: 5}}>
                    <View style={{ flex: 5, margin: 1}}>
                      <Text style={{flex: 1, textAlignVertical:'center', color:'#eee'}}>Item</Text>
                    </View>
                    <View style={{ flex: 1, margin: 1}}>
                      <Text style={{flex: 1, textAlign:'center', textAlignVertical:'center', color:'#eee'}}>Qty</Text>
                    </View>
                    <View style={{ flex: 2, margin: 1}}>
                      <Text style={{flex: 1, textAlign:'center', textAlignVertical:'center', color:'#eee'}}>Unit</Text>
                      <Text style={{flex: 1, textAlign:'center', textAlignVertical:'center', color:'#eee'}}>Price</Text>
                    </View>
                    <View style={{ flex: 2, margin: 1}}> 
                      <Text style={{flex: 1, textAlign:'center', textAlignVertical:'center', color:'#eee'}}>Amount</Text>
                    </View>
                  </View>
                );
              }
              }
              data={itemdata}
              numColumns={1}
              renderItem={({ item, index }) => {
                return (
                  <View style={{flex:1, flexDirection:'row', backgroundColor: '#000'}}>
                    <View style={{ flex: 3.5, marginHorizontal: 1}}>
                      <Text style={{color:'#fff'}}>{item.item}</Text>
                    </View>
                    <View style={{ flex: 1.5, marginHorizontal: 1, flexDirection:'row'}}>
                    <View style={{ flex: 1, marginHorizontal: 1}}>
                        <TouchableOpacity onPress={()=>{}}>
                          <Text style={{color:'#fff'}}>+</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flex: 1, marginHorizontal: 1}}>
                        <TouchableOpacity onPress={()=>{}}>
                          <Text style={{color:'#fff'}}>-</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 1}}>
                      <Text style={{color:'#fff', textAlign:'center'}}>{item.qty}</Text>
                    </View>
                    <View style={{ flex: 2, marginHorizontal: 1}}>
                      <Text style={{color:'#fff', textAlign:'right'}}>{item.price.toFixed(2)}</Text>
                    </View>
                    <View style={{ flex: 2, marginHorizontal: 1}}>
                      <Text style={{color:'#fff', textAlign:'right'}}>{(item.qty*item.price).toFixed(2)}</Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
              ListFooterComponent={() => {
                var total=0;
                var discount=0;
                itemdata.forEach(element => {
                  total+=element.price * element.qty;
                });
                return (
                  <View style={{flex:4, backgroundColor: '#aaa', borderColor:'#0000'}}>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <View style={{ flex: 2, marginHorizontal: 1}}>
                        <Text style={{color:'#eee'}}>Subtotal:</Text> 
                      </View>
                      <View style={{ flex: 1, marginHorizontal: 1}}>
                        <Text style={{textAlign:'right', color:'#eee'}}>{total.toFixed(2)}</Text>
                      </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <View style={{ flex: 2, marginHorizontal: 1}}>
                        <Text style={{color:'#eee'}}>Discount:</Text> 
                      </View>
                      <View style={{ flex: 1, marginHorizontal: 1}}>
                        <Text style={{textAlign:'right', color:'#eee'}}>{discount.toFixed(2)}</Text>
                      </View>
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <View style={{ flex: 2, marginHorizontal: 1}}>
                        <Text style={{color:'#eee'}}>Tax:</Text> 
                      </View>
                      <View style={{ flex: 1, marginHorizontal: 1}}>
                        <Text style={{textAlign:'right', color:'#eee'}}>{(total*0.13).toFixed(2)}</Text>
                      </View>
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 1, backgroundColor: '#555'}}>
                    <Text style={{textAlign:'right', color:'#fff', fontSize:18, fontWeight:'bold'}}>{(total*1.13-discount).toFixed(2)}</Text>
                    </View>
                  </View>  
                );
              }}
           />
          </View>
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
