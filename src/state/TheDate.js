import React from 'react';

class TheDate extends React.Component {
    //the component is created
    constructor(props) {
        super(props)
        this.state = { datetime: new Date() };
        console.log('constructor') //happens first once
    }
    //Component has been added to the DOM
    //componentDidMount is a sensible place to put setTimeout or setInterval calls
    componentDidMount() {
        console.log('componentDidMount') //happened third
        this.interval = setInterval(() => {
            console.log('setInterval') //happens 4th, then render
            this.setState({//use this.setState and pass in an object to merge over the top of the current state, like Object.assign
                datetime: new Date() 
            })
        }, 1000)
    }
    //Component is about to be removed from the DOM
    //if the parent component's render doesn't render this component anymore
    //then this component will be removed
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    //the component is reacting to being created or updated
    //if component props or state change, the render can happen again
    render() {
        console.log('render') //happened second
        return (
        <div>{this.state.datetime.toLocaleString()}</div>
        )
    }
    //update the DOM=component is added or changed in the DOM
    //If the component's render function returns somethin, it'll be mounted
    //If the result of render is different from what's on the page it'll be updated
};

//setInterval and render happen continously per second
//everytime setState is called a new render is triggered
//unmount won't happen until we unmount the component

export default TheDate