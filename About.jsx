import React, { Component } from 'react';
import Toggle from './Toggle'; 
import App from '../App.css';

function seacrchingFor(word){
    return function(search){
        return search.name.toLowerCase().includes(word.toLowerCase()) || search.code.toLowerCase().includes(word.toLowerCase());
    }
}

export default class About extends Component {

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

    componentDidMount(){
        fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true, 
                    items: json,  
            })
        });
    }
    render() {

        var { isLoaded, items } = this.state; 
        if(!isLoaded){
            return <div class="text-center"><h3>Loading...</h3></div>
        }

        else {
            const {word, items} = this.state; 
            return(
                <div class="ui centered aligned grid">
                    <div class="wrap"> 
                        <form class="form-group text-center">
                         
                                <input type="text"
                                    onChange={this.searchandler} 
                                    value={word}
                                />
                            
                        </form>
                        <ul class="text-left">
                            {
                                items.filter(seacrchingFor(word)).map(data => 
                                    <div>
                          
                                    <li>
                                    <br/>
                                    <br/>
                                        <span class="d-block p-2 bg-white text-black">
                                            <div class="container">
                                                <div class="row"> 
                                                    <div class="form-group col-md-3">
                                                        <h6>Airport: {data.name}</h6>
                                                    </div>
                                                    <div class="form-group col-md-3">
                                                        <h6>City: {data.city}</h6>
                                                    </div>
                                                    <div class="form-group col-md-3">
                                                        <h6>Country: {data.country}</h6>
                                                    </div>
                                                    <div class="form-group col-md-3">
                                                    <small><small><Toggle text="Flight Added!" /></small></small>
                                                    </div>
                            
                                                </div> 
                                            </div>
                                        </span>
                                        
                                    </li>
                                </div>
   
                            )};

                           
                        </ul>
                    </div>
    
                </div>
            );
            
        }
    }

}