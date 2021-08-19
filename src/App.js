import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";

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

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) =>
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state.searchField)
            )
          }
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
