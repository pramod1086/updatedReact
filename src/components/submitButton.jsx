import React from 'react';
import './styles/submitButton.css';
class SubmitButton extends React.Component {

	 handleSubmit=()=>{
		fetch('http://localhost:8080/user', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    userID: '100',
    firstName: 'milha',
		lastName:'Singh'
  })
}).then(function(response) {
    return response.json();
  }).then(function(data) {
    ChromeSamples.log('Created Gist:', data.html_url);
  });
	}
render() {
	return (
		<div className="btn">
		<button onClick={this.handleSubmit} type="submit">Submit</button>
	</div>);
}
}

// const SubmitButton = (props) => (
//
// );

export default SubmitButton;
