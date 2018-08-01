import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Clock from "./Clock";

export default class Status extends React.Component{
  constructor(props) {
    super(props);
    this.handleStatus = this.handleStatus.bind(props);
    this.state = {
      staff:props.staff,
      table:props.table
    };
  }
  
  handleStatus(props){
    this.setState({
      staff:props.staff,
      table:props.table
    });
  };
   
  render(){  
  onLogout=()=>{};
  return( 
      <View style={styles.mainContainer} >
        <TouchableOpacity style={styles.logoutButton} onPress={onLogout}>
          <View style={{ marginVertical: 5 }}> 
            <Text style={{ fontSize: 20, color: "#eee" }}>Logout</Text> 
          </View>
        </TouchableOpacity>
        <View style={styles.loggedStaff}>
          <Text style={{ color: "#09736f", fontSize: 20, marginLeft: 20 }}>
            {this.state.staff} 
          </Text>
        </View>
        <View style={styles.clockContainer}> 
          <Clock
            style={{ flex: 1 }}
            render={({ time }) => (
              <Text style={{ color: "#eee", fontSize: 20, textAlign: "right" }}>
                {
                  `${time.getMonth() +
                    1}/${time.getDate()}/${time.getFullYear()} ${time
                    .toLocaleTimeString()
                    .slice(0, 5)}`
                }
              </Text>
            )}
          />
        </View>
      </View>
      
  )
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  logoutButton: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.7,
    borderColor: "#eee",
    paddingVertical: 2
  },
  loggedStaff: {
    flex: 1.2,
    justifyContent: "center"
  },
  clockContainer: {
    flex: 1.6,
    justifyContent: "center"
  }
});
