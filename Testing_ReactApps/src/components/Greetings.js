import React, {useState} from 'react';
import Output from './Output';


const Greetings = props => {
    const [changedText, setChangedText] = useState(false);
    const changeTextHandler = () => {
        setChangedText(true);
    };

    return (
        <div>
            <h1>Hello World!</h1>
            {!changedText && <Output>Hey there all good?</Output>}
            {changedText && <Output>I believe you doing great!</Output>}
            <button onClick={changeTextHandler} >Change Text</button>
        </div>
    );
};

export default Greetings
