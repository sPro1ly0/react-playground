import React, { Component } from 'react';
import languageSpecificCopy from './languageSpecificCopy';

//const copy = languageSpecificCopy['en-US'] || {}
//or an empty object logic gives a safety net in undefined cases
//use an empty object in the worst case
//{}.title and {}.body won't throw errors if the key doesn't exist in languageSpecificCopy
class GreatGrandChild extends Component {
    render() {
        const copy = languageSpecificCopy['en-US'] || {}
        return (
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
            </section>
        )
    }
}

export default GreatGrandChild;