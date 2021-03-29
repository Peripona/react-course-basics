import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
//import CardList from './Components/CardList/CardList';

class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(response => response.body)
    // .then((rb) => {
    //   // @ts-ignore
    //   const reader = rb.getReader();

    //   return new ReadableStream({
    //     start(controller) {
    //       // The following function handles each data chunk
    //       function push() {
    //         // "done" is a Boolean and value a "Uint8Array"
    //         //ts-ifno
    //         reader.read().then( ({done, value}) => {
    //           // If there is no more data to read
    //           if (done) {
    //             console.log('done', done);
    //             controller.close();
    //             return;
    //           }
    //           // Get the data and send it to the browser via the controller
    //           controller.enqueue(value);
    //           // Check chunks by logging to the console
    //           console.log(done, value);
    //           push();
    //         })
    //       }

    //       push();
    //     }
    //   });
    // })
    // .then(stream => {
    //   // Respond with our stream
    //   return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
    // })
    // .then(result => {
    //   // Do things with result
    //   console.log(result);
    // });
  }

  render() {
    // @ts-ignore
    const {users} = this.state;
    return (
      <div className="App">
        <CardList users={users} />
      </div>
    );
  }
}

export default App;
