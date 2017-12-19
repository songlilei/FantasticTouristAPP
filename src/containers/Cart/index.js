import React,{Component} from "react";
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import "./index.less"

export default class Cart extends Component {
    render(){
        return(
            <div>
                <Header title="下单喽"/>
                <div className="main-content">

                </div>
                <Tab/>
            </div>
        )
    }
}