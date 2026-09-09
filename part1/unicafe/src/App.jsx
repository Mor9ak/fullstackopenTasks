import {useState} from 'react'

const Button = ({handle, text}) => {
    return <button onClick={handle}>{text}</button>
}

const StatisticLine = ({text, value, after}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}{after ? after : ''}</td>
        </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const all = good + neutral + bad;
    const isStats = good || neutral || bad;
    if (!isStats) {
        return (
            <h2>No feedback given yet</h2>
        )
    } else return (
        <div>
            <h2>statistics</h2>
            <StatisticLine text={'good'} value={good}/>
            <StatisticLine text={'neutral'} value={neutral}/>
            <StatisticLine text={'bad'} value={bad}/>
            <StatisticLine text={'all'} value={all}/>
            <StatisticLine text={'average'} value={(good - bad) / all}/>
            <StatisticLine text={'positive'} value={(good / all * 100).toFixed(1)} after={'%'}/>
        </div>
    )
}

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {setGood(good + 1)};
    const handleNeutral = () => {setNeutral(neutral + 1)};
    const handleBad = () => {setBad(bad + 1)};

    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button text={'good'} handle={handleGood} />
                <Button text={'neutral'} handle={handleNeutral} />
                <Button text={'bad'} handle={handleBad} />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

export default App