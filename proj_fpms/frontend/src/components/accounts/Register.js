import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {register} from "../../actions/auth"
import {createMessages} from '../../actions/messages'

export class Register extends Component {

    state={
        username:"",
        email:"",
        password:"",
        password2:"",
        registered: false
    }

    static propTypes ={
        register: PropTypes.func.isRequired,
        isAuthenticated:PropTypes.bool

    }

    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, password2, registered } = this.state;
        if (password !== password2) {
          this.props.createMessages({ passwordNotMatch: 'Passwords do not match' });
        } else {
          const newUser = {
            username,
            password,
            email
          };
          this.props.register(newUser);
          this.props.createMessages({ verifyEmail: 'Please verify your email.' });
          this.setState({
              registered: true
          })
        }
      };

    onChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })

    }

    render() {
        if(this.state.registered){
            return <Redirect to ="/login" />
        }
        const {username, email, password, password2} =this.state
        return (
            <div className ="col-md-6 m-auto">
                <div className ="card card body mt-5">
                    <div className="container">

                <h3 className="text-center mt-3">Sign Up</h3>
                <form onSubmit ={this.onSubmit}> 

                <div className="form-group mt-2">
                    <label>Username</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Username"
                    name ="username"
                    onChange ={this.onChange}
                    value= {username} />
                </div>

                
                <div className="form-group mt-2">
                    <label>Email</label>
                    <input type="email" 
                    className="form-control" 
                    placeholder="Email"
                    name="email"
                    onChange={this.onChange}
                    value={email} />
                </div>

                <div className="form-group mt-2">
                    <label>Password</label>
                    <input type="password"
                     className="form-control" 
                     placeholder="password"
                     name="password"
                     onChange={this.onChange}
                     value={password} />
                </div> 
                <div className="form-group mt-2">
                    <label>Confirm Password</label>
                    <input type="password"
                     className="form-control" 
                     placeholder="password"
                     name="password2"
                     onChange={this.onChange}
                     value={password2} />
                </div>


                <button type="submit" 
                    className="btn btn-primary btn-block mt-4">Submit</button>
                <p className="forgot-password text-right mt-3">
                    Already have an account <Link to="/login"> Sign In</Link>
                </p>
                </form>
                </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {register, createMessages} )(Register)