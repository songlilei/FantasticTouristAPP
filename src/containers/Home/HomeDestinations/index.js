import React, {Component} from "react";
import "./index.less";
import Loading from "../../../components/Loading/index";
import {Link} from 'react-router-dom';
import LoadMore from "../LoadMore/index";
import NoMore from "../NoMore/index";

export default class HomeDestinations extends Component {

    render() {
        return (
            <div>
                <section className="destinations">
                    <h3><span className="vertical">|</span>热门目的地</h3>
                    <section className="list">
                        {
                            this.props.destinations.map((item, index) => (
                                <Link key={item.id} to={{pathname: `/detail/${item.id}`, state: item}}>
                                    <img ref={img => this.img = img} onLoad={(e) => e.target.src=item.url}  src={require("../../../images/load.png")}/>
                                    <div className="list-introduction">
                                        <h6><span>景点</span>{item.title}</h6>
                                        <p className="list-infor">{item.intro}</p>
                                        <div className="sold-price">
                                            <p className="sold">{item.sell}</p>
                                            <p className="price"><span>¥<em>{item.price.man}</em></span>起</p>
                                        </div>
                                    </div>
                                </Link>

                            ))
                        }
                        {
                            this.props.loading ? <Loading/> : (this.props.hasMore ?
                                <LoadMore fetchMoreDestinations={this.props.fetchDestinations}/> : <NoMore/>)

                        }
                    </section>
                </section>
            </div>
        )
    }
}