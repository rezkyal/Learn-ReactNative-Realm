import React from 'react';
import {Text, TextInput, View, TouchableNativeFeedback, StyleSheet} from 'react-native';
import realm from './realm.js';


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
});

class DataForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      FirstName: null,
      LastName: null,
      Street: null,
      Email: null,
    };
  }

  _insertData(){
    const newData = {
      name: {
        first: this.state.FirstName,
        last: this.state.LastName,
      },
      location: {
        street: this.state.Street,
      },
      email: this.state.Email,
    }
    if(this.state.FirstName!=null && this.state.Email!=null){
      realm.write(()=>{
        realm.create('Data',newData);
        alert('New data added!');
      });
      this.setState({
        FirstName: null,
        LastName: null,
        Street: null,
        Email: null,
      });
      this.props._newData();
    }else{
      alert('First Name and Email cannot null!');
    }

  }

  render(){
    return(
      <View>
        <Text>First Name</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(FirstName) => this.setState({FirstName})}
          value={this.state.FirstName}
        />
        <Text>Last Name</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(LastName) => this.setState({LastName})}
          value={this.state.LastName}
        />
        <Text>Street</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(Street) => this.setState({Street})}
          value={this.state.Street}
        />
        <Text>E-Mail</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(Email) => this.setState({Email})}
          value={this.state.Email}
        />
        <TouchableNativeFeedback onPress={this._insertData.bind(this)}>
          <View style={styles.container}>
            <Text> insertData </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

export default DataForm;
