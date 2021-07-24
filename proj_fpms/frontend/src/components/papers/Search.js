import React, { Component, Fragment } from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { searchPapers }  from '../../actions/papers'
import { getProfile } from '../../actions/profiles'

export class Search extends Component {


    static propTypes ={
        papers : PropTypes.array.isRequired,
        user: PropTypes.object.isRequired,
        searchPapers: PropTypes.func.isRequired,
        getProfile: PropTypes.func.isRequired

      }

    state ={
        search:"", 
        result:false
    }

    onChange=(e)=>{
        this.setState({
        [e.target.name] : e.target.value
        })
    }

    
    getUser = (id) => {
        this.props.getProfile(id)
      }

    onSubmit = (e)=>{
        e.preventDefault();
        this.setState({
            result: true
        })
        this.props.searchPapers(this.state.search)
    }


    render() {
        return (
            <div className="container mt-4">
         <form onSubmit={this.onSubmit}>
          <h3 className="text-center">Paper Search</h3>
         <div className="input-group mx-auto" style={{maxWidth:'500px'}}>
            <input
              className="form-control"
              type="text"
              name="search"
              placeholder="Search for..."
              onChange={this.onChange}
              value={this.state.search}
            />
      
          <span className="input-group-btn ms-1" >
          <button type="submit" className="btn btn-primary">
              Search
            </button>
          </span>
          </div>
          </form>





                <Fragment>
                <table className="table table-striped table-hover mt-5">
                    <tbody>
                        {this.props.papers.map((paper)=>(
                            <tr key ={paper.id}>
                                <td>{paper.publication_date}</td>
                                <td><Link to={"/paper/" + paper.id} className ="">{paper.title}</Link></td>
                                <td><Link to={"/user/" + paper.author.id} onClick={() =>this.getUser(paper.author.id)} className ="">{paper.author.profile.full_name}</Link>, {paper.authors}</td>

                            </tr>
                        )) }  
                    </tbody>
                </table>
            </Fragment>

            </div>
        )
    }
}

const mapStateToProps = state =>({
    papers: state.papers.search_results,
    user : state.auth.user
})

export default connect(mapStateToProps,{searchPapers, getProfile})(Search);

