<<<<<<< HEAD

import React,{Component} from "react";
=======
import React, {Component} from "react";
>>>>>>> de0c9ba413ab55a9f586f70cd6507bac2d648159
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import "./index.less"
import HomeSlider from "./HomeSlider/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import HomeDestinations from "./HomeDestinations/index";
import HomeSubNav from "./HomeSubNav/index";
import {upLoadMore, downRefresh} from '../../utils';

<<<<<<< HEAD
export default class Home extends Component {
=======
class Home extends Component {
    componentDidMount() {
        this.props.fetchSliders();
        this.props.fetchDestinations();
        upLoadMore(this.content, this.props.fetchDestinations);
        downRefresh(this.content, this.props.refreshDestinations);
    }

>>>>>>> de0c9ba413ab55a9f586f70cd6507bac2d648159
    render() {
        return (
            <div>
                <Header title="首页"/>
                <div ref={content => this.content = content} className="main-content">
                    <HomeSlider sliders={this.props.sliders.list}/>
                    {/*<div className="main-loading"></div>*/}
                    <HomeSubNav/>
                    <HomeDestinations hasMore={this.props.destinations.hasMore}
                                      loading={this.props.destinations.loading}
                                      fetchDestinations={this.props.fetchDestinations}
                                      destinations={this.props.destinations.list}/>
                </div>
                <Tab/>
            </div>
        )
    }
}
<<<<<<< HEAD
=======

export default connect(
    state => state.home,
    actions
)(Home);
>>>>>>> de0c9ba413ab55a9f586f70cd6507bac2d648159
