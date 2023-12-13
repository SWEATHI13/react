\import React from 'react';

class Switcher extends React.Component 
{
    constructor(props) {
    super(props);
    this.state = {
        ison: false,
        };
    }
    handleToggle = () => {
    this.setstate((prevstate) => ({
        ison: !prevstate.ison,
    }));
};
render() 
{
    return (
    <div>
    <button onClick={this.handleToggle}>
        {this. state. ison ? 'ON' : 'OFF'}
    </button>
    </div>
    
    );
}
}
    
export default Switcher;
