import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setname] = useState('');
  const [age, setage] = useState('')

  const submithandler = (e) => {
    e.preventDefault();
    axios.post('https://sheet.best/api/sheets/4a40da8e-cb9d-4a76-bb13-8ee3471bd359', {
      name: name,
      age: age
    })
  }

  const fetchdata = async () => {
    const result = await axios.get('https://sheet.best/api/sheets/4a40da8e-cb9d-4a76-bb13-8ee3471bd359')
    console.log(result.data)
  }

  useEffect(() => {
    fetchdata();
  }, [])


  return (
    <div className="App">
      <form onSubmit={submithandler}>
        <label>
          name
          <input onChange={(e) => setname(e.target.value)}></input>
        </label>
        <br></br>
        <label>
          age
          <input onChange={(e) => setage(e.target.value)}></input>
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
