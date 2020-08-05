import React from 'react';

class Creature extends React.Component {
    render() { 
        return (
            <li>
                <img alt={ this.props.creature.url } src={ this.props.creature.url.includes('modernfarmer') ? 'http://www.placekitten.com/250/250' : this.props.creature.url } />
                <h3>{this.props.creature.title}</h3>
                <p className="creatureDetails">Creature Type: {this.props.creature.keyword.charAt(0).toUpperCase() + this.props.creature.keyword.slice(1)} - Number of Horns: {this.props.creature.horns}</p>
                <p className="creatureDescription">{this.props.creature.description}</p>
            </li>
        );
    }
}
 
export default Creature;