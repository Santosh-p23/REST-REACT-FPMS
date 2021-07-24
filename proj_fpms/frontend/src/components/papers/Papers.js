import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getPapers, deletePapers} from '../../actions/papers'
import { getProfile } from '../../actions/profiles'


export class Papers extends Component {
     static propTypes = {
         user: PropTypes.object.isRequired,
         papers : PropTypes.array.isRequired,
         getPapers : PropTypes.func.isRequired,
         deletePapers : PropTypes.func.isRequired,
         getProfile : PropTypes.func.isRequired
     }

     componentDidMount(){
        this.props.getPapers(this.props.id);
     }

     getUser = (id) => {
        this.props.getProfile(id)
      }


    render() {
        return (
            <Fragment>
                <h2 className="mt-3">Papers</h2>
                <div className="table-responsive">
                <table className="table table-striped table-hover table-sm">
                <thead>
                        <tr>
                            <th>Date</th>
                            <th>Papers</th>
                            <th>Authors</th>
                            {/* <th>Publishers</th>
                            <th>Class</th> */}
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.papers.map((paper)=>(
                            <tr key ={paper.id}>
                                <td>{paper.publication_date}</td>
                                <td><Link to={"/paper/" + paper.id} className ="">{paper.title}</Link></td>
                                <td><Link to={"/user/" + paper.author.id} onClick={() =>this.getUser(paper.author.id)} className ="">{paper.author.profile.full_name}</Link> and {paper.authors}</td>
                                {/* <td >{paper.publisher}</td>
                                <td>{paper.group}</td> */}
                                {(this.props.id == this.props.user.id)?
                                 (<td><button  className ="btn btn-danger btn-sm" onClick ={this.props.deletePapers.bind(this, paper.id)}>Delete</button></td>
                                 ):""}   
                            </tr>
                        )) }  
                    </tbody>
                    
                </table>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>({
    user: state.auth.user,
    papers: state.papers.papers
})

export default connect(mapStateToProps,{getPapers, deletePapers, getProfile})(Papers);

