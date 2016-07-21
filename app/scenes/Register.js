import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import t from 'tcomb-form-native'
const Form=t.form.Form;
const RegisterDomain=t.struct({
    用户名:t.String,
    密码: t.String,  // an optional string
    确认密码:t.String
});
const options={}
export default class Register extends React.Component{
    render(){
        return (
            <View>
                <View style={styles.centerContainer}>
                    <Text style={{fontSize:20}}>注册</Text>
                </View>
                <Form
                    type={RegisterDomain}
                    options={options}
                />
                <View style={styles.centerContainer}>
                    <TouchableOpacity >
                        <View style={{width:100,height:50,backgroundColor:'orange',justifyContent:'center',alignItems:'center',borderRadius:5}}>
                            <Text style={{fontSize:25}}>注册</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    centerContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    }
});