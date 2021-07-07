import React, { Component } from 'react'
import { Link , Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export class Profile extends Component {

    static propTypes ={
        user: PropTypes.object.isRequired

    }



    render() {
        return (
    <div className ="container" >
        <div className="content-section">
            <div className='media'>
                <img className ="rounded-circle account-img" src ={this.props.user.profile.image} />
                 <div className ='media-body'>
                    <h2 className ="account-heading">{this.props.user.profile.full_name}</h2>
                    <p className ="text-secondary">{this.props.user.profile.about_me}</p>
                    <p className ="text-secondary">{this.props.user.profile.institute}</p>
                    <p className ="text-secondary">{this.props.user.profile.address}</p>
                   

                </div>
           </div>        
        </div>
    </div>
        )
    }
}
const mapStateToProps = state =>({
    user: state.auth.user
  })
  
  
  export default connect(mapStateToProps,{})(Profile)