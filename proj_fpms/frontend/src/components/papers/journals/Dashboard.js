import React, { Component } from 'react'
import JournalForm from './JournalForm'
import Journals from './Journals'


export class Dashboard extends Component {
    render() {
        return (
            <div>
                <JournalForm />
                <Journals />
                
            </div>
        )
    }
}

export default Dashboard
