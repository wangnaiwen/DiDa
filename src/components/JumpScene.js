import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';


export default class JumpScene extends Component {

    render() {
        return (
            <View
                style={styles.container}>
                <Text>登录成功!这是另一个页面!</Text>
            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
