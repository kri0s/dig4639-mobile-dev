import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {trivia:[]}
  }
  componentDidMount() {
    console.log("Mounted!")
    this.callApi()
  }

  async callApi() {
    const retValue = await fetch('https://opentdb.com/api.php?amount=50')
    const obj = await retValue.json()
    console.log(obj)
    this.setState({trivia:obj.results})
  }

  render() {
    return (
      <>
      {
        this.state.trivia.map((obj, index) =>
        <div key={index}>
          <p>{obj.question}</p>
          <p>{obj.correct_answer}</p>
        </div>
        )
      }
      </>
    );
  }
}

export default App;
