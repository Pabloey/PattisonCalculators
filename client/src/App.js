import { useState } from 'react'

const App = () => {
  const [inputBoxes, setInputBoxes] = useState({
    box1: "",
    box2: "",
    box3: "",
    box4: "",
    box5: "",
    box6: "",
    box7: "",
    box8: "",
    box9: "",
    box10: "",
  })

  const [splitBox, setSplitBox] = useState(false)

  const handleChange = (e) => {
    // setInputBoxes({...inputBoxes, [e.target.name]: e.target.value})
    console.log({ ...inputBoxes, [e.target.name]: e.target.value })

  }

  return (
    <div>
      <h1>Sieve Calculator</h1>
      <form>
        Is it split? Tick box if yes<input type="checkbox"></input>
      </form>
      <form>
        <input name="box10" onChange={handleChange} type='text'></input> #4<br /><br />
        <input name="box1" onChange={handleChange} type='text'></input>  8<br /><br />
        <input name="box2" onChange={handleChange} type='text'></input>  10<br /><br />
        <input name="box3" onChange={handleChange} type='text'></input>  16<br /><br />
        <input name="box4" onChange={handleChange} type='text'></input>  30<br /><br />
        <input name="box5" onChange={handleChange} type='text'></input>  40<br /><br />
        <input name="box6" onChange={handleChange} type='text'></input>  50<br /><br />
        <input name="box7" onChange={handleChange} type='text'></input>  100<br /><br />
        <input name="box8" onChange={handleChange} type='text'></input>  200<br /><br />
        <input name="box9" onChange={handleChange} type='text'></input>  200+<br /><br />
      </form>
    </div>
  )
}

export default App