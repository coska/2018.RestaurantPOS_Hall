import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CoskaButton from '../components/CoskaButton';
import Sidebar from '../components/Sidebar';
import { setTable } from '../store/table/actions';

class TableScreen extends React.Component {  
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
                  {
                    [1, 2, 3, 4, 5, 6, 7, 8].map((tableNumber, index) => {

                      return (
                        <CoskaButton 
                          key={index}
                          label={tableNumber}
                          onPress={() => {
                            this.props.setTable(tableNumber);
                            this.props.navigation.navigate('Home'); 
                          }}
                        />
                      )
                    })
                  }
                </View>
                <View>
                   <CoskaButton
                    label='TakeOut'
                    onPress={() => {
                      this.props.navigation.navigate('Home')
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

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { setTable }
)(TableScreen);
