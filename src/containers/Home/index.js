import React,{Component} from "react";
import ReactDOM from "react-dom";
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import "./index.less"

export default class Home extends Component {
    render(){
        return(
            <div>
                <Header title="首页"/>
                <div className="main-content">
                    <div className="main-loading"></div>
                    Home组件
                </div>
                <Tab/>
            </div>
        )
    }
}