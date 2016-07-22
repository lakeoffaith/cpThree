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
import {getColor} from 'react-native-material-design/lib/helpers'
const height=Dimensions.get('window').height-90
export default class ShowAp extends  React.Component{
    constructor(){
        super();

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

    render(){
        return(
                <View style={styles.basic}>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>APCK-001号</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.subject}>
                            <Text style={styles.subjectText}>批号:</Text>
                        </View>
                        <View style={styles.info}>
                             <Text>DD120783754</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.subject}>
                            <Text style={styles.subjectText}>安装位置:</Text>
                        </View>
                        <View style={styles.info}>
                            <Text>门诊大厅一号楼楼顶</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.subject}>
                            <Text style={styles.subjectText}>安装 方:</Text>
                        </View>
                        <View style={styles.info}>
                            <Text>成都维远艾钰信息技术有限公司</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.subject}>
                            <Text style={styles.subjectText}>生产商:</Text>
                        </View>
                        <View style={styles.info}>
                            <Text>成都维远艾钰信息技术有限公司</Text>
                        </View>
                    </View>
                </View>

        );
    }
}
const styles=StyleSheet.create({
    titleView:{
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
    },
    title:{
      fontSize:28,
        fontWeight:'bold'
    },
    basic:{
        backgroundColor:getColor("paperGrey300"),
        margin:10,
    },
    row:{
      flexDirection:'row',
        height:40,

    },
    subject:{
        justifyContent:'center',
        alignItems:'flex-end',
        width:80,
    },
    subjectText:{
      fontSize:16,
        fontWeight:'bold'
    },
    info:{
        marginLeft:10,
        flex:1,
        justifyContent:'center'

    }
});
