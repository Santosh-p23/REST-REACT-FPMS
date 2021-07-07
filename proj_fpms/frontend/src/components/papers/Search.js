import React, { Component, Fragment } from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { searchPapers }  from '../../actions/papers'

export class Search extends Component {


    static propTypes ={
        papers : PropTypes.array.isRequired,
        user: PropTypes.object.isRequired,
        searchPapers: PropTypes.func.isRequired

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

    onSubmit = (e)=>{
        e.preventDefault();
        this.setState({
            result: true
        })
        this.props.searchPapers(this.state.search)
    }


    render() {
        return (
            <div>
         <form onSubmit={this.onSubmit}>
         <div className="form-group">
            <label>What do you seek ?</label>
            <input
              className="form-control"
              type="text"
              name="search"
              onChange={this.onChange}
              value={this.state.search}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          </form>


            {(this.state.result)?(
                <Fragment>
                <h2>Papers</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Papers</th>
                            <th>Issue</th>
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.papers.map((paper)=>(
                            <tr key ={paper.id}>
                                <td>{paper.id}</td>
                                <td>{paper.title}</td>
                                <td>{paper.issue}</td>
                                {(this.props.id == this.props.user.id)?
                                (<td><button  className ="btn btn-danger btn-sm" onClick ={this.props.deletePapers.bind(this, paper.id)}>Delete</button></td>
                                ):""}
                            </tr>
                        )) }  
                    </tbody>
                </table>
            </Fragment>
            ):"If into the records you go, only papers will you find."}

            </div>
        )
    }
}

const mapStateToProps = state =>({
    papers: state.papers.papers,
    user : state.auth.user
})

export default connect(mapStateToProps,{searchPapers})(Search);

