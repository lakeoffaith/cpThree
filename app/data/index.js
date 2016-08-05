const ApArrays=[
    {name:"APCK-001",runTimes:1000,type:'error',company:'成都精图无限信息技术有限公司'},
    {name:"APCK-006",runTimes:978,type:'warning',company:'成都精图无限信息技术有限公司'},
    {name:"APCK-002",runTimes:700,type:'warning',company:'成都精图无限信息技术有限公司'},
    {name:"APCK-003",runTimes:742,company:'成都精图无限信息技术有限公司'},
    {name:"APCK-004",runTimes:128,company:'成都精图无限信息技术有限公司'},
    {name:"APCK-005",runTimes:378,company:'成都精图无限信息技术有限公司'}]

const ApplicationArrays=[
    {name:"移动查房",type:'error',company:'成都精图无限信息技术有限公司',info:'通过移动设备帮助医生即时录入',startData:'2015-05-27'},
    {name:"移动心电图",type:'error',company:'成都精图无限信息技术有限公司',info:'携带移动心电图终端在院外也能同步采集心电图数据',startData:'2015-05-27'},
    {name:"药品权限",company:'成都精图无限信息技术有限公司',info:'抗生素、毒麻药品、高价格药品进行权限管理和申请',startData:'2015-05-27'},
    {name:"危值管理",company:'成都精图无限信息技术有限公司',info:'从医疗设备和仪器上获取诊疗数据，即时获取危重病人警示信息',startData:'2015-05-27'},
    {name:"产孕关怀",company:'成都精图无限信息技术有限公司',info:'从孕妇建立建档的时候开始，对其进行产前指导',startData:'2015-05-27'},
    {name:"婴儿防盗",company:'成都精图无限信息技术有限公司',info:'实现母婴配对、拆卸告警、位置移动告警',startData:'2015-05-27'}
]

const ProjectData=[
    {name:'PDA招投标',month:1,manager:'王才候',department:'设备科'},
    {name:'移动查房项目',month:1,manager:'刘才',department:'信息科'},
    {name:'无线网络项目设施',month:2,manager:'李大成',department:'信息科'}
]
const ProjectChildData=[
    {title:'第一周',info:'品牌及参数调研品牌及参数调研',type:'high',target:'李某',state:'closed',startTime:'2015-06-27',endTime:'2015-07-27'},
    {title:'第二周',info:'根据我院要求规划方案，了解个厂家方案',type:'normal',target:'李某',state:'closed',startTime:'2015-06-27',endTime:'2015-07-27'},
    {title:'第三周',info:'准备招投标',type:'normal',target:'刘某',state:'start',startTime:'2015-06-27',endTime:'2015-07-27'},
    {title:'第四周',info:'上报招标',type:'normal',target:'刘某',state:'start',startTime:'2015-06-27',endTime:'2015-07-27'}
]

ApplicationLineData={
    xValues:['0','1','2','3','4','5','6'],
    yValues:[
        {
            data:[20,30,32,35,40,60,100],
            label:'连接总数',
            config:{
                color:'blue'
            }
        }
    ]
}
const notifyArrays=[
    {name:'ac故障',time:'2016-3-3',location:'住院楼104'},
    {name:'ap故障',time:'2016-4-3',location:'护士站304'},
    {name:'ac故障',time:'2016-4-12',location:'急诊科401'}]
const taskArrays=[
    {name:'检测Ac任务',time:'2016-4-5',taskSender:'张科长','taskContent':'检测住院楼102AC运行情况,及时汇报'},
    {name:'检测Ap任务',time:'2016-5-5',taskSender:'张科长','taskContent':'检测护士站104的AP信号运行情况,及时汇报'}]


export  function fetchData(name){
    switch (name){
        case "ApplicationList": return ApplicationArrays;
        case "ApplicationLineData":return ApplicationLineData;
        case "ProjectData" :return ProjectData;
        case "ProjectChildData" :return ProjectChildData;
        case "NotifyArrays" :return notifyArrays;
        case "TaskArrays" :return taskArrays;
        case "ApArrays" :return ApArrays;
    }
    return [];
};