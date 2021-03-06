import React from 'react'
import './App.css'

const calculateBmi = ({weight, height}) => weight / (height * height)
const calculateBmiEstimaion = ({bmi}) => {
  if (bmi <= 18.5) {
    return 'Thinness'
  }
  if (bmi > 18.5 && bmi <= 24.9) {
    return 'Normal'
  }
  if (bmi > 24.9 && bmi <= 29.9) {
    return 'Overweight'
  }
  return 'Obese'
}

function App() {
  const [bmi, setBmi] = React.useState(null)
  const [bmiEstimation, setBmiEstimation] = React.useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    const {height, weight} = e.target.elements
    const bmi = calculateBmi({weight: weight.value, height: height.value})
    const bmiEstimation = calculateBmiEstimaion({bmi})
    setBmi(Number(bmi).toFixed(2))
    setBmiEstimation(bmiEstimation)
  }

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      {bmi && <h2>BMI: {bmi}</h2>}
      {bmiEstimation && <h2>BMI Estimation: {bmiEstimation.toLocaleString()}</h2>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="weight">Weight (KG)</label>
          <input id="weight" />
        </div>
        <div>
          <label htmlFor="height">Height (M)</label>
          <input id="height" />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App
