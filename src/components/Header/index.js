import React, {Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import Home from "../../containers/Home/index"
import './index.less'
class Header extends Component {
    render() {
        return (
            <section className="header">
                <h1>
                    <Link to="/" component={Home}>
                        <img src={require("../../images/logo.png")} alt="HAO旅游"/>{this.props.title}
                    </Link>
                   </h1>
            </section>
        )
    }
}

export default withRouter(Header);