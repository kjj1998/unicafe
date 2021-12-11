import React, { useState } from 'react';

/* Button component */
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

/* Display component */
const Display = (props) => {
  return (
      <h1>{props.value}</h1>
  )
}

/* Count component */
const Count = ({name, value}) => {
  return (
    <div>
      {name} {value}<br/>
    </div>
  )
}

/* Average component */
const Average = ({good, neutral, bad}) => {
  const goodScore = good * 1;
  const neutralScore = neutral * 0;
  const badScore = bad * -1;

  return (
    <div>
      average {(goodScore + neutralScore + badScore) / (good + neutral + bad)}<br/>
    </div>
  )
}

/* Positive component */
const Positive = ({good, total}) => {
  return (
    <div>
      positive {(good/total) * 100} % <br/>
    </div>
  )
}

/* StatisticsLine component */
const StatisticsLine = ({text, value}) => {
  return (
    <div>
      {text} {value} <br/>
    </div>
  )
}

/* Statistics component */
const Statistics = ({good, neutral, bad}) => {
  const goodScore = good * 1;
  const neutralScore = neutral * 0;
  const badScore = bad * -1;
  const average = (goodScore + neutralScore + badScore) / (good + neutral + bad)
  const positive = (good/(good + neutral + bad)) * 100

  if (good + neutral + bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticsLine text="good" value={good} />
      <StatisticsLine text="neutral" value={neutral} />
      <StatisticsLine text="bad" value={bad} />
      all {good+neutral+bad}<br/>
      average {average}<br/>
      positive {positive} %<br/>
    </div>
  )
}

/* StatisticsTable component */
const StatisticsTable = ({good, neutral, bad}) => {
  const goodScore = good * 1;
  const neutralScore = neutral * 0;
  const badScore = bad * -1;
  const overallTotal = good + neutral + bad
  const scoreTotal = goodScore + neutralScore + badScore
  const average = Math.round((scoreTotal/overallTotal) * 10) / 10 
  const positive = Math.round((good/overallTotal) * 100 * 10) / 10

  if (good + neutral + bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>good</td>
          <td>{good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{bad}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{positive} %</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
  }

  const incrementNeutral = () => {
    setNeutral(neutral + 1)
  }

  const incrementBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Display value={"give feedback"} />
      <Button handleClick={incrementGood} text='good' />
      <Button handleClick={incrementNeutral} text='neutral' />
      <Button handleClick={incrementBad} text='bad' />
      <Display value={"statistics"} />
      <StatisticsTable good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App;