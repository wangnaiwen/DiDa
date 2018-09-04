
import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import Video from 'react-native-video'

export default class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        return (
            <View style={styles.container}>
              <Video
                  ref={(ref) => {
                      this.video = ref
                  }}
                  //来自网络的MP4视频
                  source={{ uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' }}
                  //1.0表示默认速率
                  rate={1.0}
                  //图片等比例缩放
                  resizeMode='contain'
                  //不重复播放
                  repeat={false}
                  //默认音量
                  volume={1.0}
                  //样式
                  style={styles.backgroundVideo}/>
          </View>
        );
    }
}
