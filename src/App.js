import React from 'react';
import Header from './Header.js';
import CreaturesList from './CreatureList.js';
import creaturesData from './data.js';
import './App.css';

const keywords = [
  'narwhal',
  'rhino',
  'unicorn',
  'unilego',
  'triceratops',
  'markhor',
  'mouflon',
  'addax',
  'chameleon',
  'lizard',
  'dragon'
]

const horns = [
  1,
  2,
  3,
  100
]
class App extends React.Component {
  state = {
    keyword: null,
    horns: null,
  }
  handleKeywordType = (e) => {
    const keyword = e.target.value;

    this.setState({keyword})
  }
  handleHorns = (e) => {
    const horns = e.target.value;

    this.setState({horns})
  }

  render() {
    const filteredStates = creaturesData
    .filter(creature => creature.keyword === this.state.keyword || !this.state.keyword)
    .filter(creature => creature.horns === Number(this.state.horns) || !this.state.horns)
    return (
      <body>
        <Header />
        <div>
          <label>Creature Type:</label>
          <select onChange={this.handleKeywordType}>
            <optgroup label="Keyword">
              <option value="">
                All Creatures
              </option>
              {
                keywords.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
              }
            </optgroup>
          </select>
        </div>
        <div>
          <label>How Many Horns?</label>
          <select onChange={this.handleHorns}>
            <optgroup label="Number of Horns">
              <option value="">
                All Horns
              </option>
              {
                horns.map(horn => <option key={Number(horn)} value={Number(horn)}>{horn}</option>)
              }
            </optgroup>
          </select>
        </div>
        <CreaturesList creatures={filteredStates} />
    </body>
    );
  }
}

export default App;
