/**
 * Created by ijoy on 16-6-28.
 */
import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
}from 'react-native'
import { Avatar, Drawer, Divider, COLOR, TYPO } from 'react-native-material-design';
export default class Navigation extends React.Component{
    constructor(){
        super();
        this.state={
            route:null,
        }
    }
    changeScene(path,name){
        const {drawer,navigator}=this.context;
        this.setState({
            route:path
        });
        navigator.to(path,name);
        drawer.closeDrawer();
    }
    render(){
        const {route}=this.state;
        return(
            <View style={{flex:1}}>
            <Drawer theme='light'>
                <Drawer.Header>
                    <View style={styles.header}>
                        <Avatar size={80} image={<Image source={require('../../img/timg.jpg')}/>} />
                        <Text style={[styles.text, COLOR.paperGrey50, TYPO.paperFontSubhead]}>李振纲</Text>
                    </View>
                </Drawer.Header>



                <Drawer.Section
                    items={[
                    {
                        icon: 'home',
                        value: 'Welcome',
                        active: !route || route === 'Main',
                        onPress: () => this.changeScene('Main'),
                        onLongPress: () => this.changeScene('Main')
                    },
                    {
                        icon: 'label',
                        value: 'AP管理',
                        label: '2',
                        active: route === 'Ap',
                        onPress: () => this.changeScene('Ap'),
                        onLongPress: () => this.changeScene('Ap')
                    },
                    {
                        icon: 'label',
                        value: '应用管理',
                        label: '2',
                        active: route === 'Application',
                        onPress: () => this.changeScene('Application'),
                        onLongPress: () => this.changeScene('Application')
                    },
                     {
                        icon: 'label',
                        value: '个人中心',
                        label: '2',
                        active: route === 'UserCenter',
                        onPress: () => this.changeScene('UserCenter'),
                        onLongPress: () => this.changeScene('UserCenter')
                    }, {
                        icon: 'label',
                        value: '系统设置',
                        label: '2',
                        active: route === 'Setting',
                        onPress: () => this.changeScene('Setting'),
                        onLongPress: () => this.changeScene('Setting')
                    }
                    ]}
                />


                </Drawer>
                <View style={{marginBottom:0,flexDirection:'row',height:40}}>

                    <View  style={{flex:1,backgroundColor:'blue',alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity  onPress={()=>this.changeScene('Login')}>
                        <Text style={{fontSize:20}}>登录</Text>
                        </TouchableOpacity >
                    </View>

                    <View onPress={()=>this.changeScene('Register')} style={{flex:1,backgroundColor:'green',alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity  onPress={()=>this.changeScene('Register')}>
                            <Text style={{fontSize:20}}>注册</Text>
                        </TouchableOpacity >
                    </View>
                    </View>
                </View>
        );
    }
}
Navigation.contextTypes={
    drawer:React.PropTypes.object.isRequired,
    navigator:React.PropTypes.object
}

const styles =StyleSheet.create( {
    header: {
        paddingTop: 16,
        marginLeft:60,
    },
    text: {
        marginTop: 20,
        marginLeft:20,
        color:'blue'
    }
});