import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './index.less'
class Header extends Component {
    render() {
        return (
            <section className="header">
                <h1><img src={require("../../images/logo.png")} alt="HAO旅游"/>{this.props.title}</h1>
            </section>
        )
    }
}

export default withRouter(Header);