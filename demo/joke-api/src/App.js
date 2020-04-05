import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {content:""}
  }

  componentDidMount() {
    console.log("Component did mount!")
    fetch("http://localhost:3000")
      .then(async (response) => {
        console.log("Received response from server!")
        console.log(response)
        let obj = await response.json()
        console.log("Processed response as JSON: ", obj)
        this.setState({content:obj.b})
      })
  }

  render() {
    return (
    <div>
      {this.state.content}
    </div>
    )
  }
}

export default App;
