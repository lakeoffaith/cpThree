/**
 * Created by ijoy on 16-6-27.
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
} from 'react-native'
import {getColor} from 'react-native-material-design/lib/helpers'
import LineChart from '../../components/LineChart'
import {fetchData} from '../../data'
import {Icon} from 'react-native-material-design'
export default class ShowProject extends  React.Component{
   render(){
       const parentData=fetchData('ProjectData')[0];
       const data=fetchData('ProjectChildData')
       return(
        <View>
            <View style={{flexDirection:'row',height:50,marginTop:20,marginBottom:10,backgroundColor:getColor('googleBlue500')}}>
                <View style={{flex:1,marginLeft:5,justifyContent:'center'}}>
                <Text style={{fontSize:20}}>{parentData.name}</Text>
                    </View>
                <View style={{width:80,justifyContent:'flex-end',alignItems:'center',margin:10}}>
                    <Text>--{parentData.department}</Text>
                </View>
            </View>
            <View style={{marginLeft:40}}>

                {   data.map(function(item,i){
                    return (
                        <View style={{height:100,borderLeftWidth:1,paddingLeft:10,marginBottom:10,flexDirection:'row'}}>
                            <View style={{flex:1,marginRight:10}}>
                                <View style={{justifyContent:'center'}}>
                                    <Text style={{fontSize:20,color:getColor('googBlue300')}}>{item.title}</Text>
                                </View>
                                <View >
                                    <View style={{flex:1,}}>
                                        <Text numberOfLines={1}><Text style={{fontWeight:'bold'}}>描述:</Text>{item.info}</Text>
                                        <Text><Text style={{fontWeight:'bold'}}>任务人:</Text>{item.target}</Text>
                                        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
                                            <Text style={{fontWeight:'bold'}}>周期:</Text>
                                            <Text>{item.startTime}</Text>
                                            <Icon name="trending-flat"/>
                                            <Text> {item.endTime}</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={{witdh:50,justifyContent:'center',alignItems:'center'}}>
                                {item.state=='closed'?
                                <Icon name="done" size={30} style={{color:getColor('googBlue500')}}/>:null
                                }
                            </View>
                        </View>
                    );
                    })

                }
            </View>
        </View>
       );
   }

}
const styles=StyleSheet.create({
    hearder:{
        flexDirection:'row',
        backgroundColor:getColor('paperGrey400'),
        margin:5,
        padding:10,
    },
    chartHeader:{
        backgroundColor:getColor('googleBule100'),
        margin:5,
        height:30,
        borderRadius:3
    },
    chart:{

        height:200,
    }
});
