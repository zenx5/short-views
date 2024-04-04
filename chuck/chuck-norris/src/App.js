import './App.css';
import chuckImg from './asset/chuck-norris.png'
import { useState, useEffect} from 'react'

function App() {
  const [cites,setCites]=useState('')

  const getData = async () => {
    const response = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await response.json()
    if( data ) setCites(data.value)
  }
  
  useEffect(()=>{
    getData()
  },[])

  
  const handleClick = () => {
    getData()
  }
  
  return (
    <>
      <div className="container-img">
        <img src={chuckImg} alt="imagen de chuck norris"/>
      </div>
      <section className="container">
        <cite>{cites}</cite>
          <button onClick={handleClick}>Next</button>
      </section>      
    </>
  );
}

export default App;
