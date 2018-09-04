import React, {Component} from 'react';
import {StyleSheet,Button,Text, View} from 'react-native';

export default class LifeCycleCompont extends Component{

    constructor(props){
        super(props)
        console.log('--初始化 constructor----')
    }

    componentWillMount(){
        console.log('--组件开始渲染之前 componentWillMount----')
    }

    componentDidMount(){
        console.log('--组件开始渲染完成 componentWillReceiveProps----')
    }



    componentWillReceiveProps( nextProps){
        console.log('--组件接收到新的 props 的时候调用  componentWillReceiveProps----')
    }

    shouldComponentUpdate( nextProps,  nextState){
        console.log('--在接收到新的 props 或者 state，将要渲染之前调用。 shouldComponentUpdate----')
    }

    componentWillUpdate( nextProps,  nextState){
        console.log('--在接收到新的 props 或者 state 之前立刻调用。。 shouldComponentUpdate----')
    }

    componentDidUpdate(){
        console.log('--组件刷新完成之后调用。。 shouldComponentUpdate----')
    }


    componentWillUnmount(){
        console.log('--组件移除之前 componentWillUnmount----')
    }


    render(){
        console.log('--组件渲染 render----')
        return <View>
            <Text> </Text>
        </View>
    }
}