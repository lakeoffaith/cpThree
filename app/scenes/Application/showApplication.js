/**
 * Created by ijoy on 16-6-27.
 */

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    BackAndroid,
    Dimensions,
    ListView,
    ScrollView,
} from 'react-native'
import LineChart from '../../components/LineChart'
const serverInfoArray=[{title:'二月维修',name:'王大超',manager:'张宏',company:'上海宏信有限公司'},{title:'三月维修',name:'王大超',manager:'张宏',company:'上海宏信有限公司'},{title:'四月维修',name:'王大超',manager:'张宏',company:'上海宏信有限公司'}];
const height=Dimensions.get('window').height-90
export default class ShowAp extends  React.Component{
    getUseLineData() {
        var data={
            xValues:['1月','2月','3月','4月'],
            yValues:[
                {
                    data:[1000,3000,2000,5000],
                    label:'每月用户',
                    config:{
                        color:'blue'
                    }
                }
            ]
        };
        return data;
    }
    getFluxLineData() {
        var data={
            xValues:['1月','2月','3月','4月'],
            yValues:[
                {
                    data:[1000,2000,3000,5000],
                    label:'每月流量',
                    config:{
                        color:'yellow'
                    }
                }
            ]
        };
        return data;
    }
    getSignlLineData() {
        var data={
            xValues:['','','',''],
            yValues:[
                {
                    data:[200,700,400,500],
                    label:'信号质量',
                    config:{
                        color:'yellow'
                    }
                }
            ]
        };
        return data;
    }
    constructor(){
        super();
        this.state={
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2}).cloneWithRows(serverInfoArray),
        }
    }
    componentDidMount(){
        var navigator=this.props.navigator;
        BackAndroid.addEventListener('hardwareBackPress',function(){
            if(navigator && navigator.getCurrentRoutes().length>1){
                navigator.pop();
                return true;
            }
            return false;
        })
    }
    componentWillUnmount(){
        BackAndroid.removeEventListener('hardwareBackPress');
    }
    _renderServerRow(item){
        return (
          <View style={styles.serviceInfoItem}>
              <Text>
                  {item.title}
              </Text>
          </View>
        );
    }
    render(){
        return(
              <ScrollView
                  ref={(scrollView) => { _scrollView = scrollView; }}
                  automaticallyAdjustContentInsets={false}
                  onScroll={() => { console.log('onScroll!'); }}
                  scrollEventThrottle={200}
                  style={[styles.scrollView,{height:height}]}>
                <View style={styles.basic}>
                        <Text style={styles.title}>AP1号</Text>
                    <Text><Text style={{fontWeight:'bold'}}>批号</Text>：120783754</Text>
                    <Text><Text style={{fontWeight:'bold'}}>安装位置</Text>：门诊大厅一号楼楼顶</Text>
                    <Text><Text style={{fontWeight:'bold'}}>安装 方</Text>：成都维远艾钰信息技术有限公司</Text>
                    <Text><Text style={{fontWeight:'bold'}}>生产 商</Text>：成都维远艾钰信息技术有限公司</Text>
                        <View style={styles.labelInfo}>
                            <Text>1.2.4GHz、5.8GHz（中国）无线接入设备，支持802.11 a/b/g/n协议；

                                2.内置2×2MIMO天线技术（可选外置），整机最大接入速率600Mbps；

                                3.上行千兆口，支持POE供电及外置电源供电，功耗＜12W；

                                4.天线发射功率≤23dbm，可调功率范围1dbm~相应国家规定。
                            </Text>
                        </View>
                </View>
              <View style={styles.chart}>
                  <Text>接入用户数统计 图表</Text>
                  <LineChart style={{flex:1}} data={this.getUseLineData()}/>
              </View>
              <View style={styles.chart}>
                  <Text>上网流量统计 图表</Text>
                  <LineChart style={{flex:1}} data={this.getFluxLineData()}/>
              </View>
              <View style={styles.chart}>
                  <Text>信号质量分析 图表</Text>
                  <LineChart style={{flex:1}} data={this.getSignlLineData()}/>
              </View>



                  </ScrollView>
        );
    }
}
const styles=StyleSheet.create({
    scrollView:{
        flex:1
    },
    title:{
        fontSize:18,
        color:'yellow'
    },
    labelInfo:{
        marginTop:10,
    },
    basic:{
        backgroundColor:'gray',
        margin:10,
    },
    chart:{
        flex:1,
        margin:5,
        backgroundColor:'green',
        height:200
    },
    serviceInfo: {
        marginTop: 10,
        margin: 5,
        backgroundColor: 'red',
        width: Dimensions.get('window').width,
    },
    serviceInfoItem:{
        margin:5,
        backgroundColor:'gray',
    }
});
