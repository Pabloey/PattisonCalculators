import { useState } from 'react'

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
    setInputBoxes({ ...inputBoxes, [e.target.name]: parseInt(e.target.value) })
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
          <td>{inputBoxes.box1}</td>
          <td><input name="box1" onChange={handleChange}></input></td>
          <td>#4</td>
        </tr>
        <tr>
          <td></td>
          <td><input name="box2" onChange={handleChange}></input></td>
          <td>8</td>
        </tr>
        <tr>
          <td></td>
          <td><input name="box3" onChange={handleChange}></input></td>
          <td>10</td>
        </tr>
        <tr>
          <td></td>
          <td><input name="box4" onChange={handleChange}></input></td>
          <td>16</td>
        </tr>
        <tr>
          <td></td>
          <td><input name="box5" onChange={handleChange}></input></td>
          <td>30</td>
        </tr>
        <tr>
          <td></td>
          <td><input name="box6" onChange={handleChange}></input></td>
          <td>40</td>
        </tr>
        <tr>
          <td></td>
          <td><input name="box7" onChange={handleChange}></input></td>
          <td>50</td>
        </tr>
        <tr>
          <td></td>
          <td><input name="box8" onChange={handleChange}></input></td>
          <td>100</td>
        </tr>
        <tr>
          <td></td>
          <td><input name="box9" onChange={handleChange}></input></td>
          <td>200</td>
        </tr>
        <tr>
          <td></td>
          <td><input name="box10" onChange={handleChange}></input></td>
          <td>-200</td>
        </tr>
      </table>
    </div>
  )
}

export default App