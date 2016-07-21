/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/**/
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    DrawerLayoutAndroid,
    Navigator,
} from 'react-native';
import Navigate from './app/utils/Navigate';
import Toolbar from './app/components/Toolbar'
import Navigation from './app/scenes/Navigation';
import Welcome from './app/scenes/Welcome'
class CPThree extends Component {
    constructor(props) {
    super(props);
      this.state={
          drawer:null,
          navigator:null,
          isWelcome:true,
      }
  }
    getChildContext(){
        return{
            drawer:this.state.drawer,
            navigator:this.state.navigator
        }
    }
    setDrawer(drawer){
        this.setState({
            drawer
        })
    }
    setNavigator(navigator){
        this.setState({navigator:new Navigate(navigator)});
    }
    componentDidMount(){
        this.times=setTimeout(()=>{
            this.setState({isWelcome:false});
        },2000);
    }
    componentWillUnmount(){
        clearTimeout(this.times);
    }
    render() {
      const {drawer,navigator,isWelcome}=this.state;
      const navView = React.createElement(Navigation);
        if(isWelcome)return <Welcome/>;
        return (
        <DrawerLayoutAndroid
            ref={(drawer)=>{!this.state.drawer ? this.setDrawer(drawer):null}}
            drawerWidth={260}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={()=>{
            if(drawer && navView){
                return navView;
            }
            return null;
            }}
        >
            {drawer &&
            <Navigator
                initialRoute={Navigate.getInitialRoute()}
                navigationBar={<Toolbar onIconPress={drawer.openDrawer} />}
                configureScene={() => {
                            return Navigator.SceneConfigs.FadeAndroid;
                        }}
                ref={(navigator) => { !this.state.navigator ? this.setNavigator(navigator) : null }}
                renderScene={(route) => {
                        if (this.state.navigator && route.component) {
                            return (
                                <View
                                    style={styles.scene}
                                    showsVerticalScrollIndicator={false}>
                                	<route.component title={route.title} path={route.path} {...route.props}/>
                                </View>
                            );
                        }
                    }}
            />
            }
        </DrawerLayoutAndroid>
    );
  }
}
CPThree.childContextTypes = {
    drawer: React.PropTypes.object,
    navigator:React.PropTypes.object
}
const styles = StyleSheet.create({
    scene:{
        marginTop:60
    }
});

AppRegistry.registerComponent('cpThree', () => CPThree);
