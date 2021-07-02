import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { getJournals, deleteJournals } from '../../../actions/journals'


export class Journals extends Component {
     static propTypes = {
         journals : PropTypes.array.isRequired,
         getJournals : PropTypes.func.isRequired,
         deleteJournals : PropTypes.func.isRequired
     }

     componentDidMount(){
         this.props.getJournals();
     }


    render() {
        return (
            <Fragment>
                <h2>Journals</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Journals</th>
                            <th>Issue</th>
                        <th />
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.journals.map((journal)=>(
                            <tr key ={journal.id}>
                                <td>{journal.id}</td>
                                <td>{journal.title}</td>
                                <td>{journal.issue}</td>
                                <td><button  className ="btn btn-danger btn-sm" onClick ={this.props.deleteJournals.bind(this, journal.id)}>Delete</button></td>
                            </tr>
                        )) }  
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>({
    journals: state.journals.journals
})

export default connect(mapStateToProps,{getJournals, deleteJournals})(Journals);
