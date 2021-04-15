const TabsPanel = ({panels, activeId, handleClick}) => {
    let tabsList = panels.map((tab, index) =>  <li key={index} className={`tab-header ${(activeId===index) ? "active":""}`} onClick={() => handleClick(index)}>{tab}</li> );
    return (<ul className="tab-panel">{tabsList}</ul>);
};

export default TabsPanel;