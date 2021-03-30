import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";

type AppState = {
  users: [],
  search: string
}

class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
      search: '',
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    const {users, search} = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBar placeholder="" handleChange={(e) => console.log(e.target.value, search)}/>
        <CardList users={users} />
      </div>
    );
  }
}

export default App;
