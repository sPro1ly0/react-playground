import React, { Component } from 'react';
import languageSpecificCopy from './languageSpecificCopy';
import LanguageContext from './LanguageContext';

//const copy = languageSpecificCopy['en-US'] || {}
//or an empty object logic gives a safety net in undefined cases
//use an empty object in the worst case
//{}.title and {}.body won't throw errors if the key doesn't exist in languageSpecificCopy
class GreatGrandChild extends Component {
    static contextType = LanguageContext; //static property called contextType, gives an instance property...this.context

    render() {
        const copy = languageSpecificCopy[this.context.lang] || {}
        return (
            <section>
                <h2>{copy.title}</h2>
                <p>{copy.body}</p>
                <button
                    onClick={() => this.context.setLang('klingon')}
                >
                    Klingon!{' '}
                    <span role='img' aria-label='klingon'>🖖</span>
                </button>
            </section>
        )
    }
}

export default GreatGrandChild;