<<<<<<< HEAD
import React,{Component} from 'react';
export default class Home extends Component{
    render(){
        return (
            <div>
              Home

            </div>
        )
    }
}
=======
import React,{Component} from "react";
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
>>>>>>> aae64539d14eed68cd00bea7170dae3438c2762f
