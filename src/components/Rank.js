import React, {Component} from 'react';
import {StyleSheet,View} from 'react-native';
import DownloadRankPage from "./rank/DownloadRankPage";
import NewGameRankPage from "./rank/NewGameRankPage";
import ReservationRankPage from "./rank/ReservationRankPage";
import HotSellPage from "./rank/HotSellPage";
import HotPlayPage from "./rank/HotPlayPage";
import TitleView from "./TitleView";
import {ScrollableTabBar,} from 'react-native-scrollable-tab-view'
import CompanyPage from "./rank/CompanyPage";

type Props = {};




export default class Rank extends Component<Props>{

    constructor(props){
        super(props);
    }

    render() {

        let ScrollableTabView = require('react-native-scrollable-tab-view');

        return (
            <View style={{flex:1}}>
                <View>
                    <TitleView/>
                </View>

                <ScrollableTabView renderTabBar={() => <ScrollableTabBar/>}
                     tabBarActiveTextColor="#33cccc" tabBarUnderlineStyle={styles.lineStyle} >
                    <DownloadRankPage tabLabel="下载榜" />
                    <NewGameRankPage tabLabel="新品榜" />
                    <ReservationRankPage tabLabel="预约榜" />
                    <HotSellPage tabLabel="热卖榜" />
                    <HotPlayPage tabLabel="热玩榜" />
                    <CompanyPage tabLabel="厂商榜" />
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

