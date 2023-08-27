import './App.css';
import React, {useState} from 'react'
import Para from "./Component/Para"
import Heading from './Component/heading';
 
function App() {
 
  const [weight, setWeight] = useState()

  const [height, setHeight] = useState()

  const [bmi, setBmi] = useState('')
  
  const [message, setMessage] = useState('')

  function ofHeight(event) {
   
    setHeight(event.target.value)
  }
 
  function ofWeight(event){
    setWeight(event.target.value)
  }
  let calcBmi = (event) => {
    event.preventDefault()
    
      let bmi = (weight / (height * height) * 10000)
      setBmi(bmi.toFixed(1))
 
      if (bmi < 18.5) {
        setMessage('You are underweight')
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are a healthy')
      } else {
        setMessage('You are overweight')
      }
    
  }

 
  return (
    <div className="app">
       <Heading/>
    <div className='wrapper'>
      <form onSubmit={calcBmi}>
          <Para text="Enter Your Weight in kilograms"/>
          <div className="box"> 
          <input className='btn' type="number" value={weight} onChange={ofWeight} />
          </div>
          <Para text="Enter Your Height in centimeters"/>
          <div className="box"> 
          <input className='btn' type="number" value={height} onChange={ofHeight} />
          </div>
        <div>
          <div className='box'>
          <button className='calcbtn' type='submit'>Submit</button>
          </div>
        </div>
      </form>
 
      <div className='wrapper'>
        <p className='para'>Your BMI is: {bmi}</p>
        <p className='para'>{message}</p>
      </div>
    </div>
  </div>
  );
}
 
export default App;