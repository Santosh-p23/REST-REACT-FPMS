import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        return (

        <div className="content-section">
            <div className='media mt-2'>
                <img className ="rounded-circle account-img" src ={this.props.user.profile.image} />
                 <div className ='media-body'>
                    <h3 className ="account-heading">{this.props.user.profile.full_name}</h3>
                    <h5 className ="text-secondary">{this.props.user.profile.about_me}</h5>
                    <h5 className ="text-secondary">{this.props.user.profile.institute}</h5>
                    <h5 className ="text-secondary">{this.props.user.profile.address}</h5>
                   

                </div>
           </div>        
        </div>
        )
    }
} 
  export default Profile