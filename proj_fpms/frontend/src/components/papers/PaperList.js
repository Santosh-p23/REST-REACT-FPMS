import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';



export class PaperList extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        papers: PropTypes.array.isRequired,
    }

    //  componentDidMount(){
    //     this.props.getPapers(this.props.user.id);
    //  }


    state = {
        group: '',
        level: '',
        impact_factor: '',
        format: ''

    }


    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    handleClick = () => {
        print()
    }

    exportToCSV = (csvData, fileName) => {
        const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        const fileExtension = '.xlsx'
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }





    render() {
        const { group, level, impact_factor, format } = this.state

        let displayPapers = this.props.papers
        if (group !== "") { displayPapers = displayPapers.filter(paper => paper.group == group) }
        if (level !== "") { displayPapers = displayPapers.filter(paper => paper.level == level) }
        if (impact_factor == "impact_factor" && group == "journal") { displayPapers = displayPapers.filter(paper => paper.impact_factor_journal != null).sort((a, b) => (a.impact_factor_journal < b.impact_factor_journal ? 1 : -1)) }
        if (impact_factor == "SJR" && group == "journal") { displayPapers = displayPapers.filter(paper => paper.SJR_rating != null).sort((a, b) => (a.SJR_rating < b.SJR_rating ? 1 : -1)) }

        const author = this.props.user.profile.full_name.split(" ").reverse().join(", ")
        const papers = displayPapers.map((paper) => {
            paper.author = this.props.user.profile.full_name
            paper.authors = this.props.user.profile.full_name + " and " + paper.authors
            return paper
        })

        return (
            <Fragment>

                <h4 className="mt-3">Publications & Appearances</h4>
                <div className="text-right" style={{ textAlign: "right" }}>
                    <button className="btn btn-danger ms-auto mx-2 d-print-none" onClick={this.handleClick}>
                        <i className="far fa-file-pdf"></i>
                    </button>

                    <button className="btn btn-success ms-auto d-print-none mx-2" onClick={(e) => this.exportToCSV(papers, this.props.user.username)}>
                        <i className="far fa-file-excel"></i>
                    </button>
                </div>


                <div className="form d-print-none">
                    <div className="row">
                        <div className="col-md-3">
                            <label>Group</label>
                            <select className="form-select"
                                onChange={this.onChange}
                                name="group"
                                value={group}>
                                <option value=''>---</option>
                                <option value="journal">Journal</option>
                                <option value="publication">Publication</option>
                                <option value="report">Report</option>
                                <option value="conference_article">Conference Article</option>
                                <option value="book">Book</option>
                                <option value="misc_paper">Miscellaneous Papers</option>
                            </select>
                        </div>

                        <div className="col-md-3">
                            <label>Level</label>
                            <select className="form-select"
                                onChange={this.onChange}
                                name="level"
                                value={level}>
                                <option value=''>---</option>
                                <option value="national">National</option>
                                <option value="international">International</option>
                            </select>
                        </div>

                        {(this.state.group == "journal") ?
                            <div className="col-md-3">
                                <label>Journal Ranking</label>
                                <select className="form-select"
                                    onChange={this.onChange}
                                    name="impact_factor"
                                    value={impact_factor}>
                                    <option value=''>---</option>
                                    <option value="SJR">SJR</option>
                                    <option value="impact_factor">Impact Factor</option>
                                </select>
                            </div> : ''}

                        <div className="col-md-3">
                            <label>Format</label>
                            <select className="form-select"
                                onChange={this.onChange}
                                name="format"
                                value={format}>
                                <option value=''>---</option>
                                <option value="MLA">MLA</option>
                                <option value="APA">APA</option>
                            </select>
                        </div>


                    </div>
                </div>


                <p className="fw-light my-3">{this.props.user.profile.full_name}</p>

                <div className="table-responsive">
                    <table className="table table-borderless">
                        <tbody>
                            {displayPapers.map((paper) => (
                                <tr key={paper.id}>
                                    <td>
                                        {author}{(paper.authors !== "") ? ((paper.authors.split("and").length < 3) ? " and " + paper.authors : ", et al.") : ""}{" "}
                                        "{paper.title}."{" "} <span className="fst-italic">{(paper.conference_name) ? paper.conference_name + "." : ""}</span>{" "}
                                        <span className="fst-italic">{(paper.journal) ? paper.journal + "." : ""}</span>{" "}
                                        {paper.publisher}{", "}{paper.location}{" "}{paper.publication_date.split("-")[0]}
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>

            </Fragment>
        )

    }
}

const mapStateToProps = state => ({
    user: state.auth.user,
    papers: state.papers.papers
})

export default connect(mapStateToProps, {})(PaperList);