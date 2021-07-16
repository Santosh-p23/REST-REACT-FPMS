import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import { getPaper } from '../../actions/papers'
export class DetailPaper extends Component {

    static propTypes = {
        user: PropTypes.object.isRequired,
        paper : PropTypes.object.isRequired,
        getPaper : PropTypes.func.isRequired,
    } 
    

    componentDidMount(){
        this.props.getPaper(this.props.match.params.id)
       
    }

    render() {
        return (
           
                <div className="jumbotron">
                <h3 className="display-4">{this.props.paper.title}</h3>
                <hr className="my-4" />
               
                {/* {
            Object.keys(this.props.paper).map((key, i) => {
                (this.props.paper[key] !=null || this.props.paper[key] !="" )?(
             <p key={i}>
             <span>Key Name: {key}</span>
             <span>Value: {this.props.paper[key]}</span>
             </p>):""
            })
            } */}
             <div className="card card-body mt-4 mb-4"> 
            <p>Authors: {this.props.author + 'and' + this.props.paper.authors}</p><br />
            <p>Publication Date:{' ' + this.props.paper.publication_date}</p><br/>
            <p>Publisher:{' ' + this.props.paper.publisher}</p>
            {(this.props.paper.conference)?<p><br />Conference:{' ' +this.props.paper.conference_name + ", " +this.props.paper.location }</p>:""}
            {(this.props.paper.description)?<p><br />Description:{' '+this.props.paper.description}</p>:""}
            {(this.props.paper.volume)?<p><br />Volume:{' '+this.props.paper.volume}</p>:""}
            {(this.props.paper.pages)?<p><br />Pages:{' '+this.props.paper.pages}</p>:""}
            {(this.props.paper.issue)?<p><br />Issue:{' '+this.props.paper.issue}</p>:""}
            {(this.props.paper.issn)?<p><br />ISSN:{' '+this.props.paper.issn}</p>:""}
            {(this.props.paper.isbn)?<p><br />ISSN:{' '+ this.props.paper.ibsn}</p>:""}
            {(this.props.paper.edition)?<p><br />Edition:{' '+this.props.paper.edition}</p>:""}
            {(this.props.paper.chapters)?<p><br />Chapters:{' '+this.props.paper.chapters}</p>:""}
            {(this.props.paper.DOI)?<p ><br />DOI:{' '+ this.props.paper.DOI}</p>:""}
            {(this.props.paper.peer_reviewed)?<p><br />Peer Reviewed:{' '+this.props.paper.peer_reviewed}</p>:""}
            <p><a href ={this.props.paper.paper_link}>{this.props.paper.paper_link}</a></p> <br/>
             </div>
            
            




              
            </div>
            
        )
    }
}

const mapStateToProps = state =>({
    user: state.auth.user,
    paper: state.papers.paper
})

export default connect(mapStateToProps,{getPaper})(DetailPaper);
