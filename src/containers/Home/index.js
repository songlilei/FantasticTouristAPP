import React, {Component} from "react";
import {Link, Route} from "react-router-dom"
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import "./index.less"
import HomeSlider from "./HomeSlider/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';

class Home extends Component {
    componentDidMount() {
        console.log("props", this.props)
        this.props.fetchSliders();
    }

    render() {
        return (
            <div>
                <Header title="首页"/>
                <div className="main-content">
                    <HomeSlider sliders={this.props.sliders.list}/>
                    {/*<div className="main-loading"></div>*/}
                    <ul className="sub-nav clearfix">
                        <li><Link to={{pathname:"traffic",state:{msg:'机票'}}}>
                            <div className="icon-nav icon-sub1"></div>
                            <strong>机票</strong>
                        </Link></li>
                        <li><Link to={{pathname:"traffic",state:{msg:'酒店客栈'}}}>
                            <div className="icon-nav icon-sub2"></div>
                            <strong>酒店客栈</strong>
                        </Link></li>
                        <li><Link to={{pathname:"traffic",state:{msg:'火车票'}}}>
                            <div className="icon-nav icon-sub3"></div>
                            <strong>火车票</strong>
                        </Link></li>
                        <li><Link to={{pathname:"traffic",state:{msg:'汽车票'}}}>
                            <div className="icon-nav icon-sub4"></div>
                            <strong>汽车票</strong>
                        </Link></li>
                        <li><Link to={{pathname:"traffic",state:{msg:'用车'}}}>
                            <div className="icon-nav icon-sub5"></div>
                            <strong>用车</strong>
                        </Link></li>
                        <li><Link to={{pathname:"traffic",state:{msg:'旅游线路'}}}>
                            <div className="icon-nav icon-sub6"></div>
                            <strong>旅游线路</strong>
                        </Link></li>
                        <li><Link to={{pathname:"traffic",state:{msg:'周边游'}}}>
                            <div className="icon-nav icon-sub7"></div>
                            <strong>周边游</strong>
                        </Link></li>
                        <li><Link to={{pathname:"traffic",state:{msg:'门票'}}}>
                            <div className="icon-nav icon-sub8"></div>
                            <strong>门票</strong>
                        </Link></li>
                        <li><Link to={{pathname:"traffic",state:{msg:'领里程'}}}>
                            <div className="icon-nav icon-sub9"></div>
                            <strong>领里程</strong>
                        </Link></li>
                        <li><Link to={{pathname:"traffic",state:{msg:'全部'}}}>
                            <div className="icon-nav icon-sub10"></div>
                            <strong>全部</strong>
                        </Link></li>
                    </ul>
                    <section className="destinations">

                    </section>
                </div>
                <Tab/>
            </div>
        )
    }
}

export default connect(
    state => state.home,
    actions
)(Home);