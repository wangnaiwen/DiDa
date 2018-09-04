import React from 'react';
import {FlatList, View, StyleSheet, Text} from 'react-native';

import FontsSize from '../../res/Fonts/size';
import FontsWeight from '../../res/Fonts/weight';
import Colors from '../../res/Colors';
import Styles from '../../res/Styles';
import {Avatar,} from 'react-native-elements'
import BriefInfo from "./BriefInfo";

const _separator = () =>{
    return <View style={{height:0.5, backgroundColor:"#000" }}/>
};

const _refreshing = () => {
    const timer = setTimeout(() => {
        clearTimeout(timer);
    }, 3000)
};

const _onLoad = () =>{
    const timer = setTimeout(() => {
        clearTimeout(timer);
    }, 3000);
};

let contentData = require('../../../src/data/rank.json');
export default class HotPlayPage extends React.Component{
    render(){
        return (
            <FlatList
                ItemSeparatorComponent={_separator}
                showsVerticalScrollIndicator={false}
                data={contentData.content}
                refreshing={false}
                onRefresh={_refreshing}
                onEndReachedThreshold={0}
                onEndReached={_onLoad}
                renderItem={({item}) => (
                    <View style={styles.overAll} key={item.key}>
                        <View style={styles.leftContent}>
                            <Text style={styles.number}>{item.number}</Text>
                            <Avatar
                                medium
                                source={{uri: item.img}}
                                activeOpacity={0.7}
                                avatarStyle={{borderRadius:8, backgroundColor:Colors.white}}/>
                        </View>
                        <BriefInfo
                            name={item.title}
                            title={item.title}
                            star={item.star}
                            ratingSize={10}
                            label1={item.label1}
                            label2={item.label2}
                            label3={item.label3}
                            label4={item.label4}
                        />
                        <Text style={styles.rightText}>
                            下载
                        </Text>
                    </View>
                )}
            >

            </FlatList>
        );
    }
}


const styles = StyleSheet.create({
    number: {
        fontSize: FontsSize.medium,
        fontWeight: FontsWeight.bold,
        marginHorizontal: Styles.Height(10),
        width: Styles.Width(30),
        marginLeft: 16
    },
    overAll: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: Styles.Height(3),
        position: 'relative',
    },
    leftContent: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightIcon: {
        position: 'absolute',
        top: Styles.Height(10),
        right: Styles.Width(13),
    },
    rightText:{
        fontSize:15,
        color: "#14B9C8",
        flexDirection: 'row',
        marginLeft: 100,
        marginTop: 30
    }
});

