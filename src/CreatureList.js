import React from 'react';
import Creature from './Creature.js';


class CreatureList extends React.Component {
    render() { 
        return (
            <main>
                <ul>
                    {this.props.creatures.map(creature => <Creature creature={creature} />)}
                </ul>
            </main>
        );
    }
}
 
export default CreatureList;