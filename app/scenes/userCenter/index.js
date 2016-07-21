/**
 * Created by ijoy on 16-7-5.
 */

import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    ListView,
} from 'react-native'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import {Icon} from 'react-native-material-design'
const height=Dimensions.get('window').height-90
const notifyArrays=[{name:'ac故障',time:'2016-2-3',location:'3住院楼104'},{name:'ac故障',time:'2016-2-3',location:'3住院楼104'},{name:'ac故障',time:'2016-2-3',location:'3住院楼104'}]
const taskArrays=[{name:'检测Ac任务',time:'2016-4-5',taskSender:'张科长','taskContent':'检测住院楼102AC运行情况,及时汇报'},{name:'检测Ac任务',time:'2016-4-5',taskSender:'张科长','taskContent':'检测住院楼102AC运行情况,及时汇报'}]
const projectArrays=[{name:'急诊科一区无线覆盖计划',time:'2016-9-7',projectContent:'协助成都维远艾钰施工团队完成无线的部署等工作'}]
export default class UserCenter extends React.Component{
    constructor(){
        super();
        this.state={
            notifyDataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(notifyArrays),
            taskDataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(taskArrays),
            projectDataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(projectArrays)
        }
    }
    _renderNotifyRowView(item){
        return(
                <View style={{ flexDirection:'row',height:80,margin:5,backgroundColor:'gray',borderWidth:0.5}}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:20,color:'blue',marginBottom:5}}>{item.name}</Text>
                        <Text><Text style={{fontWeight:'bold'}}>生成时间</Text>：<Text style={{color:'yellow',fontSize:18}}>{item.time}</Text></Text>
                        <Text><Text style={{fontWeight:'bold'}}>设备地点</Text>：{item.location}</Text>
                    </View>
                    <View style={{width:60,justifyContent:'center',alignItems:'center'}}>
                        <Icon name="warning" size={40} color="green"/>
                    </View>

                </View>
        );
    }
    _renderTaskRowView(item){
        return(
            <View style={{ flexDirection:'row',height:120,margin:5,backgroundColor:'gray',borderWidth:0.5}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:20,color:'blue',marginBottom:5}}>{item.name}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>生成时间</Text>：<Text style={{color:'yellow',fontSize:18}}>{item.time}</Text></Text>
                    <Text><Text style={{fontWeight:'bold'}}>指派人</Text>：{item.taskSender}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>任务</Text>：{item.taskContent}</Text>
                </View>
                <View style={{width:60,justifyContent:'center',alignItems:'center'}}>
                    <Icon name="warning" size={40} color="green"/>
                </View>

            </View>
        );
    }
    _renderProjectRowView(item){
        return(
            <View style={{ flexDirection:'row',height:120,margin:5,backgroundColor:'gray',borderWidth:0.5}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:20,color:'blue',marginBottom:5}}>{item.name}</Text>
                    <Text><Text style={{fontWeight:'bold'}}>完成时间</Text>：<Text style={{color:'yellow',fontSize:18}}>{item.time}</Text></Text>
                    <Text><Text style={{fontWeight:'bold'}}>计划内容</Text>：{item.projectContent}</Text>
                </View>
                <View style={{width:60,justifyContent:'center',alignItems:'center'}}>
                    <Icon name="warning" size={40} color="green"/>
                </View>

            </View>
        );
    }
    render(){
        return(
                <ScrollableTabView style={{height:height}}>
                    <View tabLabel="通知">
                            <ListView
                                dataSource={this.state.notifyDataSource}
                                renderRow={this._renderNotifyRowView}
                            />
                    </View>
                    <View tabLabel="任务">
                        <ListView
                            dataSource={this.state.taskDataSource}
                            renderRow={this._renderTaskRowView}
                        />
                    </View>
                    <View tabLabel="计划">
                        <ListView
                            dataSource={this.state.projectDataSource}
                            renderRow={this._renderProjectRowView}
                        />
                    </View>
                </ScrollableTabView>
        );
    }
}