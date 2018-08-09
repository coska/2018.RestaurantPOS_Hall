import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import Status from '../components/Status';
import { getCategories, getProducts } from '../store/home/actions';
import Sidebar from '../components/Sidebar';
import SidebarFooter from '../components/SidebarFooter';
import ButtonCategory from '../components/ButtonCategory';
import MenuButton from '../components/MenuButton';
import * as _ from 'lodash';

class HomeScreen extends React.Component {

  static navigationOptions = {
    header: null
  };

  state = {
    isFetchingMore: false,
    category: 'beverages',
    items: [],
    search: ''
  };

  componentWillMount() {
    this.setState({ isFetchingMore: true });
    this.props.getCategories()
      .then(() => {
        return this.props.getProducts();
      })
      .then(() => {
        this.setState({ isFetchingMore: false });
      });
  }

  render() {
    let total = 0;
    const discount = 0;

    const groupedItems = _.uniqBy(this.state.items, item => item.productId)
      .map((item, index) => {
        return Object.assign({}, item, {
          qty: _.groupBy(this.state.items, item => item.productId)[item.productId].length
        });
      });

    groupedItems.forEach(item => {
      total += item.price * item.qty;
    });
    
    return (
      <View style={styles.container}>
        <Sidebar>
          <View style={styles.status}>
            <Status staff={this.props.name} table={this.props.tableNumber}/>
          </View>
          <View style={{flexDirection:'column'}}> 
            <View style={styles.status}> 
              <TouchableOpacity style={[{flex:1}]} onPress={()=>{
                this.props.navigation.navigate('Table'); 
              }
              }>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontSize: 20, color: '#eee' }}>Table {this.props.tableNumber}</Text>
                </View> 
              </TouchableOpacity>
              <TouchableOpacity style={[{flex:1}]}>
                <View style={{ marginVertical: 5 }}>
                  <Text style={{ fontSize: 20, color: '#eee' }}>Takeout</Text>
                </View> 
              </TouchableOpacity> 
            </View> 
            </View>
          <ScrollView>
            <FlatList
              style={{ flex: 8 }}
              initialNumToRender={3}
              ListHeaderComponent={() => {
                return (
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      borderColor: '#000',
                      backgroundColor: '#212121',
                      marginTop: 5
                    }}
                  >
                    <View
                      style={{ flex: 5, margin: 1, justifyContent: 'center' }}
                    >
                      <Text style={[styles.tableLabel, { paddingLeft: 20 }]}>
                        Item
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        margin: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Text style={styles.tableLabel}>Qty</Text>
                    </View>
                    <View
                      style={{
                        flex: 2,
                        margin: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Text style={styles.tableLabel}>Unit</Text>
                      <Text style={styles.tableLabel}>Price</Text>
                    </View>
                    <View
                      style={{
                        flex: 2,
                        margin: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <Text style={styles.tableLabel}>Amount</Text>
                    </View>
                  </View>
                );
              }}
              data={groupedItems}
              numColumns={1}
              renderItem={({ item, index }) => {
                return (
                  <View style={[styles.tableRow, { backgroundColor: '#000' }]}>
                    <View style={{ flex: 3.5, marginHorizontal: 1 }}>
                      <Text style={{ color: '#fff', fontSize: 18 }}>
                        {item.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1.5,
                        marginHorizontal: 1,
                        flexDirection: 'row'
                      }}
                    >
                      <View style={{ flex: 1, marginHorizontal: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {
                          this.setState({ items: this.state.items.concat([item]) });
                        }}>
                          <Text style={{ color: '#fff', fontSize: 18 }}>+</Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flex: 1, marginHorizontal: 1, alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => {
                          let temp = this.state.items.slice();
                          temp.splice(temp.findIndex(t => t.productId === item.productId), 1);
                          this.setState({ items: temp });
                        }}>
                          <Text style={{ color: '#fff', fontSize: 18 }}>-</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ flex: 1, marginHorizontal: 1 }}>
                      <Text
                        style={{
                          color: '#fff',
                          textAlign: 'center',
                          fontSize: 18
                        }}
                      >
                        {item.qty}
                      </Text>
                    </View>
                    <View style={{ flex: 2, marginHorizontal: 1 }}>
                      <Text
                        style={{
                          color: '#fff',
                          textAlign: 'right',
                          fontSize: 18
                        }}
                      >
                        {item.price.toFixed(2)}
                      </Text>
                    </View>
                    <View style={{ flex: 2, marginHorizontal: 1 }}>
                      <Text
                        style={{
                          color: '#fff',
                          textAlign: 'right',
                          fontSize: 18
                        }}
                      >
                        {(item.qty * item.price).toFixed(2)}
                      </Text>
                    </View>
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={() => {
                return (
                  <View style={{ backgroundColor: '#212121' }}>
                    <View style={styles.tableRow}>
                      <View style={{ flex: 2, marginHorizontal: 1 }}>
                        <Text style={styles.tableLabel}>Subtotal:</Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: 1,
                          alignItems: 'flex-end'
                        }}
                      >
                        <Text style={styles.tableLabel}>
                          {total.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={{ flex: 2, marginHorizontal: 1 }}>
                        <Text style={styles.tableLabel}>Discount:</Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: 1,
                          alignItems: 'flex-end'
                        }}
                      >
                        <Text style={styles.tableLabel}>
                          {discount.toFixed(2)}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.tableRow}>
                      <View style={{ flex: 2, marginHorizontal: 1 }}>
                        <Text style={styles.tableLabel}>Tax:</Text>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          marginHorizontal: 1,
                          alignItems: 'flex-end'
                        }}
                      >
                        <Text style={styles.tableLabel}>
                          {(total * 0.13).toFixed(2)}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
            <View
              style={{
                alignItems: 'flex-end',
                borderBottomColor: '#3d4040',
                paddingVertical: 10,
                paddingHorizontal: 20
              }}
            >
              <Text style={{ color: '#fff', fontSize: 32, fontWeight: 'bold' }}>
                {(total * 1.13 - discount).toFixed(2)}
              </Text>
            </View>
          </ScrollView>
          <SidebarFooter
            buttonInfo={[
              { name: 'Cancel', onPress: () => {
                this.setState({ items: [] }),
                this.callingChildFunction();
              } },
              { name: 'Order', onPress: () => {} },
              { name: 'Print Bill', onPress: () => {} }
            ]}
          />
        </Sidebar>
        <View style={styles.main}>
          <View>
            <FlatList
              initialNumToRender={6}
              data={this.props.categories}
              numColumns={3}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ flex: 1, flexDirection: 'row' }}>
                    <ButtonCategory
                      label={item.name}
                      color={['#993333', '#134385', '#b68A31'][index]}
                      onPress={() => {
                        this.setState({ category: item.name });
                      }}
                    />
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={() => {
                return this.state.isFetchingMore ? <ActivityIndicator /> : null;
              }}
            />
          </View>
          <TextInput
            style={styles.textInput}
            placeholder='Search...'
            underlineColorAndroid='transparent'
            onChangeText={(search) => {
              this.setState({search})
            }}
            value={this.state.search}
          />
          <ScrollView>
            <FlatList
              data={this.props.products.filter(product => product.category.name === this.state.category)
                .filter(product => product.name.toLowerCase().includes(this.state.search.toLowerCase()))
              }
              numColumns={4}
              renderItem={({ item, index }) => {
                return (
                  <View>
                    <MenuButton
                      label={item.name}
                      price={item.price}
                      color={['#993333', '#134385', '#b68A31'][index]}
                      imageSource={item.imageFile}
                      onPress={() => {
                        this.setState({ items: this.state.items.concat([item]) });
                      }}
                      items={this.state.items}
                      groupedItems={groupedItems}
                    />
                  </View>
                );
              }}
              keyExtractor={(item, index) => index.toString()}
              ListFooterComponent={() => {
                return this.state.isFetchingMore ? <ActivityIndicator /> : null;
              }}
            />
          </ScrollView>
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
  tableRow: {
    flexDirection: 'row',
    borderBottomColor: '#3d4040',
    borderBottomWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  tableLabel: {
    color: '#787878',
    fontSize: 18,
    fontWeight: '100'
  },
  main: {
    flex: 3
  },
  status: {
    flexDirection: 'row'
  },
  textInput: {
    fontSize: 20,    
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    color: '#09736f'
  }
});

const mapStateToProps = state => {
  return {
    categories: state.home.categories,
    products: state.home.products,
    name: state.login.name,
    tableNumber: state.table.tableNumber
  };
};

export default connect(
  mapStateToProps,
  { getCategories, getProducts }
)(HomeScreen);
