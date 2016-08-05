/**
 * Created by ijoy on 16-6-24.
 */
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableNativeFeedback,
    ScrollView,
    Dimensions,
} from 'react-native'
import GiftedListView from 'react-native-gifted-listview'
import {Icon} from 'react-native-material-design'
import {getColor} from 'react-native-material-design/lib/helpers'
import {fetchData} from '../../data'
export default class ListProject extends  React.Component{
    /**
     * Will be called when refreshing
     * Should be replaced by your own logic
     * @param {number} page Requested page to fetch
     * @param {function} callback Should pass the rows
     * @param {object} options Inform if first load
     */
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            var rows = fetchData("ProjectData");
            callback(rows,{allLoaded:true});
        }, 200); // simulating network fetching
    }


    /**
     * When a row is touched
     * @param {object} rowData Row data
     */
    _onPress(rowData) {
        console.log(rowData+' pressed');
    }

    _renderRowView(item){
        return(
            <TouchableNativeFeedback onPress={()=>this.changeScene()}>
                <View style={styles.item}>
                    <View style={{flex:1}}>
                        <Text style={{fontSize:20,color:'blue',marginBottom:5}}>{item.name}</Text>
                        <Text><Text style={{fontWeight:'bold'}}>管理人：</Text><Text>{item.manager}</Text></Text>
                        <Text numberOfLines={1}><Text style={{fontWeight:'bold'}}>科室：</Text>{item.department}</Text>
                    </View>
                    <View style={{width:60,justifyContent:'flex-end',alignItems:'flex-end',margin:10}}>
                            <Icon name="directions" size={30} color={getColor('googleBlue700')}/>

                    </View>

                </View>
            </TouchableNativeFeedback>
        );
    }
    changeScene(){
        const {drawer,navigator}=this.context;

        navigator.to('Project.ShowProject');
        drawer.closeDrawer();
    }
    render(){
        return(
            <View>
                <View style={{height:Dimensions.get('window').height-90}}>
                    <GiftedListView
                        rowView={this._renderRowView.bind(this)}
                        onFetch={this._onFetch}
                        firstLoader={true} // display a loader for the first fetching
                        pagination={true} // enable infinite scrolling using touch to load more
                        refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                        withSections={false} // enable sections
                        refreshableTintColor="blue"
                    />
                </View>


            </View>
        );
    }
}
ListProject.contextTypes={
    navigator:React.PropTypes.object.isRequired,
    drawer:React.PropTypes.object.isRequired,
}

styles =StyleSheet.create({
    item:{
        flexDirection:'row',
        height:80,
        margin:5,
        borderWidth:0.5,
        backgroundColor:getColor('googleGreen300'),
        borderRadius:1
    }
});