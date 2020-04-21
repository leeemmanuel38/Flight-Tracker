import React, { Component } from 'react'; 
import App from '../App.css';
import ContactBc from '../Photos/Contact.png';

function seacrchingFor(word){
    return function(search){
        return search.name.toLowerCase().includes(word.toLowerCase()) || search.code.toLowerCase().includes(word.toLowerCase());
    }
}

export default class Contact extends Component {
	  
	constructor(props){
        super(props);
        this.state = {
            items: [], 
            isLoaded: false,
            word: '', 
        }
        this.searchandler = this.searchandler.bind(this);
    }

    searchandler(event){
        this.setState({word: event.target.value})
    }

    render() {

        //jsx
        return (
            <div>
				<img src={ContactBc} width="50" height="50" alt=""/>
            	<h1>Contact Us!</h1>
				<p class="lead">
  				You may contact us via email. Here are our contact information.
				</p>
				<p><u>Lee Emmanuel: ealee@albany.edu</u></p>
				<p><u>Jane Hu: Jhu8@albany.edu</u></p>
				<p><u>Alandale Lauron: Alauron@albany.edu</u></p>
				<p><u>Jarret Mayo: Jjmayo@albany.edu</u></p>
				<p><u>Cheetah Louis: Clouis@albany.edu</u></p>
				<p><u>Htet Ye Min: HMin@albany.edu</u></p>
            </div>
        );
    }
}	