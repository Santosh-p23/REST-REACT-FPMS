import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types'



export class PaperList extends Component {
     static propTypes = {
         user: PropTypes.object.isRequired,
         papers : PropTypes.array.isRequired,
     }

    //  componentDidMount(){
    //     this.props.getPapers(this.props.user.id);
    //  }


    render() {
        const author= this.props.user.profile.full_name.split(" ").reverse().join(", ")
         

        return (
            <Fragment>

                <h4 className="mt-3">Publications & Appearances</h4>
                <p class="fw-light">{this.props.user.profile.full_name}</p>
                <div className="table-responsive">
                <table className="table table-sm">
                    <tbody>
                        {this.props.papers.map((paper)=>(
                            <tr key ={paper.id}>
                                <td>
                                {author}{(paper.authors.split("and").length<3)?" and " + paper.authors:", et al."}{" "}
                                "{paper.title}."{" "} <span className="fst-italic">{(paper.conference_name)? paper.conference_name+".":""}</span>{" "}
                                {paper.publisher}{", "}{paper.location}{" "}{paper.publication_date.split("-")[0]}
                                </td>
                                
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

export default connect(mapStateToProps,{})(PaperList);