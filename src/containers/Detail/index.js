import React, {Component} from "react";
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import "./index.less"
import {getLessons} from "../../api/list"
import {Link} from "react-router-dom"

export default class Detail extends Component {
    constructor() {
        super();
        this.state = {
            price: [
                {type: "man", every1: [{name:"【浪漫假期】不负蓝天，不负假期，尽享热带海岛带来的度假乐趣！"},
                    {name:'页面价格为单人价格，建议双份起订，单人出行需补房差！'}]},
                {type: "oldman", every1:[{name:"【浪漫假期】不负蓝天，不负假期，尽享热带海岛带来的度假乐趣！"},
                    {name:'页面价格为单人价格，建议双份起订，单人出行需补房差！'}]},
                {type: "child",every1: [{name:"上午",jiage:30}, {name:'中午',jiage:25},{name:"下午",jiage:30}]},
                {type: "all",every1:[{name:"上午",jiage:100}, {name:'中午',jiage:100},{name:"下午",jiage:100}]}],
            one:{
                type: "man", every1: [{name:"【浪漫假期】不负蓝天，不负假期，尽享热带海岛带来的度假乐趣！"},
                    {name:'页面价格为单人价格，建议双份起订，单人出行需补房差！'}]
            }

        }
    }

    componentWillMount() {
        console.log(this.props.location.state);
    }
    componentDidMount(){
        if ( !localStorage.getItem("users")){
            localStorage.setItem("users","[]")
        }
    }
    handleBack=()=>{
        this.props.history.goBack()

    }
    filter = (type) => {
        let one = this.state.price.find((item, index) => item.type == type)
        this.setState({one})
    }
    storeToLocal=()=>{
        let users=JSON.parse(localStorage.getItem("users"))
        users.push(this.props.location.state)
        console.log(users.length);
        alert("加入成功")
        localStorage.setItem("users",JSON.stringify(users))
        this.props.history.push('/order')
    }

    render() {
        var d = new Date();
        var str = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+'  '+d.getHours()+":"+d.getMinutes();
        var str2 = d.getFullYear()+"-"+(d.getMonth())+"-"+d.getDate()+'  '+d.getHours()+":"+d.getMinutes();
        let {url2, title,content,price} = this.props.location.state
        return (
            <div className="jyn">
                <i
                 onClick={this.handleBack}
                ></i>
                <img className='detail-top' src={url2}/>
                <h4>{title}

                </h4>
                <div className='detail-time'>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;{content}</p>

                </div>
                <div className='tab'>
                    <ul className='tab-nav'>
                        <li onClick={() => {
                            this.filter("man")
                        }}>
                            <h4>成人票</h4>
                        </li>
                       {/* <li onClick={() => {
                            this.filter("child")
                        }}>儿童票
                        </li>
                        <li onClick={() => {
                            this.filter("oldman")
                        }}>老人票
                        </li>
                        <li
                            onClick={() => {
                                this.filter("all")
                            }}
                        >全程票</li>*/}
                    </ul>
                    <ul className="list">
                        {
                            this.state.one.every1.map((item, index) => (
                                <li key={index}><span>{item.name}</span></li>
                            ))
                        }
                    </ul>

                </div>
                <div className='shop'>
                    <span>
                        价格：￥{price.man}
                    </span>
                    <div className="btn" onClick={this.storeToLocal}>
                        加入购物车
                    </div>
                </div>

            </div>
        )
    }
}
