import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getPapers, deletePapers } from '../../actions/papers'


export class Papers extends Component {
     static propTypes = {
         user: PropTypes.object.isRequired,
         papers : PropTypes.array.isRequired,
         getPapers : PropTypes.func.isRequired,
         deletePapers : PropTypes.func.isRequired
     }

     componentDidMount(){
         this.props.getPapers(this.props.id);
     }


    render() {
        return (
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
        )
    }
}

const mapStateToProps = state =>({
    user: state.auth.user,
    papers: state.papers.papers
})

export default connect(mapStateToProps,{getPapers, deletePapers})(Papers);
