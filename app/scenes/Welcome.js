/**
 * Created by ijoy on 16-6-28.
 */
/**
 * Created by ijoy on 16-6-22.
 */
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    PixelRatio
} from 'react-native'

export default class Welcome extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                <Image source={require('../img/welcome1.png')} style={[styles.img]} >


                </Image>
                    </View>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcome}>
                        无线室内地图
                    </Text>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    img:{
        width:Dimensions.get('window').width,
        height:300,

    },
    welcomeContainer:{
        position:'absolute',
        backgroundColor:'transparent',
        bottom:60,
        left:0,
        right:0,
        justifyContent:'center',
        alignItems:'center',
    },
    welcome:{
        fontSize:20,

    }
});