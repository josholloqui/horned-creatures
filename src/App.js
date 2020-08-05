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

// const horns = [
//   1,
//   2,
//   3,
//   100
// ]

class App extends React.Component {
  state = { keyword: null }
  handleKeywordType = (e) => {
    const keyword = e.target.value;

    this.setState({keyword})
  }
  render() {
    const filteredKeywords = creaturesData.filter(creature => creature.keyword === this.state.keyword || !this.state.keyword);
    return (
      <body>
        <Header />
        <select onChange={this.handleKeywordType}>
          <optgroup label="Keyword">
            {
              keywords.map(keyword => <option key={keyword} value={keyword}>{keyword}</option>)
            }
          </optgroup>
        </select>
        <CreaturesList creatures={filteredKeywords} />
    </body>
    );
  }
}

export default App;
