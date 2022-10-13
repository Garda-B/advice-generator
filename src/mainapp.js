import { useEffect, useState } from "react";
import "./App.css"
import dice from './images/icon-dice.svg';
import dividerdesktop from './images/pattern-divider-desktop.svg'
import dividermobile from './images/pattern-divider-mobile.svg'


function Mainapp() {

    const [datum, setDatum] = useState("")
    const [id, setId] = useState("")

   useEffect(() => {
       handleData()
    }, []);


  const handleData = () => {
        fetch('https://api.adviceslip.com/advice')
  .then((response) => response.json())
  .then((data) => { 
  setId(data.slip.id);
  setDatum(data.slip.advice);}

  );}
     

    return (<div className="App">
        <p>ADVICE #{id}</p>
        <p>"{datum}"</p>
        <div><img className="dividerdesktop" src={dividerdesktop} alt="divider"></img></div>
        <div><img className="dividermobile" src={dividermobile} alt="divider"></img></div>
        <button className="button" onClick={handleData}>
            <img className="dice" src={dice} alt="button"></img>
        </button>
    </div>


    )

}


export default Mainapp;