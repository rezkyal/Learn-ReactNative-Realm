import { AppRegistry, View, Text, TextInput, TouchableNativeFeedback, StyleSheet} from 'react-native';
import React from 'react';
//import Main from './App';
import Realm from 'realm';
const doggo = {
  name: 'Dog',
  properties: {
    name: 'string'
  }
};

const NameSchema = {
  name: 'Name',
  properties: {
    first: 'string',
    last: 'string'
  }
};

const LocationSchema = {
  name: 'Location',
  properties: {
    street: 'string',
  }
}

const DataSchema = {
  name: 'Data',
  properties: {
    name: {type: 'Name'},
    location: {type: 'Location'},
    email: 'string',
  }
};

let realm = new Realm ({
  schema: [NameSchema,LocationSchema,DataSchema]
});
export default realm;
