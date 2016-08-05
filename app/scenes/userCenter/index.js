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
import {getColor} from 'react-native-material-design/lib/helpers'
const height=Dimensions.get('window').height-90
import {fetchData} from '../../data'
export default class UserCenter extends React.Component{
    render(){
        return(
                <View>
                    <View style={{height:50,flexDirection:'row',paddingLeft:10,backgroundColor:getColor('googleBlue100')}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={{fontSize:20}}>通知</Text>
                        </View>
                        <View style={{width:50,justifyContent:'flex-end',alignItems:'center',margin:10}}>
                            <Icon name="expand-more" size={20}/>
                        </View>
                    </View>
                    {
                        fetchData('NotifyArrays').map(function(item,i){
                            return(
                              <View style={{flexDirection:'row',marginLeft:20,height:40,marginBottom:10,padding:10,borderBottomWidth:0.5}}>
                                  <View style={{flex:1}}>
                                      <Text>{item.name}</Text>
                                  </View>
                                  <View style={{flex:1}}>
                                      <Text>{item.location}</Text>
                                  </View>
                                  <View style={{flex:1}}>
                                      <Text>{item.time}</Text>
                                  </View>
                                  </View>
                            );
                        })
                    }
                    <View style={{height:50,flexDirection:'row',paddingLeft:10,backgroundColor:getColor('googleBlue100')}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <Text style={{fontSize:20}}>任务通知</Text>
                        </View>
                        <View style={{width:50,justifyContent:'flex-end',alignItems:'center',margin:10}}>
                            <Icon name="expand-more" size={20}/>
                        </View>
                    </View>
                    {
                        fetchData('TaskArrays').map(function(item,i){
                            return(
                                <View style={{flexDirection:'row',marginLeft:20,height:40,marginBottom:10,padding:10,borderBottomWidth:0.5}}>
                                    <View style={{flex:1}}>
                                        <Text>{item.name}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text numberOfLines={1}>{item.taskContent}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                        <Text>{item.time}</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>
        );
    }
}