import React from 'react';
import TabContent from './TabContent';
import TabsPanel from './TabsPanel';
import './tabs.css'

class Tabs extends React.Component {
    constructor(props) {
        super(props);   // <-- What does this do?
        this.state = { activeId: 0 };                
    }
    handleClick = (tab_id) => {
        this.setState({ activeId: tab_id });
    }
    render() {
        let panels=[], content=[];
        this.props.tabsData.forEach(tab => {
            panels.push(tab.title);
            content.push(tab.content);
        });
        return (
            <React.Fragment>
                <TabsPanel panels={panels} activeId={this.state.activeId} handleClick={this.handleClick} />
                <TabContent content={content[this.state.activeId]} />
            </React.Fragment>
        );
    }
}

export default Tabs