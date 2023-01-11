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
    sum: 0
  })


  // const [splitBox, setSplitBox] = useState(false)


  // handleChange functions holds the information put into the input fields.
  const handleChange = (e) => {
    setInputBoxes({ ...inputBoxes, [e.target.name]: parseInt(e.target.value) })
  }

  return (
    <div>
      <h1>Sieve Calculator</h1>
      <form>
        Is it split? Tick box if yes<input type="checkbox"></input>
      </form>
      <form>
        <input name="box1" onChange={handleChange} type='text'></input> #4<br /><br />
        <input name="box2" onChange={handleChange} type='text'></input>  8<br /><br />
        <input name="box3" onChange={handleChange} type='text'></input>  10<br /><br />
        <input name="box4" onChange={handleChange} type='text'></input>  16<br /><br />
        <input name="box5" onChange={handleChange} type='text'></input>  30<br /><br />
        <input name="box6" onChange={handleChange} type='text'></input>  40<br /><br />
        <input name="box7" onChange={handleChange} type='text'></input>  50<br /><br />
        <input name="box8" onChange={handleChange} type='text'></input>  100<br /><br />
        <input name="box9" onChange={handleChange} type='text'></input>  200<br /><br />
        <input name="box10" onChange={handleChange} type='text'></input>  200+<br /><br />
      </form>
      <p>{inputBoxes.box1 + inputBoxes.box2 + inputBoxes.box3 + inputBoxes.box4 + inputBoxes.box5 + inputBoxes.box6 + inputBoxes.box7 + inputBoxes.box8 + inputBoxes.box9 + inputBoxes.box10}</p>
    </div>
  )
}

export default App