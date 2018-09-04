import React, {Component} from 'react';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

var storage = new Storage({
    size: 100,
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
})

global.storage = storage

class StorageUtil extends Component{
    
    /**
     * 
     * @param {key} key 
     * @param {data} data 
     */
    static save(myKey, myData){
        global.storage.save({
            key: myKey,
            data: myData,
            expires: null
        });
    }

    /**
     * 
     * @param {the key} myKey 
     * @param {response callback} callback 
     */
    static get(myKey, callback){
        global.storage.load({
            key: myKey,
            // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            autoSync: true,
            // syncInBackground(默认为true)意味着如果数据过期，
            // 在调用sync方法的同时先返回已经过期的数据。
            // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
            syncInBackground: true,

            // 你还可以给sync方法传递额外的参数
        }).then((res) => {
            callback(res)
        })
        .catch((err) => {
            callback('出错了')
        })
    }

    /**
     * 
     * @param {key} myKey 
     */
    static remove(myKey){
        global.storage.remove({
            key: myKey
        });
    }
}

module.exports = StorageUtil