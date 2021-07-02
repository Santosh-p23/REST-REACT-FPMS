import React, { Component } from 'react'
import PaperForm from './PaperForm'
import Papers from './Papers'


export class DashBoard extends Component {
    render() {
        return (
            <div>
                <PaperForm />
                <Papers /> 
                
            </div>
        )
    }
}

export default DashBoard
