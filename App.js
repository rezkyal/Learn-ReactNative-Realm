import React from 'react';
import { AppRegistry, ListView, StyleSheet, SectionList, View, Text, ScrollView, ViewPagerAndroid } from 'react-native';
//import data from './component/data.js';
import DataForm from './component/DataForm.js';
import realm from './component/realm.js';
import Row from './component/Row.js';
import Header from './component/Header.js';
import Footer from './component/Footer.js';
import SectionHeader from './component/SectionHeader.js';
//import 'realm';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator:{
    flex: 1,
    height: 5,
    backgroundColor: '#EAEAEA',
  },
  viewPager: {
    flex: 1
  },
});


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    const data = realm.objects('Data');
    const getSectionData = (dataBlob,sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId)=>dataBlob[rowId];

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1,s2)=> s1 !== s2,
      getSectionData,
      getRowData,
    });

    const {dataBlob,sectionIds,rowIds} = this.formatData(data);
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob,sectionIds,rowIds),
      page: 0,
    };
  }

  _newData(){
    alert('work');
    this.setState({page: 0});

  }

  formatData(data){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXZ'.split('');
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    for (let sectionId = 0; sectionId < alphabet.length; sectionId++){
      const currentChar = alphabet[sectionId];

      const users = data.filter((user) => user.name.first.toUpperCase().indexOf(currentChar)===0);

      if(users.length > 0){
        sectionIds.push(sectionId);
        dataBlob[sectionId] = { character: currentChar };
        rowIds.push([]);
        for (let i=0; i<users.length; i++){
          const rowId = `${sectionId}:${i}`;
          rowIds[rowIds.length - 1].push(rowId);

          dataBlob[rowId]=users[i];
        }
      }
    }
    return {dataBlob, sectionIds, rowIds};
  }

  render(){
    return(
    <ViewPagerAndroid style={styles.viewPager} initialPage={this.state.page}>
      <View key="1">
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data)=><Row value={data} />}
          renderSeparator={(sectionId,rowId)=> <View key={rowId} style={styles.separator}/>}
          renderHeader={() => <Header />}
          renderFooter={() => <Footer />}
          renderSectionHeader={(sectionData)=> <SectionHeader {...sectionData} />}
        />
      </View>
      <View key="2">
        <DataForm _newData={this._newData}/>
      </View>
    </ViewPagerAndroid>
    );
  }
}
