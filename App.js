import React from "react";
import "./styles.css";
import "./styles.css";
import "./index.css";
import CardList from "./components/card-list";
import SearchBox from "./components/search-box";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users
        })
      );
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rollodex</h1>
        <SearchBox
          placeholder="search monster"
          handleClick={e =>
            this.setState({
              searchField: e.target.value
            })
          }
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
