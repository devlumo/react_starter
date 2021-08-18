import React from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // fn is called when the App component is created in the DOM
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
