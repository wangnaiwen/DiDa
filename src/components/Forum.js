import React, {Component} from 'react';
import {StyleSheet,Button,Text, View, Image, Dimensions} from 'react-native';
import HttpUtil from '../net/HttpUtil'
import StorageUtil from '../data/StorageUtil'
import AttentionPage from "./forum/AttentionPage";
import PlatePage from "./forum/PlatePage";
import TitleView from "./TitleView";


type Props = {};




export default class Forum extends Component<Props>{

    video;

    constructor(props){
        super(props);
            this.state= {
            userInfo: 'null'
        };
        //getUserInfo(this)
        onGetLocalInfoBtnPress(this)
    }

    render() {
        let {sHeight,sWidth} =  Dimensions.get('window');

        let ScrollableTabView = require('react-native-scrollable-tab-view');

        return (
            <View style={{flex: 1}}>
                <View>
                    <TitleView/>
                </View>
                <ScrollableTabView tabBarActiveTextColor="#33cccc" tabBarUnderlineStyle={styles.lineStyle}>
                    <PlatePage tabLabel="板块" />
                    <AttentionPage tabLabel="关注" />
                </ScrollableTabView>
            </View>
        )
      }
}


const onSavePress = () => {
  StorageUtil.save("wnw", "123456")
}

const onButtonPress = () => {
  getUserInfo(this)
};

const onGetLocalInfoBtnPress = (home) => {
  StorageUtil.get('wnw', function(ret){
    home.setState({userInfo:ret})
  })
};

const onRemovePress = () =>{
  StorageUtil.remove('wnw')
}

function getUserInfo(home) {

  home.setState({userInfo:'正在获取UserInfo'});

  //利用HttpUtil发起get请求，并且将请求回来的字符串进行显示
  let url = 'https://api.surmon.me/auth';
  HttpUtil.get(url, function(ret) {
    home.setState({userInfo: ret})
  })

  // fetch("https://api.surmon.me/auth")
  // .then((response) =>          // 数据解析方式
  //   response.json()
  // )
  // .then((responseData) => {       // 获取到的数据处理
  //   //home.setState({userInfo: "获取数据: " + JSON.stringify(responseData) });   //把JSON数据转化成字符串现实出来
  //   home.setState({userInfo: responseData.code + " " + responseData.message + " "})
  // })
  // .catch((err) => {
  //   console.log(err)
  //   home.setState({userInfo: "出错了"});
  // });
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#18e2ff',
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
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

    title: {
        height:100,
    },

    tab:{
       color: "#33cccc"
    },
    lineStyle: {
        height: 2,
        backgroundColor: '#33cccc',
    },
  });

