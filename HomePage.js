import React from 'react'; 
import ReactDOM from 'react-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container } from 'react-bootstrap';


class HomePage extends React.Component{
    state = {
        startDate: new Date()
      };

      handleChange = date => {
        this.setState({
          startDate: date
        });
      };
      
    render(){
        return(
            <div className="MyApp">
                <div class="container">
                  <div class="alert alert-success alert-dismissable">
                       <button type="button" class="close" data-dismiss="alert">x</button>
                        <strong>Success!</strong> You have successfully logged in!
                    </div>
                  </div>
                    <div class="row">
                        <div class="form-group col-md-5">
                            <label><h7>Departing airport</h7></label>
                            <input type="text" class="form-control form-control-lg" id = "Departure" placeholder="Leaving from"></input>
                        </div>

                        <div class="form-group col-md-5">
                            <label><h7>Arriving airport</h7></label>
                            <input type="text" class="form-control form-control-lg" id = "Arrival" placeholder="Going to"></input>
                        </div>
                        
                        <div class="form-group col-sm-5">
                            <div class="form-row">
                                <div class="form-group col-sm-5">
                                    <label for="EarliestDepart"><h7>Earliest departure Date</h7></label>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange} 
                                    />
                                </div>

                                <div class="form-group col-sm-5">
                                    <label for="LatestReturn">Latest return date</label>
                                    <DatePicker
                                        selected={this.state.startDate}
                                        onChange={this.handleChange} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="form-col col-sm-2">
                            <label for="price">Highest price willing to pay</label>
                            <div class="input-group mb-2">
                                <div class="input-group-text">$</div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Enter price"></input>
                            </div>
                        </div>
                        <div class="col-auto my-1">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="autoSizingCheck2" disabled></input>
                                <label class="form-check-label" for="autoSizingCheck2">
                                    Notify me (Must be logged in)
                                </label>
                            </div>
                        </div>     
                    </div>
                    <button type="submit" class="btn btn-success">SUBMIT</button>
                </div>
                   
            </div>
        );
    }
}

export default HomePage; 