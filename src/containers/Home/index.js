
import React, {Component} from "react";
import Tab from "../../components/Tab/index";
import "./index.less"
import HomeSlider from "./HomeSlider/index";
import {connect} from 'react-redux';
import actions from '../../store/actions/home';
import HomeDestinations from "./HomeDestinations/index";
import HomeSubNav from "./HomeSubNav/index";
import {upLoadMore, downRefresh} from '../../utils';
import HomeHeader from "./HomeHeader/index";

class Home extends Component {
    constructor(){
        super();
        this.state={
            ok:false
        }
    }
    componentDidMount() {
        this.setState({ok:true});
        this.props.fetchSliders();
        this.props.fetchDestinations();
        upLoadMore(this.content, this.props.fetchDestinations);
        downRefresh(this.content, this.props.refreshDestinations);
<<<<<<< HEAD
=======

>>>>>>> gyj
    }
    render() {
        let homeContent = (
            <div>
                <HomeSlider sliders={this.props.sliders.list}/>
                <HomeSubNav/>
                <HomeDestinations hasMore={this.props.destinations.hasMore}
                                  loading={this.props.destinations.loading}
                                  fetchDestinations={this.props.fetchDestinations}
                                  destinations={this.props.destinations.list}/>
            </div>
        )
        return (
            <div>
                <HomeHeader txt={this.props.txt}
                            searchTxt={this.props.searchTxt}/>
                <div ref={content => this.content = content} className="main-content">
                    <div className="main-loading">下拉刷新啦~</div>
                    {
                        this.state.ok?homeContent:<div className="home-loading"></div>
                    }

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
