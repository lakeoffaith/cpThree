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
import {fetchData} from '../../data'
import LineChart from '../../components/LineChart'
export default class ShowAp extends  React.Component{
   render(){
       const data=fetchData('ApplicationList')[0];
       return(
         <View>
             <View style={styles.hearder}>
                 <View style={{width:60,marginRight:10}}>
                     <Image source={require('../../img/checkRoom.jpg')} style={{width:60,height:100}}/>
                 </View>
                 <View style={{flex:1,marginRight:10}}>
                     <Text style={{fontWeight:'bold',fontSize:20,color:getColor('googleBlue300')}}>{data.name}</Text>
                     <Text style={{marginTop:5}} numberOfLines={3}>
                         {data.info}
                     </Text>
                 </View>
                 <View style={{width:50}}>
                        <View style={{justifyContent:'flex-end',alignItems:'center'}}>
                            <View style={{flexDirection:'column'}}>
                                    <Text style={{fontSize:24,fontWeight:'bold',color:getColor('googleYellow300')}}>566</Text>
                                    <Text style={{color:getColor('googleBlue300')}}>已称赞</Text>
                            </View>
                        </View>
                 </View>
             </View>
             <View style={{backgroundColor:getColor('paperGrey300'),margin:5}}>
                 <View style={styles.chartHeader}>
                        <Text style={{fontSize:20}}>移动查房应用实时在线人数</Text>
                 </View>
                 <View style={styles.chart}>
                     <LineChart  style={{flex:1}} data={fetchData('ApplicationLineData')}/>
                 </View>
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
