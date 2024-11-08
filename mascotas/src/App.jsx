import {useEffect, useState} from 'react'


function App() {

  const [response, setResponse] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/data', {
  
    })
      .then(response => response.json())
      .then(data => setResponse(data));
  }
  , []);


  return (
    <>
      <div> 
      <h1> MIS MASCOTAS </h1>
      <h2> {response?.message} </h2>
      </div>

    </>
  )
}

export default App
