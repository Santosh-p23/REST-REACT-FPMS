import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { addJournals } from '../../../actions/journals';

export class JournalForm extends Component {
    
    static propTypes ={
        addJournals: PropTypes.func.isRequired
    }

    state ={
        title:'',
        publisher:'',
        volume:'',
        peer_reviewed:'',
        issn:'',
        issue:'',
        pages:'',
        journal_link:'',
        publication_date:''  ,
        status:'',
        description:'' 
    }


    onChange= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit =(e)=>{
        e.preventDefault();
        const{ title, publisher, volume, peer_reviewed, issn, issue, pages,journal_link,publication_date  ,status } = this.state
        
        this.props.addJournals(title, publisher, volume, peer_reviewed, issn, issue, pages,journal_link,publication_date ,status )
        this.setState({
          title:'',
          publisher:'',
          volume:'',
          peer_reviewed:'',
          issn:'',
          issue:'',
          pages:'',
          journal_link:'',
          publication_date:''  ,
          status:'',
          description:'' 
        })
    }
    
    render() {
        const{ title, publisher, volume, peer_reviewed, issn, issue, pages,journal_link,publication_date  ,description } = this.state
        return (
            <div className="card card-body mt-4 mb-4">
        <h2>Add Journal</h2>
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
            <label>Journal Link</label>
            <input
              className="form-control"
              type="text"
              name="journal_link"
              onChange={this.onChange}
              value={journal_link}
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
            <option value="Draft ">Draft</option>
            <option value="Published">Published</option>
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

export default connect(null,{ addJournals })(JournalForm)
