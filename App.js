/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Dimensions} from 'react-native'

import Home from './src/components/Home'
import Profile from './src/components/Profile'
import Develop from "./src/components/Develop";

import findNor from './src/images/find_normal.png';
import findSel from './src/images/find_selected.png';
import forumNor from './src/images/forum_normal.png';
import forumSel from './src/images/forum_selected.png';
import homeNor from './src/images/home_normal.png';
import homeSel from './src/images/home_selected.png';
import myNor from './src/images/my_game_normal.png';
import mySel from './src/images/my_game_selected.png';
import rankNor from './src/images/rank_normal.png';
import rankSel from './src/images/rank_selected.png';
import Forum from "./src/components/Forum";
import Rank from "./src/components/Rank";

const deviceW = Dimensions.get('window').width

const basePx = 375



const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
function px2dp(px) {
  return px *  deviceW / basePx
}
type Props = {};
export default class App extends Component<Props> {
  state= {
    selectedTab: 'home'
  };

  render() {
    return (
      <TabNavigator style={styles.container}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          selectedTitleStyle={{color: "#33cccc"}}
          renderIcon={() => <Image source={homeNor} alt='' style={styles.icon}/>}
          renderSelectedIcon={() => <Image source={homeSel} alt='' style={styles.icon}/>}
          //badgeText="1"
          onPress={() => this.setState({selectedTab: 'home'})}>
          <Home/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'find'}
          title="发现"
          selectedTitleStyle={{color: "#33cccc"}}
          renderIcon={() => <Image source={findNor} alt='' style={styles.icon}/>}
          renderSelectedIcon={() => <Image source={findSel} alt='' style={styles.icon}/>}
          onPress={() => this.setState({selectedTab: 'find'})}>
          <Profile/>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'forum'}
          title='论坛'
          selectedTitleStyle={{color: "#33cccc"}}
          renderIcon={() => <Image source={forumNor} alt='' style={styles.icon}/>}
          renderSelectedIcon={() => <Image source={forumSel} alt='' style={styles.icon}/>}
          onPress={() => this.setState({selectedTab:'forum'})}>
          <Forum/>
        </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'rank'}
              title='排行'
              selectedTitleStyle={{color: "#33cccc"}}
              renderIcon={() => <Image source={rankNor} alt='' style={styles.icon}/>}
              renderSelectedIcon={() => <Image source={rankSel} alt='' style={styles.icon}/>}
              onPress={() => this.setState({selectedTab:'rank'})}>
              <Rank/>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'my'}
              title='我的游戏'
              selectedTitleStyle={{color: "#33cccc"}}
              renderIcon={() => <Image source={myNor} alt='' style={styles.icon}/>}
              renderSelectedIcon={() => <Image source={mySel} alt='' style={styles.icon}/>}
              onPress={() => this.setState({selectedTab:'my'})}>
              <Develop/>
          </TabNavigator.Item>
      </TabNavigator>
    );
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
    icon: {
        width: 24,
        height: 24,
        resizeMode: 'stretch',
        marginTop: 10
    }

});
