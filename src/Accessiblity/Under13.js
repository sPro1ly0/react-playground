import React, { Component } from 'react';

class Under13 extends Component {

    constructor() {
        super();
        this.state = {
            age: 18,
            tooYoung: false
        };
        //create a ref
        this.age = React.createRef();
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            tooYoung: this.state.age < 13
        }, () => {
            if(this.state.tooYoung) {
                //reset the focus on the input
                //tab to submit and the input is invalid
                //the tab moves back to the input
                this.age.current.focus();
            }
        });
    }

    handleChange(age) {
        this.setState({
            age
        });
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="age">Enter your age:
                <   span>(required)</span>
                </label>
                <input 
                    type="number" 
                    id="age" 
                    name="age" 
                    aria-required="true"
                    aria-describedby="ageDescription"
                    aria-label="Enter you age"
                    ref={this.age}
                    onChange={e => this.handleChange(parseInt(e.target.value), 10)}
                    aria-invalid={this.state.tooYoung}/>
                <div id="ageDescription">You must be 13 years of age or older to use this site.</div>  

                <button type="submit">Go</button>
            </form>
        )
    }
}

export default Under13;