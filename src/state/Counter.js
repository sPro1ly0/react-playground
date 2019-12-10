import React from 'react';

class Counter extends React.Component {
    static defaultProps = {
        step: 1 //challenge to add a prop 'step' to add to count
    };
    //initializing state shorthand and in constructor
    state = { //state property 'count'
        count: 0
    };
    constructor(props) {
        super(props)
        this.state = { //access and read state with this.state
            count: 0
        }
        //this.handleButtonClick = this.handleButtonClick.bind(this) Fix method one
    }
    //before handleButtonClick() {
            //console.log(this.state.count)
            //}
    //after = () => fix 3, cleanest
    //When adding an event listener function to a React class, 
    //use an arrow function to make sure that 'this' is referring to 
    //the class instance.
    handleButtonClick = () => {
        console.log('props in handleButtonClick', this.props);
        console.log('state in handleButtonClick', this.state); //access and read state with this.state
        const newCount = this.state.count + this.props.step;
        //set the state with the new count
        this.setState({
            count: newCount
        })
        //console.log(this.state.count); //We are trying to read a property called
        //'state' on a variable of is this
        //right now, this is currently set to undefined
    }
    //put in render <button onClick={() => this.handleButtonClick()}> fix 2 method arrow function
    render() {
        return (
            <div>
                <p>The current count: {this.state.count}</p>
                <button onClick={this.handleButtonClick}>
                    Add 1
                </button>
            </div>
        )
    }
}

export default Counter;

//When choosing whether a particular value should be state or props:

//If the value will change due to events after the component is mounted: it could be state.
//If the value should be passed in by the components parent: it's props, not state. If the value is not passed in, it's state.
//If the value can be computed from other state: it's not state.