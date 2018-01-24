
import React from 'react';
import { LayoutAnimation, View, Text, StyleSheet, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'skyblue' ,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  background: {
    backgroundColor: '#EAEAEA',
    flex: 1,
  }
});

class Row extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      detail: false,
    };
  }

  _changeDetail(){
    this.setState ({
      detail: !this.state.detail,
    })
  }

  render(){
    let write;
    write = `${this.props.value.name.first}`+" "+`${this.props.value.name.last}`;
    if(this.state.detail){
      write = write + "\n" + `${this.props.value.location.street}`+"\n"+`${this.props.value.email}`
    }
    return(
      <View style={styles.background}>
        <TouchableNativeFeedback onPress={this._changeDetail.bind(this)}>
          <View style={styles.container}>
            <Text style={styles.text}>
              {write}
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

}

export default Row;
