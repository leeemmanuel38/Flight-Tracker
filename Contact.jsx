import React, { Component } from 'react'; 
import App from '../App.css';
import Contact from '../Photos/Contact.png';

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
            	<h1>Contact Us!</h1>
				<p class="lead">
  				You may contact us via email. Here are our contact information.
				</p>
				<p><u>Lee Emmanuel: Lemmanuel@albany.edu</u></p>
				<p><u>Jane Hu: Jhu8@albany.edu</u></p>
				<p><u>Alandale Lauron: Alauron@albany.edu</u></p>
				<p><u>Jarret Mayo: Jmayo@albany.edu</u></p>
				<p><u>Cheetah Louis: Clouis@albany.edu</u></p>
				<p><u>Htet Ye Min: HMin@albany.edu</u></p>
            </div>
        );
    }
}	