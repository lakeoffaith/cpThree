/**
 * Created by ijoy on 16-6-24.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    BackAndroid,
    TouchableHighlight
} from 'react-native'



import t from 'tcomb-form-native'
const Form=t.form.Form;
const AC=t.struct({
    型号:t.String,
    生产厂商: t.String,  // an optional string
    安装时间: t.Date,               // a required number
    批号: t.String
});
const dealDate=(d)=>{
    var date=new Date(d);
    var month=parseInt(date.getMonth())+1;
    month=Math.floor(month/10)===0?'0'+month:month;
    var day=parseInt(date.getDate());
    day=Math.floor(day/10)===0?'0'+day:day;
    return date.getFullYear()+"-"+month+"-"+day;
}
const options = {
    fields: {
        安装时间: {
            config:{
                format:(date)=>dealDate(date)
            }
        }
    }
};
export default class EditAp extends  React.Component{
    componentDidMount() {
        var navigator = this.props.navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    }
    constructor(){
        super();
    }
    onPress(){
        let value=this.refs['form'].getValue();
        if(value){
            console.log(value);
        }
    }
    render(){
        return(
            <View>
                <View style={styles.container}>
                <Form
                    ref="form"
                    type={AC}
                    options={options}
                />
                <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>保存</Text>
                </TouchableHighlight>
                    </View>
            </View>
        )
    }
}


var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#ffffff',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        marginBottom: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});