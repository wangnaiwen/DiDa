import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import searchIcon from "../../src/images/icon_search.png"
import userIcon from "../../src/images/default_user_icon.png"

export default class TitleView extends React.Component{

    render(){

        return(
            <View style = {styles.container} >
                <Image style={styles.userIcon} source={userIcon} alt='' />
                <Text style={styles.textStyle}>TapTap </Text>
                <Image style={styles.searchIcon} source={searchIcon} alt='' />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: '#33cccc',
        height: 60
    },

    userIcon:{
        width: 32,
        height: 32,
        borderRadius : 32,
        alignSelf: 'flex-start',
        marginTop: 14,
        marginLeft: 14
    },

    textStyle:{
        alignSelf:'center',
        color: "#ffffff",
        fontSize : 25
    },

    searchIcon:{
        width: 28,
        height: 28,
        borderRadius : 28,
        alignSelf: 'flex-end',
        marginBottom: 16,
        marginRight: 16,
    }

});

