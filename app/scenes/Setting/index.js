/**
 * Created by ijoy on 16-7-4.
 */
import React from 'react'

import {
    StyleSheet,
    View,
    Text,
    DeviceEventEmitter
} from 'react-native'
import {MKSwitch,MKColor} from 'react-native-material-kit'
import Notification from 'react-native-system-notification'


export default class Setting extends React.Component{
    onPress(){
        Notification.create({
            id:1337,
            subject:'设置本地提醒',
            message:'你有一个ac出现故障',
            smallIcon:'ic_launcher',
            autoClear:true,
            payload:{number:1,what:true,someAnswer:'42'}
        });
    }
    render(){
        return(
          <View style={{marginTop:10}}>
              <View style={styles.Item}>
                    <View style={{flex:1,justifyContent:'center'}}>
                        <Text>AC出错系统通知</Text>
                    </View>
                    <View style={{width:80,justifyContent:'center'}}>
                        <MKSwitch
                            style={styles.appleSwitch}
                            onColor="rgba(255,152,0,.3)"
                            thumbOnColor={MKColor.Orange}
                            rippleColor="rgba(255,152,0,.2)"
                            onPress={() => this.onPress()}
                            onCheckedChange={(e) => console.log('orange switch checked', e)}
                        />
                    </View>
              </View>
          </View>
        );
    }
}
const styles=StyleSheet.create({
    Item:{
        flexDirection:'row',
        height:40,
        justifyContent:'center',
        borderBottomWidth:0.5,
        marginLeft:20
    }
});