import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search-box";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  // fn is called when the App component is created in the DOM
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
