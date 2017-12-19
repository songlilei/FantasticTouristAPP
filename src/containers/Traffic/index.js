import React,{Component} from "react";
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import "./index.less"

export default class Traffic extends Component {
    render(){
        return(
            <div>
                <Header title={this.props.location.state.msg}/>
                <div className="main-content content">
                    <h4>欢迎来到{this.props.location.state.msg}订购页!</h4>
                </div>
                <Tab/>
            </div>
        )
    }
}