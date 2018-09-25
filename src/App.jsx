import React, {Component} from 'react';
//import Container from './components/container.jsx';
import Container from './components/container.jsx';
import axios from "axios";


class App extends Component {
constructor(props){
	super(props);
	this.state = {
      data: []
    }
}
componentDidMount() {
  fetch("http://localhost:8080/user/getallusers")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
}

render() {
    return (
			<div>
	        <Container data = {this.state.data}/>

	    </div>
    );
  }
}
export default App;
