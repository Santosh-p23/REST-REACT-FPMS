import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import Papers from './Papers'
import Profile from '../accounts/Profile.js'

export class DetailUser extends Component {

    static propTypes ={
        user: PropTypes.object.isRequired,

    }

    render() {
        return (
            <div>
                This aint working and I dont know why
                {/* <Profile user= { this.props.user } /> */}
                <Papers id= {this.props.user.id} />
                
            </div>
        )
    }


}


const mapStateToProps = state =>({
    user: state.profiles.profile,
    // _user:state.auth.user
  })
  
  
export default connect(mapStateToProps,{})(DetailUser)


