import React, { ChangeEvent, Component } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";

type user = {
  name: string,
  email: string
}

type AppState = {
  users: Array<user>,
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

  handleChange = (e: ChangeEvent<HTMLInputElement>)  => {
    this.setState({
      search: e.target.value
    });
  }

  render() {
    const {users, search} = this.state;
    const filteredUsers =  users.filter(user => user.name.toLowerCase().includes(search.toLocaleLowerCase()));
    return (
      <div className="App">
        <Header />
        <SearchBar placeholder="" handleChange={this.handleChange}/>
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
