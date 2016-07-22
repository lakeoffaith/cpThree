/**
 * Created by ijoy on 16-6-28.
 */
/*
*/
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    WebView,
    Image
}from 'react-native'
import {Icon} from 'react-native-material-design'
import { getColor } from 'react-native-material-design/lib/helpers';
import BarChart from '../../components/BarChart'
export default class Main extends React.Component{
    getBarData(){
        let data={
            xValues:['1月','2月','3月','4月'],
            yValues:[
                {
                    data:[200,300,400,1000],
                    label:'用户人数',
                    config:{
                        color:getColor("Green400")
                    }
                }
            ]
        };
        return data;
    }

    render(){
         return(
            <View>
                <View style={[styles.panelContainer,{height:160}]}>
                    <View style={{flexDirection:'row'}}>
                         <View style={styles.iconPanel}>
                             <View style={{flex:1,backgroundColor:getColor("Green400"),justifyContent:'center',alignItems:'center'}}>
                                 <Icon name="wifi" size={40} />
                             </View>
                             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                  <Text style={{fontSize:28,color:getColor("paperGrey600")}}>275</Text>
                                 <Text>AP数</Text>
                             </View>
                         </View>
                         <View style={styles.iconPanel }>
                             <View style={{flex:1,backgroundColor:getColor("Green400"),justifyContent:'center',alignItems:'center'}}>
                                 <Icon name="vpn-key" size={40} />
                             </View>
                             <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                 <Text style={{fontSize:28,color:getColor("paperGrey600")}}>25</Text>
                                 <Text>AC数</Text>
                             </View>
                          </View>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.iconPanel}>
                            <View style={{flex:1,backgroundColor:getColor("Green400"),justifyContent:'center',alignItems:'center'}}>
                                <Icon name="verified-user" size={40} />
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:28,color:getColor("paperGrey600")}}>2005</Text>
                                <Text>用户人数</Text>
                            </View>
                        </View>
                        <View style={styles.iconPanel }>
                            <View style={{flex:1,backgroundColor:getColor("Green400"),justifyContent:'center',alignItems:'center'}}>
                                <Icon name="settings-applications" size={40} />
                            </View>
                            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text style={{fontSize:28,color:getColor("paperGrey600")}}>6</Text>
                                <Text>已授权应用</Text>
                            </View>
                        </View>
                    </View>

                </View>
                <View style={[styles.panelContainer,{height:180}]}>
                    <BarChart style={{flex:1}} data={this.getBarData()}/>
                </View>
                <View style={[styles.panelContainer,{height:180}]}>
                     <View style={{flexDirection:'row'}}>
                         <View style={styles.application}>
                                <View style={styles.application_imagePanel}>
                                    <Image style={styles.application_image} source={require('../../img/app01.png')}/>
                                </View>
                                <View style={styles.application_TextView}>
                                     <Text>药品管理</Text>
                                </View>
                         </View>
                         <View style={styles.application}>
                             <View style={styles.application_imagePanel}>
                                 <Image style={styles.application_image} source={require('../../img/app06.png')}/>
                             </View>
                             <View style={styles.application_TextView}>
                                 <Text>移动心电</Text>
                             </View>
                         </View>
                         <View style={styles.application}>
                             <View style={styles.application_imagePanel}>
                                 <Image style={styles.application_image} source={require('../../img/app10.png')}/>
                             </View>
                             <View style={styles.application_TextView}>
                                 <Text>移动查房</Text>
                             </View>
                         </View>
                         <View style={styles.application}>
                             <View style={styles.application_imagePanel}>
                                 <Image style={styles.application_image} source={require('../../img/app11.png')}/>
                             </View>
                             <View style={styles.application_TextView}>
                                 <Text>婴儿防盗</Text>
                             </View>
                         </View>
                         <View style={styles.application}>
                             <View style={styles.application_imagePanel}>
                                 <Image style={styles.application_image} source={require('../../img/app12.png')}/>
                             </View>
                             <View style={styles.application_TextView}>
                                 <Text>危值管理</Text>
                             </View>
                         </View>
                     </View>
                    <View style={{flexDirection:'row'}}>
                        <View style={styles.application}>
                            <View style={styles.application_imagePanel}>
                                <Image style={styles.application_image} source={require('../../img/app13.png')}/>
                            </View>
                            <View style={styles.application_TextView}>
                                <Text>产孕关怀</Text>
                            </View>
                        </View>
                        <View style={styles.application}>
                            <View style={styles.application_imagePanel}>
                                <Image style={styles.application_image} source={require('../../img/app14.png')}/>
                            </View>
                            <View style={styles.application_TextView}>
                                <Text>院长决策</Text>
                            </View>
                        </View>
                        <View style={styles.application}>
                            <View style={styles.application_imagePanel}>
                                <Image style={styles.application_image} source={require('../../img/app14.png')}/>
                            </View>
                            <View style={styles.application_TextView}>
                                <Text>预约挂号</Text>
                            </View>
                        </View>
                        <View style={styles.application}>
                            <View style={styles.application_imagePanel}>
                                <Image style={styles.application_image} source={require('../../img/app14.png')}/>
                            </View>
                            <View style={styles.application_TextView}>
                                <Text>移动护理</Text>
                            </View>
                        </View>
                        <View style={styles.application}>
                            <View style={styles.application_imagePanel}>
                                <Image style={styles.application_image} source={require('../../img/app14.png')}/>
                            </View>
                            <View style={styles.application_TextView}>
                                <Text>无线定位</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>
         )
    }
}

const styles=StyleSheet.create({
       panelContainer:{
             flex:1,
              marginBottom:10,
              backgroundColor:getColor("paperGrey200")
        },
       iconPanel:{
             flex:1,
             flexDirection:'row',
             margin:10,
             width:60,
             height:60,
             backgroundColor:getColor("paperGrey300")
       },
    application:{
        flex:1,
        height:80,
        backgroundColor:getColor("paperGrey400"),
        margin:5
    },
    application_imagePanel:{
        marginTop:10,
        alignItems:'center',
        justifyContent:'center'
    },
    application_image:{
      height:40,
        width:40,
        borderRadius:10,
    },
    application_TextView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

