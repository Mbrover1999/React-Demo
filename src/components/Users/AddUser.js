import React, {useState} from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"
import Button from "../UI/Button";
const AddUser = (props) => {
   const [enteredUsername, setEnteredUsername] =  useState('');
    const [enteredAge, setEnteredAge] =  useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
            return;
        }
        console.log(enteredUsername, enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    };
    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    return (
        <Card className={classes.input}>
            <form>
                <label htmlFor="username" onSubmit={addUserHandler}>Username:</label>
                <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}></input>
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}></input>
                <Button onClick={addUserHandler}>Add User</Button>
            </form>
        </Card>);
};
export default AddUser;
