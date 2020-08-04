import React from 'react';

class Creature extends React.Component {
    render() { 
        return (
            <li>
                <img alt={ this.props.creature.url } src={ this.props.creature.url } />
                <h3>{this.props.creature.title}</h3>
            </li>
        );
    }
}
 
export default Creature;