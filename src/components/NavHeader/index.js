import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './index.less'
class NavHeader extends Component {
  render() {
    return (
      <div className="nav-header" >
        {this.props.title}
          <i className="iconfont icon-fanhui" onClick={()=>this.props.history.goBack()}></i>
      </div>
    )
  }
}

export default withRouter(NavHeader);




// 9-》