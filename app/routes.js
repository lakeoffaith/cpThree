/**
 * Created by ijoy on 16-6-28.
 */
export default{
    Main: {
        initialRoute: true,
        title: 'Main',
        component: require('./scenes/Main').default,
        actionsArray:[{icon: 'search',onPressRoute:'UserCenter'}]
    },
    Login: {
        title: '登录',
        component: require('./scenes/Login').default
    },
    Register:{
        title:'注册',
        component:require('./scenes/Register').default
    },
    UserCenter:{
        title:'个人中心',
        component:require('./scenes/userCenter').default
    },
    Setting:{
        title:'系统设置',
        component:require('./scenes/Setting').default
    }
}