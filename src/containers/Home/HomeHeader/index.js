import React,{Component} from "react";
import "./index.less";

export default class HomeHeader extends Component {
    handleSearch = ()=>{
        this.props.searchTxt(this.input.value);
    }
    onKeyup = (e) => {
        e.keyCode === 13 && this.handleSearch()
    }
    render(){
        return(
            <div className="home-header">
                <div className="logo">
                    <img src={require("../../../images/logo-search.png")} alt=""/>
                </div>
                <div className="search">
                    <input ref={input=>this.input=input} onKeyUp={this.onKeyup}  onBlur={this.handleSearch} type="text" placeholder="请输入景点名称"/>
                </div>
                <p onClick={this.handleSearch} className="iconfont icon-search"></p>
            </div>
        )
    }
}