import React, {Component} from 'react';
import {StyleSheet,Text, View, ListView} from 'react-native';

type Props = {};
export default class Profile extends Component<Props>{

  constructor(props){
    super(props)
    //数据源
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds,
      data: ['A','B','C','D']
    };
  }

  //每一行要怎么渲染
  renderRow(rowData){
    return <Text>{rowData}</Text>
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
        dataSource={this.state.dataSource.cloneWithRows(this.state.data)} 
        renderRow={this.renderRow} >
        </ListView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });