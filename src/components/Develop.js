import React from 'react';
import {  Dimensions, Image,View, Text} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {Avatar} from 'react-native-elements';

const window = Dimensions.get('window');
console.log(window.width);

export default class Develop extends React.Component{
    render(){
        return(
            <View style={{ flex: 1}}>
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <ParallaxScrollView
                        style={{ flex: 1, backgroundColor: '#4effe1', overflow: 'hidden' }}
                        renderBackground={() => <Image source={{ uri: `https://placekitten.com/414/350`, width: window.width, height: 350 }}/>}
                        renderFixedHeader={() => <Text style={{ textAlign: 'right', color: '#4effe1', padding: 5, fontSize: 20 }}>Hello</Text>}
                        parallaxHeaderHeight={ 350 }>
                        <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text>
                            <Avatar
                                small
                                rounded
                                source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg" }}
                                activeOpacity={0.7}
                                avatarStyle={{
                                    borderWidth: 1,
                                    borderColor: '#ffffff',
                                }}
                            />
                        </View>
                    </ParallaxScrollView>
                </View>
            </View>
        )
    }
}
