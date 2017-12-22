import React,{Component} from "react";
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import Loading from "../../components/Loading/index"
import "./index.less"
//import moment from "moment"
export default class Pay extends Component {
    constructor(){
        super()
        this.state={minute:0,second:0}
    }
    componentDidMount(){
        let timeSpan = 5*60;
        function lastTime() {
            timeSpan--;
            let minute = Math.floor(timeSpan / 60);
            timeSpan = timeSpan - minute * 60 ;
            let second = timeSpan;
            this.setState({minute,second});
            timeSpan+=minute * 60
        }
        setInterval(lastTime.bind(this),1000);
    }

    render(){
        let {total,sumNum,list}=this.props.location.state||{total:0,sumNum:0,list:[{url: 'http://m4.tuniucdn.com/filebroker/cdn/olb/9f/10/9f1094f3ea6fd1c71e7d199d36d55eea_w160_h90_c1_t0.jpg'}]};
        console.log(this.props.location.state);
        console.log(total, sumNum);
        let img1=require("../../images/zhifu.png")
        return(
            <div className="pay">
                <Header title="去结账"/>
                <div className="content3">
                    <div className="wrap">
                        <img src={list[0].url} alt=""/>
                        <span>支付剩余时间 {this.state.minute}:{this.state.second}</span>
                        <span>共计{total}元</span>
                    </div>
                    <div>
                        <img src={img1}/>

                    </div>

                </div>

                <Tab/>
            </div>
        )
    }
}