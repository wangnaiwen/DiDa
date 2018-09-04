import React, {Component} from 'react';
import {StyleSheet,Button,Text, View, Image, Dimensions} from 'react-native';
import HttpUtil from '../net/HttpUtil'
import StorageUtil from '../data/StorageUtil'
import RecommendPage from './home/RecommendPage'
import GamePage from "./home/GamePage";
import TitleView from "./TitleView";


type Props = {};




export default class Home extends Component<Props>{

    video;

    constructor(props){
        super(props);
            this.state= {
            userInfo: 'null'
        };
        //getUserInfo(this)
    }

    render() {

        let ScrollableTabView = require('react-native-scrollable-tab-view');
        return (
            <View style={{flex: 1}}>
                <View>
                    <TitleView/>
                </View>
                <ScrollableTabView
                    tabBarActiveTextColor="#33cccc"
                    tabBarUnderlineStyle={styles.lineStyle}>
                     <RecommendPage tabLabel="游戏" />
                     <GamePage tabLabel="推荐" />
                </ScrollableTabView>
            </View>
    )
    }
}



const styles = StyleSheet.create({
    lineStyle: {
        height: 2,
        backgroundColor: '#33cccc',
    },
  });

