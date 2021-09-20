import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from './AddUser.module.css';

const AddUser = (props) => {
    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 && enteredAge.trim().length ===  0){
            setError({
                title: 'Invalid Input',
                message: 'Please Enter A Valid Name and Age (non-empty values)!'
            })
           return;
        }
        if(enteredUserName.trim().length === 0 && enteredAge.trim().length !==  0){
            setError({
                title: 'Invalid Input',
                message: 'Please Enter A Valid Age (non-empty value)!'
            })
           return;
        }
        if(enteredUserName.trim().length !== 0 && enteredAge.trim().length ===  0){
            setError({
                title: 'Invalid Input',
                message: 'Please Enter A Valid Name (non-empty value)!'
            })
           return;
        }
        if(+enteredAge <= 0){
            setError({
                title: 'Invalid Age',
                message: 'Please Enter A Valid Age (> 0)!'
            }) 
           return;
        }
        //console.log(enteredUserName, enteredAge);
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    };

    const userNameChangeHandler = (event) =>
    {
        setEnteredUserName(event.target.value);
    };
    const ageChangeHandler = (event) =>{
        setEnteredAge(event.target.value);
    };
    const errorHandler = () =>{
       setError(null);
    };

    return(
        <div>
            { error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
            <Card classNameCard={styles.input}> 
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>

    );
}

export default AddUser;