import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { addPapers } from '../../actions/papers';

export class PaperForm extends Component {
    
    static propTypes ={
        addPapers: PropTypes.func.isRequired
    }

    state ={
        title:'',
        publisher:'',
        volume:'',
        peer_reviewed:'',
        issn:'',
        issue:'',
        pages:'',
        paper_link:'',
        publication_date:"",
        status:'',
        group:'',
        description:'' 
    }


    onChange= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit =(e)=>{
        e.preventDefault();
        const{ title, publisher, volume, peer_reviewed, issn, issue, pages,paper_link,publication_date  ,status, group, description } = this.state
        const paper = { title, publisher, volume, peer_reviewed, issn, issue, pages,paper_link,publication_date  ,status, group, description }
        this.props.addPapers(paper)
        console.log(paper)
        this.setState({
          title:'',
          publisher:'',
          volume:'',
          peer_reviewed:'',
          issn:'',
          issue:'',
          pages:'',
          paper_link:'',
          publication_date:'',
          description:'' 
        })
    }
    
    render() {
        const{ title, publisher, volume, peer_reviewed, issn, issue, pages,paper_link,publication_date ,status,group, description } = this.state
        return (
            <div className="card card-body mt-4 mb-4">
        <h2>Add Papers</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>

          <div className="form-group">
            <label>Publisher</label>
            <input
              className="form-control"
              type="text"
              name="publisher"
              onChange={this.onChange}
              value={publisher}
            />
          </div>

          <div className="form-group">
            <label>Volume</label>
            <input
              className="form-control"
              type="text"
              name="volume"
              onChange={this.onChange}
              value={volume}
            />
          </div>

          <div className="form-group">
            <label>Peer Reviewed</label>
            <input
              className="form-control"
              type="text"
              name="peer_reviewed"
              onChange={this.onChange}
              value={peer_reviewed}
            />
          </div>

          <div className="form-group">
            <label>ISSN</label>
            <input
              className="form-control"
              type="text"
              name="issn"
              onChange={this.onChange}
              value={issn}
            />
          </div>
        
         <div className="form-group">
            <label>Issue</label>
            <input
              className="form-control"
              type="text"
              name="issue"
              onChange={this.onChange}
              value={issue}
            />
          </div>
          
          <div className="form-group">
            <label>Pages</label>
            <input
              className="form-control"
              type="text"
              name="pages"
              onChange={this.onChange}
              value={pages}
            />
          </div>

          <div className="form-group">
            <label>Paper's Link</label>
            <input
              className="form-control"
              type="text"
              name="paper_link"
              onChange={this.onChange}
              value={paper_link}
            />
          </div>

         <div className="form-group">
            <label>Publication Date</label>
            <input
              className="form-control"
              type="date"
              name="publication_date"
              onChange={this.onChange}
              value={publication_date}
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select className="form-control"
                    onChange={this.onChange}
                    name ="status">
            <option value ="">---</option>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
            </select>
            </div>
            
            <div className="form-group">
            <label>Group</label>
            <select className="form-control"
                    onChange={this.onChange}
                    name ="group">
            <option value ="">---</option>
            <option value="journal">Journal</option>
            <option value="publication">Publication</option>
            <option value="report">Report</option>
            <option value="conference_article">Conference Article</option>
            <option value="book">Book</option>
            <option value="misc_paper">Miscellaneous Papers</option>
            </select>
            </div>

          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
        )
    }
}

export default connect(null,{ addPapers })(PaperForm)
