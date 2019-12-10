import React from 'react';

class Accordion extends React.Component {
    static defaultProps = { 
        sections: [] 
    };

    state = {
        currentSectionIndex: null
    }

    handleButtonClick(index) {
        this.setState({ currentSectionIndex: index })
    }

    renderButtons(section, index, currentSectionIndex) {
        return (
                <li key={index}>  
                    <button key={index} onClick={() => this.handleButtonClick(index)}>
                        {section.title}
                    </button>
                    {currentSectionIndex === index && <p>{section.content}</p>}
                </li>
            )
    }

    render() {
        const {currentSectionIndex} = this.state
        const {sections} = this.props
        return (
            <div>
                <ul>
                    {sections.map((section, index) => 
                        this.renderButtons(section, index, currentSectionIndex)
                    )}
                </ul>
            </div>
        )
    }
}

export default Accordion;