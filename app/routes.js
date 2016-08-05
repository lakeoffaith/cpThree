/**
 * Created by ijoy on 16-6-28.
 */
export default{
    Main: {
        initialRoute: true,
        title: 'Main',
        component: require('./scenes/Main').default,
        actionsArray:[{icon: 'search',onPressRoute:'UserCenter',badge:{value:4,animated:true}}]
    },
    Ap:{
        title:'Ap管理',
        component:require('./scenes/Ap').default,
        actionsArray:[{icon:'add',onPressRoute:'Ap.EditAp'}],
        children:{
            EditAp:{
                title:'增加Ap',
                component:require('./scenes/Ap/editAp').default
            },
            ShowAp:{
                title:'显示Ap',
                component:require('./scenes/Ap/showAp').default
            }
        }
    },
    Application:{
        title:'应用',
        component:require('./scenes/Application').default,
        actionsArray:[{icon:'add',onPressRoute:'Application.EditApplication'}],
        children:{
            EditApplication:{
                title:'增加应用',
                component:require('./scenes/Application/editApplication').default
            },
            ShowApplication:{
                title:'应用描述',
                component:require('./scenes/Application/showApplication').default
            }
        }
    },
    Project:{
        title:'项目管理',
        component:require('./scenes/Project').default,
        actionsArray:[{icon:'add',onPressRoute:'Project.EditProject'}],
        children:{
            EditProject:{
                title:'增加项目',
                component:require('./scenes/Project/editProject').default
            },
            ShowProject:{
                title:'项目详细',
                component:require('./scenes/Project/showProject').default
            }
        }
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