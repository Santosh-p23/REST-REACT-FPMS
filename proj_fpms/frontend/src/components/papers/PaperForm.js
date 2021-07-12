import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { addPapers } from '../../actions/papers';

export class PaperForm extends Component {
    
    static propTypes ={
        addPapers: PropTypes.func.isRequired,

      }

    state ={
      title:'',
      description:'', 
      group:'',
      paper_link:'',
      publisher:'',
      publication_date:"",
      status:'',
      
      volume:'',
      peer_reviewed:'',
      issn:'',
      issue:'',
      pages:'',

      DOI:'',

      edition:'',
      isbn:'',

      chapters:'',
      authors:'',

      conference_name:'',
      location:'',
      organised_date: null


    }


    onChange= (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit =(e)=>{
        e.preventDefault();
        const{ title, publisher, volume, peer_reviewed, issn, issue, pages,paper_link,publication_date  ,status, group, description , DOI, edition, isbn, chapters, authors, conference_name, location, organised_date} = this.state
        const paper = { title, publisher, volume, peer_reviewed, issn, issue, pages,paper_link,publication_date  ,status, group, description , DOI, edition, isbn, chapters, authors, conference_name, location, organised_date}
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
          description:'',
          DOI:'',

          edition:'',
          isbn:'',
  
          chapters:'',
          authors:'',
  
          conference_name:'',
          location:'',
          organised_date:null
        })
    }
    
    render() {
        const{ title, publisher, volume, peer_reviewed, issn, issue, pages,paper_link,publication_date ,status,group, description , DOI, edition, isbn, chapters, authors, conference_name, location, organised_date} = this.state
        return (
            <div className="card card-body mt-4 mb-4">
    
        <h2>Add Papers</h2>
        <form onSubmit={this.onSubmit}>

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
            <label>Co-Authors</label>
            <input
              className="form-control"
              type="text"
              name="authors"
              onChange={this.onChange}
              value={authors}
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
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              onChange={this.onChange}
              value={description}
            />
          </div>

          { (group=="journal" || group =="book") ? (
          <div className="form-group">
            <label>Volume</label>
            <input
              className="form-control"
              type="text"
              name="volume"
              onChange={this.onChange}
              value={volume}
            />
          </div>):""}

          { (group=="journal" || group =="conference_article") ? (
            <><div className="form-group">
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
          </div> </>):""}


          {(group=="book"|| group=="publication")?(
           <div className="form-group">
           <label>DOI</label>
           <input
             className="form-control"
             type="text"
             name="DOI"
             onChange={this.onChange}
             value={DOI}
           />
           </div>):""}

           {(group=="journal")?(  <> 
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
            <label>Peer Reviewed</label>
            <input
              className="form-control"
              type="text"
              name="peer_reviewed"
              onChange={this.onChange}
              value={peer_reviewed}
            />
          </div></>):""
    }

    {(group=="book")?( <>
       <div className="form-group">
            <label>Edition</label>
            <input
              className="form-control"
              type="text"
              name="edition"
              onChange={this.onChange}
              value={edition}
            />
          </div>
           <div className="form-group">
            <label>ISBN</label>
            <input
              className="form-control"
              type="text"
              name="isbn"
              onChange={this.onChange}
              value={isbn}
            />
          </div>
           <div className="form-group">
            <label>Chapters</label>
            <input
              className="form-control"
              type="text"
              name="chapters"
              onChange={this.onChange}
              value={chapters}
            />
          </div>
          
          </>):""
    }

    {(group=="conference_article")?(
    <>

      <div className="form-group">
            <label>Conference Name</label>
            <input
              className="form-control"
              type="text"
              name="conference_name"
              onChange={this.onChange}
              value={conference_name}
            />
          </div>

      <div className="form-group">
            <label>Conference Organised On</label>
            <input
              className="form-control"
             type="date"
              name="organised_date"
              onChange={this.onChange}
              value={organised_date}
            />
          </div>

          <div className="form-group">
            <label>Conference Location</label>
            <input
              className="form-control"
              type="text"
              name="location"
              onChange={this.onChange}
              value={location}
            />
          </div>


         
    
    </>):""}

      

          
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
