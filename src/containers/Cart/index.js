import React,{Component} from "react";
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import "./index.less"
import {getLessons} from "../../api/list"
import {Link} from "react-router-dom"
export default class Cart extends Component {
    constructor(){
        super()
        this.state={list:[],total:0,all:0}
    }
    componentDidMount(){
        getLessons(0,3).then(res=>this.setState({list:res.list},function () {
            let total=0;
            let all=0
            this.state.list.forEach(item=>{
                total+=parseInt(item.price.man)
                all+=item.number
            });
            this.setState({total,all})
        }))
    }
    minus=(item)=>{
       let list=this.state.list.map((one)=>{
           if (one===item){
               item.number--;
               if (item.number<0){
                   item.number=0
                   return item
               }
               let total=this.state.total-parseInt(item.price.man);
               let all=this.state.all-1
               this.setState({total,all})
               return item;
           }
           return one
       });
       this.setState({list})
    }
    add=(item)=>{
        let list=this.state.list.map((one)=>{
            if (one===item){
                item.number++;
                let total=this.state.total+parseInt(item.price.man);
                let all=this.state.all+1
                this.setState({total,all})
                return item;
            }
            return one
        });
        this.setState({list})
    }
    render(){
        return(
            <div>
                <Header title="下单啦"/>
                <div className="main-content1">
                    {
                        this.state.list.map((item,index)=>(
                            <div key={index} className="wrap">
                                <div  className="one">
                                    <input type="radio"/>
                                    <img src={item.url}/>
                                    <div className="inner">
                                        <p>{item.title}</p>
                                        <div className="inner2">
                                            <span className="price">{`单价:${item.price.man}`}</span>
                                            <div className="num">
                                                <span onClick={()=>this.minus(item)}>-</span>
                                                <span>{item.number}</span>
                                                <span onClick={()=>this.add(item)}>+</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        ))
                    }
                    <div className="total">
                        <div className="money">合计：<span>{!!this.state.total?this.state.total:"买个呗"}</span></div>
                        <Link to={{pathname:"/pay",state:{total:this.state.total,sumNum:this.state.all,list:this.state.list}}}>
                            <div className="pay">
                                结算 ({!!this.state.all&&this.state.all})
                            </div>
                        </Link>
                    </div>
                </div>

                <Tab/>
            </div>
        )
    }
}