import Inputbox from './Components/Inputbox';
import ButtonContainer from './Components/ButtonContainer';
import './App.css'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  let [calVal, setCalVal] = useState("");
  const onClickButton = (event) => {
    let newVal = event.currentTarget.dataset.lable;
    console.log(newVal);
    if(newVal == 'c')
    {
      setCalVal("");
    }
    else if(newVal == '=')
    {
      setCalVal(eval(calVal));
    }
    else
    {
      const newCalValue = calVal + newVal;
      setCalVal(newCalValue);
    }
  }

  return (
    <div className='container' style={{width : 500}}>    
      <div className='row'>
        <Inputbox calVal={calVal}></Inputbox><br/><br/>
        <ButtonContainer onClickButton={onClickButton}></ButtonContainer>
      </div>
    </div>  
  )
}

export default App
