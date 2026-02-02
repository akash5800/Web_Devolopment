import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import Display from './components/Display';
import { useState } from 'react';
function App() {
let [calVal,setCalVal]=useState("");
  const onButtonClick=(event)=>console.log(event);

  return (
    <>
     <div className={styles.calculator}>
       <Display displayValue={calVal}/>
       <ButtonsContainer onButtonClick={onButtonClick}/>
     </div>
    </>
  );
};

export default App;
