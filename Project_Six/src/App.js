import React, {useState, useCallback} from 'react';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
//import MyParagraph from './components/Demo/MyParagraph';
import './App.css';

function App() {
  const [showParaghaph, setShowParaghaph] = useState(false);

  //Every time app component is reevaluated then they created function object (Javascript Issue)(componebts which receives objects, arrays, functions)
  const onToggleButton = useCallback(() =>{
    setShowParaghaph(prevShowParagraph => !prevShowParagraph);
    },[]);
    
    console.log("App running!"); //for every state change it'll re eveluate it
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParaghaph}/>
      <Button onClick={onToggleButton}>Show Paragraph</Button>
    </div>
  );
}

export default App;
