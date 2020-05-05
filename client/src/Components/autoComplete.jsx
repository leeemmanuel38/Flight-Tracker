/*
# Author(s): Emmanuel Lee
# Date: May 5, 2020
# Flight Tracker Application 
# team 3
*/

import React from 'react'; 
import '../autoComplete.css';

export default class autoComplete extends React.Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            suggestions: [], // list of possible values 
            text: '', 
        };
    }

    // update form on user input 
    onTextChange = (e) => {
        const {items} = this.props;
        const value = e.target.value; 
        let suggestions = []; 
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i'); 
            suggestions = items.sort().filter(v => regex.test(v)); 
        }
        this.setState(() => ({suggestions, text: value }));
        
    }

    // update value of text and suggested contents 
    suggestionSelected (value) {
        this.setState(() => ({
            text: value, 
            suggestions: [], 
        }))
    }

    // display suggestions if match
    renderSuggestions () {
        const {suggestions} = this.state; 
        if (suggestions.length === 0) {
            return null; 
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick = {() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }
    
    render() {
        const {text} = this.state; 
        return (

            <div className ="autoComplete text-center">
                <input value={text} onChange={this.onTextChange} type="text" class="form-control form-control-lg" placeholder="Search Airport"></input>
                <ul>
                    {this.renderSuggestions()}
                </ul>
            </div>
        ); 
    }

}