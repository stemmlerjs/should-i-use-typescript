
import React from 'react'
import PropTypes from 'prop-types'
import flowData from '../data/flow'
import { Button } from './shared/button';
import "./App.sass"

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      flow: flowData
    }
  }

  getQuestionKey () {
    const { flow } = this.state;
    return Object.keys(flow)[0];
  }

  getQuestion () {
    const { flow } = this.state;
    return Object.keys(flow)[0];
  }
  
  answerSubmitted (yesOrNo) {
    const { flow } = this.state;
    const questionKey = Object.keys(flow)[0];
    const newFlow = flow[questionKey][yesOrNo];
    this.updateFlow(newFlow);
  }

  isFlowComplete () {
    const { flow } = this.state;
    const key = this.getQuestionKey();
    return flow[key] === null;
  }

  updateFlow (newFlow) {
    this.setState({ flow: newFlow })
  }

  render () {
    const question = this.getQuestion();
    const flowCompleted = this.isFlowComplete();

    return (
      <div className="app">
        <div className="app-inner-container">
          <h2>{question}</h2>
          {!flowCompleted ? (
            <div>
              <Button className="yes" text="Yes" onClick={() => this.answerSubmitted('yes')}/>
              <Button className="no" text="No" onClick={() => this.answerSubmitted('no')}/>
            </div>
          ) : (
            <div className="social">
              <a href="https://khalilstemmler.com/articles/when-to-use-typescript-guide/">Based off of this discussion on "When to Use TypeScript"</a>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default App;