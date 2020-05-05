/*
# Author(s): Emmanuel Lee
# Code from Ninad Chaudhari, modified by Emmanuel Lee
# Date: May 5, 2020
# Flight Tracker Application 
# team 3
*/

import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';  
import Toggle from './Toggle'; 


export default class TestAPI extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            flights : []
        }
    }
    getFlights(){
        fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2020-05-10?inboundpartialdate=2020-12-01", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "478af2f430msha89844640dcceeep1514b0jsnd85b35001d5f"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data); 
            
            this.setState((prevState, props) => ({
                flights : [...prevState.flights, data]
            }))
        })
        .catch(err => {
            console.log(err);
        });
    }

    addFligts(){
        fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsedates/v1.0/US/USD/en-US/SFO-sky/LAX-sky/2020-05-10?inboundpartialdate=2020-12-01", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "478af2f430msha89844640dcceeep1514b0jsnd85b35001d5f"
            }
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
                this.getFlights(data)
        })
        .catch(err => {
            console.log(err);
        });  


    }
    componentDidMount(){
        this.getFlights();
    }

    render(){
        return(
            <div>
                {this.state.flights.map(items =>{
                    return(
                        <div>
                            <form class="address">
                                <h6>{items.Places[0].Name}  -------------->  {items.Places[1].Name}</h6>
                            </form>
                            <form class="resultForms2">
                                <div class="row">
                                    <div class="col col-md-2">
                                        <h6>CarrierId:</h6> 
                                        <br/>
                                        <h6>{items.Carriers[0].Name}</h6>
                                        <h6>{items.Quotes[0].OutboundLeg.CarrierIds}</h6>
                                    </div>
                                    <div class="col col-sm-2">
                                        <h6 class="text-center">Origin:</h6>
                                        <br/>
                                        <h6>Departure: {items.Quotes[0].OutboundLeg.DepartureDate}</h6>
                                        <h6 class="text-center">{items.Places[0].IataCode}</h6>
                                        <h6>{items.Places[0].CountryName}</h6>
                                    </div>
                                    <div class="col col-sm-4">
                                        <h6 class="text-center">Destination:</h6>
                                        <br/>
                                        <h6>Arrival: {items.Quotes[0].OutboundLeg.DepartureDate}</h6>
                                        <h6 class="text-center">{items.Places[1].IataCode}</h6>
                                        <h6>{items.Places[1].CountryName}</h6>
                                    </div>
                                    <div class="col col-md-2">
                                        <h6 class="text-center">Price:</h6>
                                        <br/>
                                        <h6>{items.Currencies[0].Code}</h6>
                                        <h6>{items.Currencies[0].Symbol} {items.Quotes[0].MinPrice}</h6>
                                    </div>
                                    <Toggle text="Flight Added!"/>
                                </div>
                            </form> 
                        </div>
                    )
                })}
            </div>  
        )
    }
}