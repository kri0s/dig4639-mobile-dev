import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { Card, Button } from 'react-native-elements'
import questions from './questions.json'

const TITLE_STATE = 0
const QUESTION_STATE = 1

export default class App extends React.Component {
  constructor (props) {
    super()
    this.state = {
      currentState: TITLE_STATE,
      currentQuestion: 0,
      score: 0
    }
  }

  nextQuestion (a) {
    if (a.correct) {
      this.setState({ score: this.state.score + 1 })
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }

  scoreMessage () {
    if (this.state.score / questions.length > 0.8) {
      return 'They should call you Rumplestiltskin because you are a master riddler!'
    } else if (this.state.score / questions.length >= 0.8) {
      return 'Decent but could be better... '
    } else {
      return 'Wow you suck at riddles. Try again?'
    }
  }

  render () {
    return (
      <Card containerStyle={styles.container}>
        {(this.state.currentState === TITLE_STATE)
          ? <>
            <Text style={styles.title}>The Impossible Riddles Quiz </Text>
            <Text style={styles.text}>Test your riddle breaking skills with this hard to beat quiz. <br /> (I bet you can't get all the answers right on the first try.)</Text>
            
            <Button title="START QUIZ" buttonStyle={styles.button} onClick = {() => this.setState({ currentState: QUESTION_STATE })}/>
          </>
          : (this.state.currentQuestion < questions.length)
            ? <>
              <Text style={styles.title}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button title={ans.text} key={i} buttonStyle={styles.button} onClick={() => this.nextQuestion(ans)} />
                })}
              </View>
            </>
            : <>
              <Text style={styles.title}>Quiz Completed!</Text>
              <Text style={styles.title}>Score: {this.state.score}/{questions.length}</Text>
              <Text style={styles.text}>{this.scoreMessage()}</Text>
              <Button title="Try Again" buttonStyle={styles.button} onClick={() => this.setState({ currentState: TITLE_STATE, currentQuestion: 0, score: 0 })}/>
            </>
        }
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffedd6',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 500,
    maxWidth: 700,
    margin: 'auto',
    padding: 50,
    textAlign: 'center'
  },
  title: {
    fontSize: 30,
    fontFamily: 'Helvetica',
    fontWeight: '700',
    paddingBottom: 30
  },
  text: {
    fontSize: 23,
    fontFamily: 'Helvetica',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#cf8d86',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    margin: 15,
    fontWeight: '700'
  }

})