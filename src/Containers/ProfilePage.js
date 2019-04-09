import React, {Component} from 'react';
import NavBar from '../Components/NavBar'
import { connect } from 'react-redux'


class ProfilePage extends Component {

  render() {
    return (
      <div>
      <NavBar />
      <div className="ui card">
            <img src='//texasbarblog.lexblogplatformtwo.com/files/2011/12/housto-bankruptcy-attorney-adam-schachter1.jpg'/>
            <h1>{this.props.name}</h1>
            <h3>{this.props.email}</h3>
        </div>
        </div>
      );
    }
}
const mapStateToProps = state =>({
  name: state.user.name,
  email: state.user.email,
  proimage: state.user.profile_picture
})

export default connect(mapStateToProps)(ProfilePage);
