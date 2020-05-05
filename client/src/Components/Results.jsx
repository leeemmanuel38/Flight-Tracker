import React, { Component } from 'react';
import Toggle from './Toggle'; 
import Drawer from './ResultsDrawer';
import '../App.css';

function seacrchingFor(word){
    return function(search){
        return search.name.toLowerCase().includes(word.toLowerCase()) || search.code.toLowerCase().includes(word.toLowerCase());
    }
}

export default class Results extends Component {

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

        var { isLoaded, } = this.state; 
        if(!isLoaded){
            return <div class="text-center"><h3>Loading...</h3></div>
        }

        else {
            const {word, items} = this.state; 
            return(
                <div class="ui centered aligned grid">
                    <Drawer/>
                    <div class="wrap"> 
                        <h1 class="text-right">Available Flights (WIP)</h1>
                        <form class="form-group text-center">
                         
                            <input type="text"
                                onChange={this.searchandler} 
                                value={word}
                            />
                            
                        </form>
                        <ul>
                            {items.filter(seacrchingFor(word)).map(data => 
                                    <div className="resultForms">
                                        <li>
                                            <span class="d-block p-2">
                                                <div class="container">
                                                    <div class="row"> 
                                                        <div class="form-group col-sm-3">
                                                            <h6>Airport: {data.name}</h6>
                                                        </div>
                                                        <div class="form-group col-sm-3">
                                                            <h6>City: {data.city}</h6>
                                                        </div>
                                                        <div class="form-group col-sm-3">
                                                            <h6>Country: {data.country}</h6>
                                                        </div>
                                                        <div class="form-group col-sm-3">
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