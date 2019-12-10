import React from 'react';

class Tabs extends React.Component {
    //fix .map() method in test with default props
    static defaultProps = { 
        tabs: [] 
    };
    state = {
        currentTabIndex: 0
    };
    handleButtonClick(index) {
        console.log('button clicked!', {index})
        this.setState({ currentTabIndex: index})
    }
    renderButtons() {
        return this.props.tabs.map((tab, index) => (
            <button key={index} onClick={() => this.handleButtonClick(index)}>
                {tab.name}
            </button>
        ))
    }
    renderContent() {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        return (
            <div className='content'>
                {currentTab.content}
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
}

export default Tabs;

//{/* only show content when the tabs array has length */}
//{this.props.tabs.length && (
//    <div className='content'>
//        {currentTab.content}
//    </div>
//)}