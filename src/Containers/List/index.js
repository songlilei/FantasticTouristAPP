import React,{Component} from 'react';
import "./index.less"
import {Link} from 'react-router-dom';
import Header from "../../components/Header/index";
import Tab from "../../components/Tab/index";
import {connect} from "react-redux"
import actions from "../../store/actions/list";
import {upLoadMore, downRefresh} from '../../utils';
import Loading from "../../components/Loading/index";
class List extends Component{
    componentDidMount(){
        this.props.getList();
        upLoadMore(this.content, this.props.fetchDestinations);
        downRefresh(this.content, this.props.refreshDestinations);
    }
    render(){
        return (
            <div className="LN_list" >
                <Header title="境内游"/>
                    <div className="list-content" ref={content => this.content = content} >
                        {
                            this.props.listLesson.list.map((item,index)=>(
                                <Link key={item.id} to={{pathname: `/detail/${item.id}`, state: item}}>
                                    <img src={item.url}/>
                                    <div className="list_left">
                                        <h4>{item.title}</h4>
                                        <p className="list_intro">{item.intro}</p>
                                        <div className="list_price">
                                            <p>{item.sell}</p>
                                            <p><span>¥<em>{item.price.man}</em></span>起</p>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                        <div className="upload">
                            {
                                this.props.listLesson.isLoading ? <Loading/> : (this.props.listLesson.hasMore ?
                                    <button onClick={this.props.fetchDestinations}>继续加载</button> : "")

                            }
                        </div>
                    </div>
                <Tab/>
            </div>
        )
    }
}
export default connect(state=>state.list,actions)(List)
