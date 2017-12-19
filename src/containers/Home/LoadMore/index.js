import React,{Component} from "react";
import "./index.less"

export default class LoadMore extends Component {
    render(){
        return(
           <div onClick={this.props.fetchMoreDestinations} className="load-more">
                点击继续加载
           </div>
        )
    }
}