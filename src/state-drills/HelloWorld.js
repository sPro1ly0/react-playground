import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    state = {
        word: "who?"
    };
    worldButtonClick = () => {
        this.setState({
            word: "World!"
        })
    }
    friendButtonClick = () => {
        this.setState({
            word: "Friend!"
        })
    }
    reactButtonClick = () => {
        this.setState({
            word: "React!"
        })
    }
    render () {
        return (
            <div>
                <p>
                    Hello, {this.state.word}
                </p>
                <button onClick={this.worldButtonClick}>World</button>
                <button onClick={this.friendButtonClick}>Friend</button>
                <button onClick={this.reactButtonClick}>React</button>
            </div>
        )
    }
}

export default HelloWorld;