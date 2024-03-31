import './App.css';
import chuckImg from './asset/chuck-norris.png'
import { useState, useEffect} from 'react'

function App() {
  const [cite,setCite]=useState('')

  const handleClick=()=>{
    const url='https://api.chucknorris.io/jokes/random'
    const petition=fetch(url)
    petition.then(response=>response.json())
    .then(data=>setCite(data.value))
    .catch(console.log)

  }
  useEffect(()=>{
    handleClick()
  },[])
  return (
    <>
      <div className="container-img">
        <img src={chuckImg} alt="imagen de chuck norris"/>
      </div>
      <section className="container">
        <cite>{cite}</cite>
          <button onClick={handleClick}>Next</button>
      </section>      
    </>
  );
}

export default App;
