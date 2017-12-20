import React,{Component} from 'react';
import "./index.less"
import {Link} from 'react-router-dom';
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import {connect} from "react-redux"
import actions from "../../store/actions/list";
class List extends Component{
    componentDidMount(){
        this.props.getList()
    }
    render(){
        return (
            <div className="list">
                <Header title="首页"/>
                <Tab/>
            </div>
        )
    }
}
export default connect(state=>state.list,actions)(List)
