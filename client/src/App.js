import { useState } from 'react'
import './styles/index.css'

const App = () => {
  const [inputBoxes, setInputBoxes] = useState({
    box1: 0,
    box2: 0,
    box3: 0,
    box4: 0,
    box5: 0,
    box6: 0,
    box7: 0,
    box8: 0,
    box9: 0,
    box10: 0,
  })

  // handleChange functions holds the information put into the input fields.
  const handleChange = (e) => {
    setInputBoxes({ ...inputBoxes, [e.target.name]: Math.round(parseFloat(e.target.value) * 10) / 10 })
    console.log(e.target.checked)
  }

  return (
    <div>
      <h1>Accumulate Sieve</h1>
      Is it split? Tick box if yes<input onChange={handleChange} type="checkbox"></input>
      <table>
        <tr>
          <th>Result</th>
          <th>Weight</th>
          <th>Sieve</th>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box1) ? 0 : inputBoxes.box1}</td>
          <td><input name="box1" onChange={handleChange}></input></td>
          <td className='font-text-size'>#4</td>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box2) ? 0 : inputBoxes.box2}</td>
          <td><input name="box2" onChange={handleChange}></input></td>
          <td className='font-text-size'>8</td>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box3) ? 0 : inputBoxes.box3}</td>
          <td><input name="box3" onChange={handleChange}></input></td>
          <td className='font-text-size'>10</td>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box4) ? 0 : inputBoxes.box4}</td>
          <td><input name="box4" onChange={handleChange}></input></td>
          <td className='font-text-size'>16</td>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box5) ? 0 : inputBoxes.box5}</td>
          <td><input name="box5" onChange={handleChange}></input></td>
          <td className='font-text-size'>30</td>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box6) ? 0 : inputBoxes.box6}</td>
          <td><input name="box6" onChange={handleChange}></input></td>
          <td className='font-text-size'>40</td>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box7) ? 0 : inputBoxes.box7}</td>
          <td><input name="box7" onChange={handleChange}></input></td>
          <td className='font-text-size'>50</td>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box8) ? 0 : inputBoxes.box8}</td>
          <td><input name="box8" onChange={handleChange}></input></td>
          <td className='font-text-size'>100</td>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box9) ? 0 : inputBoxes.box9}</td>
          <td><input name="box9" onChange={handleChange}></input></td>
          <td className='font-text-size'>200</td>
        </tr>
        <tr>
          <td className='font-text-size'>{isNaN(inputBoxes.box10) ? 0 : inputBoxes.box10}</td>
          <td><input name="box10" onChange={handleChange}></input></td>
          <td className='font-text-size'>-200</td>
        </tr>
      </table>
    </div>
  )
}

export default App