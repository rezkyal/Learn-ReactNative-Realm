import { AppRegistry, View, Text, TextInput, TouchableNativeFeedback, StyleSheet} from 'react-native';
import React from 'react';
import Main from './App';
//import realm from './component/realm';

// const Realm = require('realm');
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 12,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'skyblue' ,
//     borderRadius: 10,
//     marginLeft: 10,
//     marginRight: 10,
//   },
// });
//
// class ProjectStarter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { realm: realm,
//                     text: null,};
//   }
//
//   // componentWillMount() {
//   //   Realm.open({
//   //     schema: [{name: 'Dog', properties: {name: 'string'}}]
//   //   }).then(realm => {
//   //     realm.write(() => {
//   //       //let allDog = realm.objects('Dog');
//   //       //realm.delete(allDog);
//   //       //realm.create('Dog', {name: 'Rey'});
//   //     });
//   //     this.setState({ realm });
//   //   });
//   // }
//
//
//   att(dog,index){
//     return(
//       <Text key={index}> {dog.name}, </Text>
//     )
//   }
//
//   cetak(){
//     let dogs = realm.objects('Dog');
//     let test=[];
//     test.push('Number of dogs' + dogs.length + 'Name: ');
//     dogs.map((dog, index)=>{
//       test.push(this.att(dog,index));
//     });
//     return(
//       test
//     );
//   }
//
//   _insertDoggo() {
//     if(realm){
//       if(this.state.text != null){
//         realm.write(()=>{
//           realm.create('Dog',{name: this.state.text});
//         });
//         this.setState({text: null});
//       }else {
//         alert('Name is empty!');
//       }
//     }
//   }
//
//   _deleteDoggo() {
//     if(realm){
//       realm.write(()=>{
//         let allDogs = realm.objects('Dog');
//         realm.delete(allDogs);
//       });
//       this.setState({text: null});
//     }
//   }
//
//   render() {
//     //alert(realms);
//     //let dogs = this.state.realm.objects('Dog');
//     //let print = dogs[0];
//     const info = this.state.realm
//       ? this.cetak()
//       : 'Loading...';
//
//     return (
//       <View>
//         <Text>
//           {info}
//         </Text>
//         <TextInput
//           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
//           onChangeText={(text) => this.setState({text})}
//           value={this.state.text}
//         />
//         <TouchableNativeFeedback onPress={this._insertDoggo.bind(this)}>
//           <View style={styles.container}>
//             <Text> NewDoggo </Text>
//           </View>
//         </TouchableNativeFeedback>
//         <TouchableNativeFeedback onPress={this._deleteDoggo.bind(this)}>
//           <View style={styles.container}>
//             <Text> DeleteDoggo </Text>
//           </View>
//         </TouchableNativeFeedback>
//       </View>
//     );
//   }
// }

AppRegistry.registerComponent('ProjectStarter', () => Main);
