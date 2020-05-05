/*
# Author(s): Emmanuel Lee
# Date: May 5, 2020
# Flight Tracker Application 
# team 3
*/
import React from 'react'; 

export default class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: true, 

        }
    }
    toggleIsHidden (e) {
        e.preventDefault(); 
        this.setState((currentState) => ({
            isHidden: !currentState.isHidden, 
        }));
    }

    render() {

        return(
            <div>
               <button class="btn btn-success" onClick={(e) => this.toggleIsHidden(e)}>track</button>
               {!this.state.isHidden && this.props.text}
            </div>
        );
    }
}