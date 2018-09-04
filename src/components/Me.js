import React, {Component} from 'react';
import {StyleSheet,Text, View, ActivityIndicator, Dimensions, ListView, Image} from 'react-native';
import {PullView} from 'react-native-pull';


export default class Me extends Component{
    constructor(props){
        super(props);
        //数据源
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        //var newData = require('../src/data/ImageData.json');
        this.state = {
            refreshing: false,
            dataSource: ds,
            data: [
                {"img" : "./src/images/house_icon"},
                {"img" : "./src/images/house_icon"},
                {"img" : "./src/images/house_icon"},
                {"img" : "./src/images/house_icon"}
            ]
        };
        this.onPullRelease = this.onPullRelease.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
    }

    onPullRelease(resolve){
        setTimeout(() => {
            resolve();
        }, 3000)
    }

    topIndicatorRender(pulling, pullok, pullrelease){
        const hide = {position:"absolute", left:10000};
        const show = {position:'relative', left:0};
        setTimeout(() => {
            if(pulling){
                this.txtPulling && this.txtPulling.setNativeProps({style:show})
                this.txtPullok && this.txtPullok.setNativeProps({style:hide})
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style:hide})
            }else if(pullok){
                this.txtPulling && this.txtPulling.setNativeProps({style:hide})
                this.txtPullok && this.txtPullok.setNativeProps({style:show})
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style:hide})
            }else if(pullrelease){
                this.txtPulling && this.txtPulling.setNativeProps({style:hide})
                this.txtPullok && this.txtPullok.setNativeProps({style:hide})
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style:show})
            }
        }, 1);
        return(
            <View
                style={{flexDirection:'row', justifyContent:'center',alignItems:'center',height:60}}>
                <ActivityIndicator size='small' color='gray'/>
                <Text ref={(c) => {this.txtPulling = c;}}>下拉刷新pulling...</Text>
                <Text ref={(c) => {this.txtPullok = c;}}>松开刷新pullok...</Text>
                <Text ref={(c) => {this.txtPullrelease = c;}}>玩命刷新中pullreleast...</Text>
            </View>
        );
    }

    render(){
        return(
            <View style={styles.container}>
                <PullView style={{width: Dimensions.get('window').width}} onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}>
                    <View style={{backgroundColor:'#eeeeee'}}>
                        <ListView
                        dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                        renderRow={this.renderRow} >
                        </ListView>
                    </View>
                </PullView>
            </View>
        )
    }

    //每一行要怎么渲染
  renderRow(rowData){
    return <Text > {rowData.toString()}</Text>
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
    imageStyle: {
        // 尺寸
        width:60,
        height:60,
        // 边距
        marginLeft:10,
        margin:10
    },
  });












